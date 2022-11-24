use crate::{
    common::{Batch, Context, KeyValueOperations},
    views::{HashView, Hasher, HashingContext, View, ViewError},
};
use async_trait::async_trait;
use std::{collections::BTreeMap, fmt::Debug, mem};

use crate::{
    common::{ContextFromDb, SimpleKeyIterator},
    memory::{MemoryContext, MemoryStoreMap},
};
use tokio::sync::OwnedMutexGuard;

/// A view that represents the KeyValueOperations
#[derive(Debug, Clone)]
pub struct KeyValueStoreView<C> {
    context: C,
    was_cleared: bool,
    updates: BTreeMap<Vec<u8>, Option<Vec<u8>>>,
}

#[async_trait]
impl<C> View<C> for KeyValueStoreView<C>
where
    C: Context + Send + Sync,
    ViewError: From<C::Error>,
{
    fn context(&self) -> &C {
        &self.context
    }

    async fn load(context: C) -> Result<Self, ViewError> {
        Ok(Self {
            context,
            was_cleared: false,
            updates: BTreeMap::new(),
        })
    }

    fn rollback(&mut self) {
        self.was_cleared = false;
        self.updates.clear();
    }

    fn flush(&mut self, batch: &mut Batch) -> Result<(), ViewError> {
        if self.was_cleared {
            self.was_cleared = false;
            batch.delete_key_prefix(self.context.base_key());
            for (index, update) in mem::take(&mut self.updates) {
                if let Some(value) = update {
                    batch.put_key_value_bytes(self.context.derive_key_bytes(&index), value);
                }
            }
        } else {
            for (index, update) in mem::take(&mut self.updates) {
                match update {
                    None => batch.delete_key(self.context.derive_key_bytes(&index)),
                    Some(value) => {
                        batch.put_key_value_bytes(self.context.derive_key_bytes(&index), value)
                    }
                }
            }
        }
        Ok(())
    }

    fn delete(self, batch: &mut Batch) {
        batch.delete_key_prefix(self.context.base_key());
    }

    fn clear(&mut self) {
        self.was_cleared = true;
        self.updates.clear();
    }
}

impl<C> KeyValueStoreView<C>
where
    C: Send + Context,
    ViewError: From<C::Error>,
{
    pub fn new(context: C) -> Self {
        Self {
            context,
            was_cleared: false,
            updates: BTreeMap::new(),
        }
    }

    async fn indices(&self) -> Result<Vec<Vec<u8>>, ViewError> {
        let len = self.context.base_key().len();
        let key_prefix = self.context.base_key();
        let mut keys = Vec::new();
        if !self.was_cleared {
            for key in self.context.find_keys_with_prefix(&key_prefix).await? {
                if !self.updates.contains_key(&key) {
                    let key = &key[len..];
                    keys.push(key.to_vec())
                }
            }
        }
        for (key, value) in &self.updates {
            if value.is_some() {
                keys.push(key.to_vec())
            }
        }
        keys.sort();
        Ok(keys)
    }

    pub async fn get(&self, index: &[u8]) -> Result<Option<Vec<u8>>, ViewError> {
        if let Some(update) = self.updates.get(index) {
            return Ok(update.as_ref().cloned());
        }
        if self.was_cleared {
            return Ok(None);
        }
        let key = self.context.derive_key_bytes(index);
        let value = self.context.read_key_bytes(&key).await?;
        Ok(value)
    }

    /// Set or insert a value.
    pub fn insert(&mut self, index: Vec<u8>, value: Vec<u8>) {
        self.updates.insert(index, Some(value));
    }

    /// Remove a value.
    pub fn remove(&mut self, index: Vec<u8>) {
        if self.was_cleared {
            self.updates.remove(&index);
        } else {
            self.updates.insert(index, None);
        }
    }
}

#[async_trait]
impl<C> KeyValueOperations for KeyValueStoreView<C>
where
    C: Context + Sync + Send,
    ViewError: From<C::Error>,
{
    type Error = ViewError;
    type KeyIterator = SimpleKeyIterator<ViewError>;

    async fn read_key_bytes(&self, key: &[u8]) -> Result<Option<Vec<u8>>, ViewError> {
        if let Some(update) = self.updates.get(key) {
            return Ok(update.clone());
        }
        if self.was_cleared {
            return Ok(None);
        }
        let val = self.context.read_key_bytes(key).await?;
        Ok(val)
    }

    async fn find_keys_with_prefix(
        &self,
        key_prefix: &[u8],
    ) -> Result<Self::KeyIterator, ViewError> {
        let len = self.context.base_key().len();
        let key_prefix = self.context.derive_key_bytes(key_prefix);
        let mut keys = Vec::new();
        if !self.was_cleared {
            for key in self.context.find_keys_with_prefix(&key_prefix).await? {
                if !self.updates.contains_key(&key) {
                    let key = &key[len..];
                    keys.push(key.to_vec())
                }
            }
        }
        for (key, value) in &self.updates {
            if value.is_some() {
                keys.push(key.to_vec())
            }
        }
        Ok(SimpleKeyIterator::new(keys))
    }

    async fn write_batch(&self, batch: Batch) -> Result<(), ViewError> {
        self.context.write_batch(batch).await?;
        Ok(())
    }
}

#[async_trait]
impl<C> HashView<C> for KeyValueStoreView<C>
where
    C: HashingContext + Send + Sync,
    ViewError: From<C::Error>,
{
    async fn hash(&mut self) -> Result<<C::Hasher as Hasher>::Output, ViewError> {
        let mut hasher = C::Hasher::default();
        let indices = self.indices().await?;
        hasher.update_with_bcs_bytes(&indices.len())?;
        for index in indices {
            let value = self
                .get(&index)
                .await?
                .expect("The value for the returned index should be present");
            hasher.update_with_bcs_bytes(&index)?;
            hasher.update_with_bcs_bytes(&value)?;
        }
        Ok(hasher.finalize())
    }
}

/// A context that stores all values in memory.
#[cfg(any(test, feature = "test"))]
pub type KeyValueStoreMemoryContext<E> = ContextFromDb<E, KeyValueStoreView<MemoryContext<()>>>;

#[cfg(any(test, feature = "test"))]
impl<E> KeyValueStoreMemoryContext<E> {
    pub fn new(guard: OwnedMutexGuard<MemoryStoreMap>, base_key: Vec<u8>, extra: E) -> Self {
        let context = MemoryContext::new(guard, ());
        let key_value_store_view = KeyValueStoreView::new(context);
        Self {
            db: key_value_store_view,
            base_key,
            extra,
        }
    }
}