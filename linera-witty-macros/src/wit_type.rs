// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

//! Derivation of the `WitType` trait.

use crate::util::FieldsInformation;
use heck::ToKebabCase;
use proc_macro2::TokenStream;
use proc_macro_error::abort;
use quote::quote;
use syn::{Ident, LitStr, Variant};

#[path = "unit_tests/wit_type.rs"]
mod tests;

/// Returns the body of the `WitType` implementation for the Rust `struct` with the specified
/// `fields`.
pub fn derive_for_struct<'input>(
    name: &Ident,
    fields: impl Into<FieldsInformation<'input>>,
) -> TokenStream {
    let wit_name = LitStr::new(&name.to_string().to_kebab_case(), name.span());
    let fields = fields.into();
    let fields_hlist = fields.hlist_type();
    let field_wit_names = fields.wit_names();
    let field_wit_type_names = fields.wit_type_names();

    quote! {
        const SIZE: u32 = <#fields_hlist as linera_witty::WitType>::SIZE;

        type Layout = <#fields_hlist as linera_witty::WitType>::Layout;
        type Dependencies = #fields_hlist;

        fn wit_type_name() -> std::borrow::Cow<'static, str> {
            #wit_name.into()
        }

        fn wit_type_declaration() -> std::borrow::Cow<'static, str> {
            let mut wit_declaration = String::from(concat!("    record ", #wit_name, " {\n"));

            #(
                wit_declaration.push_str("        ");
                wit_declaration.push_str(#field_wit_names);
                wit_declaration.push_str(": ");
                wit_declaration.push_str(&*#field_wit_type_names);
                wit_declaration.push_str(",\n");
            )*

            wit_declaration.push_str("    }\n");
            wit_declaration.into()
        }
    }
}

/// Returns the body of the `WitType` implementation for the Rust `enum` with the specified
/// `variants`.
pub fn derive_for_enum<'variants>(
    name: &Ident,
    variants: impl DoubleEndedIterator<Item = &'variants Variant> + Clone,
) -> TokenStream {
    let wit_name = LitStr::new(&name.to_string().to_kebab_case(), name.span());

    let variant_count = variants.clone().count();
    let variant_fields: Vec<_> = variants
        .clone()
        .map(|variant| FieldsInformation::from(&variant.fields))
        .collect();
    let variant_hlists: Vec<_> = variant_fields
        .iter()
        .map(FieldsInformation::hlist_type)
        .collect();

    let discriminant_type = if variant_count <= u8::MAX.into() {
        quote! { u8 }
    } else if variant_count <= u16::MAX.into() {
        quote! { u16 }
    } else if variant_count <= u32::MAX as usize {
        quote! { u32 }
    } else {
        abort!(name, "Too many variants in `enum`");
    };

    let discriminant_size = quote! { std::mem::size_of::<#discriminant_type>() as u32 };

    let variant_sizes = variant_hlists.iter().map(|variant_hlist| {
        quote! {
            let variant_size =
                discriminant_size + padding + <#variant_hlist as linera_witty::WitType>::SIZE;

            if variant_size > size {
                size = variant_size;
            }
        }
    });

    let variant_layouts = variant_hlists
        .iter()
        .map(|variant_hlist| quote! { <#variant_hlist as linera_witty::WitType>::Layout })
        .rev()
        .reduce(|current, variant_layout| {
            quote! {
                <#variant_layout as linera_witty::Merge<#current>>::Output
            }
        });

    let variant_field_types = variant_fields.iter().map(FieldsInformation::types);
    let dependencies = variant_field_types.clone().flatten();

    let enum_or_variant = if dependencies.clone().count() == 0 {
        LitStr::new("enum", name.span())
    } else {
        LitStr::new("variant", name.span())
    };

    let variant_wit_names = variants.map(|variant| {
        LitStr::new(
            &variant.ident.to_string().to_kebab_case(),
            variant.ident.span(),
        )
    });

    let variant_wit_payloads = variant_field_types.map(|field_types| {
        let mut field_types = field_types.peekable();
        let first_field_type = field_types.next();
        let has_second_field_type = field_types.peek().is_some();

        match (first_field_type, has_second_field_type) {
            (None, _) => quote! {},
            (Some(only_field_type), false) => quote! {
                wit_declaration.push('(');
                wit_declaration.push_str(
                    &<#only_field_type as linera_witty::WitType>::wit_type_name(),
                );
                wit_declaration.push(')');
            },
            (Some(first_field_type), true) => quote! {
                wit_declaration.push_str("(tuple<");
                wit_declaration.push_str(
                    &<#first_field_type as linera_witty::WitType>::wit_type_name(),
                );

                #(
                    wit_declaration.push_str(", ");
                    wit_declaration.push_str(
                        &<#field_types as linera_witty::WitType>::wit_type_name(),
                    );
                )*

                wit_declaration.push_str(">)");
            },
        }
    });

    quote! {
        const SIZE: u32 = {
            let discriminant_size = #discriminant_size;
            let mut size = discriminant_size;
            let mut variants_alignment = <#variant_layouts as linera_witty::Layout>::ALIGNMENT;
            let padding = (-(size as i32) & (variants_alignment as i32 - 1)) as u32;

            #(#variant_sizes)*

            let end_padding = (-(size as i32) & (variants_alignment as i32 - 1)) as u32;
            size + end_padding
        };

        type Layout = linera_witty::HCons<#discriminant_type, #variant_layouts>;
        type Dependencies = linera_witty::HList![#( #dependencies ),*];

        fn wit_type_name() -> std::borrow::Cow<'static, str> {
            #wit_name.into()
        }

        fn wit_type_declaration() -> std::borrow::Cow<'static, str> {
            let mut wit_declaration = String::from(
                concat!("    ", #enum_or_variant, " ", #wit_name, " {\n"),
            );

            #(
                wit_declaration.push_str("        ");
                wit_declaration.push_str(#variant_wit_names);
                #variant_wit_payloads
                wit_declaration.push_str(",\n");
            )*

            wit_declaration.push_str("    }\n");
            wit_declaration.into()
        }
    }
}
