window.SIDEBAR_ITEMS = {"enum":[["ApplicationId","A unique identifier for an application."],["ChainOwnership","Represents the owner(s) of a chain."],["Effect","An effect to be sent and possibly executed in the receiver’s block."],["ExecutionError",""],["ExecutionResult","Externally visible results of an execution, tagged by their application."],["Operation","An operation to be executed in a block."],["Query","An query to be sent and possibly executed in the receiver’s block."],["Response","The response to a query."],["WasmExecutionError","Errors that can occur when executing a user application in a WebAssembly module."],["WasmRuntime","The runtime to use for running the application."]],"mod":[["committee",""],["system",""],["wasm_test","This assumes that the current directory is one of the crates."]],"struct":[["ApplicationCallResult","The result of calling into a user application."],["ApplicationRegistry",""],["ApplicationRegistryView",""],["Bytecode","A WebAssembly module’s bytecode."],["BytecodeLocation","A reference to where the application bytecode is stored."],["CallResult","The result of calling into an application or a session."],["CalleeContext",""],["ChannelSubscription","The identifier of a channel, relative to a particular application."],["EffectContext",""],["ExecutionStateView","A view accessing the execution state of a chain."],["InvalidWasmRuntime","Attempts to create an invalid [`WasmRuntime`] instance from a string."],["NewSession","Syscall to request creating a new session."],["OperationContext",""],["QueryContext",""],["RawExecutionResult","Externally visible results of an execution. These results are meant in the context of the application that created them."],["SessionCallResult","The result of calling into a session."],["TestExecutionRuntimeContext",""],["UserApplicationDescription","Description of the necessary information to run a user application."],["WasmApplication","A user application in a compiled WebAssembly module."]],"trait":[["BaseRuntime",""],["ContractRuntime",""],["ExecutionRuntimeContext","Requirements for the `extra` field in our state views (and notably the [`ExecutionStateView`])."],["ServiceRuntime",""],["UserApplication","The public entry points provided by an application."],["WithWasmDefault","Trait used to select a default WasmRuntime, if one is available."]],"type":[["UserApplicationCode","An implementation of [`UserApplication`]"],["UserApplicationId","Alias for `linera_base::identifiers::ApplicationId`. Use this alias in the core protocol where the distinction with the more general enum [`ApplicationId`] matters."]]};