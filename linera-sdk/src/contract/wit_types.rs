// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

//! Internal module with code generated by [`wit-bindgen`](https://github.com/jvff/wit-bindgen).

#![allow(missing_docs)]

// Export the contract interface.
wit_bindgen_guest_rust::export!("contract.wit");

pub use self::contract::{
    ApplicationCallOutcome, ApplicationId, BlockHeight, BytecodeId, ChainId, ChannelName,
    CryptoHash, Destination, ExecutionOutcome, MessageId, OutgoingMessage, Resources,
    SessionCallOutcome, SessionId, SessionState,
};
use super::{
    __contract_execute_message, __contract_execute_operation, __contract_handle_application_call,
    __contract_handle_session_call, __contract_initialize,
};

/// Implementation of the contract WIT entrypoints.
pub struct Contract;

impl contract::Contract for Contract {
    fn initialize(argument: Vec<u8>) -> Result<ExecutionOutcome, String> {
        unsafe { __contract_initialize(argument) }.map(|outcome| outcome.into())
    }

    fn execute_operation(operation: Vec<u8>) -> Result<ExecutionOutcome, String> {
        unsafe { __contract_execute_operation(operation) }.map(|outcome| outcome.into())
    }

    fn execute_message(message: Vec<u8>) -> Result<ExecutionOutcome, String> {
        unsafe { __contract_execute_message(message) }.map(|outcome| outcome.into())
    }

    fn handle_application_call(
        argument: Vec<u8>,
        forwarded_sessions: Vec<SessionId>,
    ) -> Result<ApplicationCallOutcome, String> {
        let forwarded_sessions = forwarded_sessions
            .into_iter()
            .map(|session_id| session_id.into())
            .collect();
        unsafe { __contract_handle_application_call(argument, forwarded_sessions) }
            .map(|outcome| outcome.into())
    }

    fn handle_session_call(
        argument: Vec<u8>,
        session_state: Vec<u8>,
        forwarded_sessions: Vec<SessionId>,
    ) -> Result<SessionCallOutcome, String> {
        let forwarded_sessions = forwarded_sessions
            .into_iter()
            .map(|session_id| session_id.into())
            .collect();
        unsafe { __contract_handle_session_call(argument, session_state, forwarded_sessions) }
            .map(|outcome| outcome.into())
    }
}
