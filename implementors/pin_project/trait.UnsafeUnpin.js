(function() {var implementors = {};
implementors["netcore"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/pin-project/0.4.20/pin_project/trait.UnsafeUnpin.html\" title=\"trait pin_project::UnsafeUnpin\">UnsafeUnpin</a> for <a class=\"struct\" href=\"netcore/compat/struct.IoCompat.html\" title=\"struct netcore::compat::IoCompat\">IoCompat</a>&lt;T&gt;","synthetic":false,"types":["netcore::compat::IoCompat"]},{"text":"impl&lt;St, F&gt; <a class=\"trait\" href=\"https://docs.rs/pin-project/0.4.20/pin_project/trait.UnsafeUnpin.html\" title=\"trait pin_project::UnsafeUnpin\">UnsafeUnpin</a> for <a class=\"struct\" href=\"netcore/transport/and_then/struct.AndThenStream.html\" title=\"struct netcore::transport::and_then::AndThenStream\">AndThenStream</a>&lt;St, F&gt;","synthetic":false,"types":["netcore::transport::and_then::AndThenStream"]},{"text":"impl&lt;Fut1, Fut2, F&gt; <a class=\"trait\" href=\"https://docs.rs/pin-project/0.4.20/pin_project/trait.UnsafeUnpin.html\" title=\"trait pin_project::UnsafeUnpin\">UnsafeUnpin</a> for <a class=\"struct\" href=\"netcore/transport/and_then/struct.AndThenFuture.html\" title=\"struct netcore::transport::and_then::AndThenFuture\">AndThenFuture</a>&lt;Fut1, Fut2, F&gt;","synthetic":false,"types":["netcore::transport::and_then::AndThenFuture"]},{"text":"impl&lt;St&gt; <a class=\"trait\" href=\"https://docs.rs/pin-project/0.4.20/pin_project/trait.UnsafeUnpin.html\" title=\"trait pin_project::UnsafeUnpin\">UnsafeUnpin</a> for <a class=\"struct\" href=\"netcore/transport/timeout/struct.TimeoutStream.html\" title=\"struct netcore::transport::timeout::TimeoutStream\">TimeoutStream</a>&lt;St&gt;","synthetic":false,"types":["netcore::transport::timeout::TimeoutStream"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://docs.rs/pin-project/0.4.20/pin_project/trait.UnsafeUnpin.html\" title=\"trait pin_project::UnsafeUnpin\">UnsafeUnpin</a> for <a class=\"struct\" href=\"netcore/transport/timeout/struct.TimeoutFuture.html\" title=\"struct netcore::transport::timeout::TimeoutFuture\">TimeoutFuture</a>&lt;F&gt;","synthetic":false,"types":["netcore::transport::timeout::TimeoutFuture"]}];
implementors["network"] = [{"text":"impl&lt;TMessage&gt; <a class=\"trait\" href=\"https://docs.rs/pin-project/0.4.20/pin_project/trait.UnsafeUnpin.html\" title=\"trait pin_project::UnsafeUnpin\">UnsafeUnpin</a> for <a class=\"struct\" href=\"network/protocols/network/struct.NetworkEvents.html\" title=\"struct network::protocols::network::NetworkEvents\">NetworkEvents</a>&lt;TMessage&gt;","synthetic":false,"types":["network::protocols::network::NetworkEvents"]}];
implementors["stream_ratelimiter"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://docs.rs/futures-core/0.3.5/futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&gt; <a class=\"trait\" href=\"https://docs.rs/pin-project/0.4.20/pin_project/trait.UnsafeUnpin.html\" title=\"trait pin_project::UnsafeUnpin\">UnsafeUnpin</a> for <a class=\"struct\" href=\"stream_ratelimiter/struct.RateLimiter.html\" title=\"struct stream_ratelimiter::RateLimiter\">RateLimiter</a>&lt;T&gt;","synthetic":false,"types":["stream_ratelimiter::RateLimiter"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()