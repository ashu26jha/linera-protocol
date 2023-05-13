(function() {var implementors = {
"async_graphql_axum":[["impl&lt;S, B, R&gt; <a class=\"trait\" href=\"axum_core/extract/trait.FromRequest.html\" title=\"trait axum_core::extract::FromRequest\">FromRequest</a>&lt;S, B, ViaRequest&gt; for <a class=\"struct\" href=\"async_graphql_axum/struct.GraphQLBatchRequest.html\" title=\"struct async_graphql_axum::GraphQLBatchRequest\">GraphQLBatchRequest</a>&lt;R&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,\n    B::<a class=\"associatedtype\" href=\"http_body/trait.Body.html#associatedtype.Data\" title=\"type http_body::Body::Data\">Data</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"bytes/bytes/struct.Bytes.html\" title=\"struct bytes::bytes::Bytes\">Bytes</a>&gt;,\n    B::<a class=\"associatedtype\" href=\"http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"type\" href=\"axum_core/type.BoxError.html\" title=\"type axum_core::BoxError\">BoxError</a>&gt;,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    R: <a class=\"trait\" href=\"axum_core/response/into_response/trait.IntoResponse.html\" title=\"trait axum_core::response::into_response::IntoResponse\">IntoResponse</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"async_graphql/error/enum.ParseRequestError.html\" title=\"enum async_graphql::error::ParseRequestError\">ParseRequestError</a>&gt;,</span>"],["impl&lt;S, B, R&gt; <a class=\"trait\" href=\"axum_core/extract/trait.FromRequest.html\" title=\"trait axum_core::extract::FromRequest\">FromRequest</a>&lt;S, B, ViaRequest&gt; for <a class=\"struct\" href=\"async_graphql_axum/struct.GraphQLRequest.html\" title=\"struct async_graphql_axum::GraphQLRequest\">GraphQLRequest</a>&lt;R&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,\n    B::<a class=\"associatedtype\" href=\"http_body/trait.Body.html#associatedtype.Data\" title=\"type http_body::Body::Data\">Data</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"bytes/bytes/struct.Bytes.html\" title=\"struct bytes::bytes::Bytes\">Bytes</a>&gt;,\n    B::<a class=\"associatedtype\" href=\"http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"type\" href=\"axum_core/type.BoxError.html\" title=\"type axum_core::BoxError\">BoxError</a>&gt;,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    R: <a class=\"trait\" href=\"axum_core/response/into_response/trait.IntoResponse.html\" title=\"trait axum_core::response::into_response::IntoResponse\">IntoResponse</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"async_graphql/error/enum.ParseRequestError.html\" title=\"enum async_graphql::error::ParseRequestError\">ParseRequestError</a>&gt;,</span>"]],
"axum":[["impl&lt;S, B&gt; <a class=\"trait\" href=\"axum/extract/trait.FromRequest.html\" title=\"trait axum::extract::FromRequest\">FromRequest</a>&lt;S, B, ViaRequest&gt; for <a class=\"struct\" href=\"axum/extract/struct.RawForm.html\" title=\"struct axum::extract::RawForm\">RawForm</a><span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"http_body/trait.Body.html\" title=\"trait http_body::Body\">HttpBody</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,\n    B::<a class=\"associatedtype\" href=\"http_body/trait.Body.html#associatedtype.Data\" title=\"type http_body::Body::Data\">Data</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    B::<a class=\"associatedtype\" href=\"http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"type\" href=\"axum/type.BoxError.html\" title=\"type axum::BoxError\">BoxError</a>&gt;,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>"],["impl&lt;S, B&gt; <a class=\"trait\" href=\"axum/extract/trait.FromRequest.html\" title=\"trait axum::extract::FromRequest\">FromRequest</a>&lt;S, B, ViaRequest&gt; for <a class=\"struct\" href=\"axum/extract/struct.RawBody.html\" title=\"struct axum::extract::RawBody\">RawBody</a>&lt;B&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>"],["impl&lt;T, S, B&gt; <a class=\"trait\" href=\"axum/extract/trait.FromRequest.html\" title=\"trait axum::extract::FromRequest\">FromRequest</a>&lt;S, B, ViaRequest&gt; for <a class=\"struct\" href=\"axum/struct.Json.html\" title=\"struct axum::Json\">Json</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,\n    B: <a class=\"trait\" href=\"http_body/trait.Body.html\" title=\"trait http_body::Body\">HttpBody</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,\n    B::<a class=\"associatedtype\" href=\"http_body/trait.Body.html#associatedtype.Data\" title=\"type http_body::Body::Data\">Data</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    B::<a class=\"associatedtype\" href=\"http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"type\" href=\"axum/type.BoxError.html\" title=\"type axum::BoxError\">BoxError</a>&gt;,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>"],["impl&lt;S, B&gt; <a class=\"trait\" href=\"axum/extract/trait.FromRequest.html\" title=\"trait axum::extract::FromRequest\">FromRequest</a>&lt;S, B, ViaRequest&gt; for <a class=\"struct\" href=\"axum/extract/struct.BodyStream.html\" title=\"struct axum::extract::BodyStream\">BodyStream</a><span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"http_body/trait.Body.html\" title=\"trait http_body::Body\">HttpBody</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,\n    B::<a class=\"associatedtype\" href=\"http_body/trait.Body.html#associatedtype.Data\" title=\"type http_body::Body::Data\">Data</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"bytes/bytes/struct.Bytes.html\" title=\"struct bytes::bytes::Bytes\">Bytes</a>&gt;,\n    B::<a class=\"associatedtype\" href=\"http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"type\" href=\"axum/type.BoxError.html\" title=\"type axum::BoxError\">BoxError</a>&gt;,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>"],["impl&lt;T, S, B&gt; <a class=\"trait\" href=\"axum/extract/trait.FromRequest.html\" title=\"trait axum::extract::FromRequest\">FromRequest</a>&lt;S, B, ViaRequest&gt; for <a class=\"struct\" href=\"axum/struct.Form.html\" title=\"struct axum::Form\">Form</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,\n    B: <a class=\"trait\" href=\"http_body/trait.Body.html\" title=\"trait http_body::Body\">HttpBody</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,\n    B::<a class=\"associatedtype\" href=\"http_body/trait.Body.html#associatedtype.Data\" title=\"type http_body::Body::Data\">Data</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    B::<a class=\"associatedtype\" href=\"http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"type\" href=\"axum/type.BoxError.html\" title=\"type axum::BoxError\">BoxError</a>&gt;,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()