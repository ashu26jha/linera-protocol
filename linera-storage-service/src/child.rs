// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

use crate::client::{storage_service_check_absence, storage_service_check_validity};
use anyhow::{bail, Result};
use linera_base::command::CommandExt;
use port_selector::random_free_tcp_port;
use std::time::Duration;
use tokio::process::{Child, Command};

pub async fn get_free_port() -> Result<String> {
    for i in 1..10 {
        let port = random_free_tcp_port();
        if let Some(port) = port {
            return Ok(format!("127.0.0.1:{}", port));
        }
        tokio::time::sleep(Duration::from_secs(i)).await;
    }
    bail!("Failed to obtain a port");
}

/// Configuration for a storage service running as a child process
pub struct StorageServiceBuilder {
    endpoint: String,
    binary: String,
}

/// A storage service running as a child process.
///
/// The guard preserves the child from destruction and destroys it when
/// it drops out of scope.
pub struct StorageServiceGuard {
    _child: Child,
}

impl StorageServiceBuilder {
    /// Creates a new `StorageServiceChild`
    pub fn new(endpoint: &str, binary: String) -> Self {
        Self {
            endpoint: endpoint.to_string(),
            binary,
        }
    }

    async fn command(&self) -> Command {
        let mut command = Command::new(&self.binary);
        command.args(["memory", "--endpoint", &self.endpoint]);
        command.kill_on_drop(true);
        command
    }

    /// Waits for the absence of the endpoint. If a child is terminated
    /// then it might take time to wait for its absence.
    async fn wait_for_absence(&self) -> Result<()> {
        for i in 1..10 {
            if storage_service_check_absence(&self.endpoint).await? {
                return Ok(());
            }
            tokio::time::sleep(Duration::from_secs(i)).await;
        }
        bail!("Failed to start child server");
    }

    pub async fn run_service(&self) -> Result<StorageServiceGuard> {
        self.wait_for_absence().await?;
        let mut command = self.command().await;
        let _child = command.spawn_into()?;
        let guard = StorageServiceGuard { _child };
        // We iterate until the child is spanned and can be accessed.
        // We add an additional waiting period to avoid problems.
        for i in 1..10 {
            let result = storage_service_check_validity(&self.endpoint).await;
            if result.is_ok() {
                return Ok(guard);
            }
            tokio::time::sleep(Duration::from_secs(i)).await;
        }
        bail!("Failed to start child server");
    }
}
