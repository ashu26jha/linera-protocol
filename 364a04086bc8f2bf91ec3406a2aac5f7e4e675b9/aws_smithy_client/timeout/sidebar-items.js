window.SIDEBAR_ITEMS = {"enum":[["TimeoutServiceFuture","A future generated by a [`TimeoutService`] that may or may not have a timeout depending on whether or not one was set. Because `TimeoutService` can be used at multiple levels of the service stack, a `kind` can be set so that when a timeout occurs, you can know which kind of timeout it was."]],"fn":[["generate_timeout_service_params_from_timeout_config","Convert a `timeout::Api` into an [`ClientTimeoutParams`] in order to create the set of [`TimeoutService`]s needed by a [`crate::Client`]"]],"struct":[["ClientTimeoutParams","A struct of structs containing everything needed to create new [`TimeoutService`]s"],["TimeoutLayer","A layer that wraps services in a timeout service"],["TimeoutService","A service that wraps another service, adding the ability to set a timeout for requests handled by the inner service."],["TimeoutServiceParams","A struct containing everything needed to create a new [`TimeoutService`]"]]};