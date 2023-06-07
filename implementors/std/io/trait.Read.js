(function() {var implementors = {
"base64":[["impl&lt;'e, E: <a class=\"trait\" href=\"base64/engine/trait.Engine.html\" title=\"trait base64::engine::Engine\">Engine</a>, R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"base64/read/struct.DecoderReader.html\" title=\"struct base64::read::DecoderReader\">DecoderReader</a>&lt;'e, E, R&gt;"]],
"bincode":[["impl&lt;'storage&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"bincode/de/read/struct.SliceReader.html\" title=\"struct bincode::de::read::SliceReader\">SliceReader</a>&lt;'storage&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"bincode/de/read/struct.IoReader.html\" title=\"struct bincode::de::read::IoReader\">IoReader</a>&lt;R&gt;"]],
"bytes":[["impl&lt;B: <a class=\"trait\" href=\"bytes/buf/trait.Buf.html\" title=\"trait bytes::buf::Buf\">Buf</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"bytes/buf/struct.Reader.html\" title=\"struct bytes::buf::Reader\">Reader</a>&lt;B&gt;"]],
"digest":[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"digest/core_api/struct.XofReaderCoreWrapper.html\" title=\"struct digest::core_api::XofReaderCoreWrapper\">XofReaderCoreWrapper</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"digest/core_api/trait.XofReaderCore.html\" title=\"trait digest::core_api::XofReaderCore\">XofReaderCore</a>,\n    T::<a class=\"associatedtype\" href=\"digest/core_api/trait.BlockSizeUser.html#associatedtype.BlockSize\" title=\"type digest::core_api::BlockSizeUser::BlockSize\">BlockSize</a>: <a class=\"trait\" href=\"typenum/type_operators/trait.IsLess.html\" title=\"trait typenum::type_operators::IsLess\">IsLess</a>&lt;<a class=\"type\" href=\"digest/consts/type.U256.html\" title=\"type digest::consts::U256\">U256</a>&gt;,\n    <a class=\"type\" href=\"typenum/operator_aliases/type.Le.html\" title=\"type typenum::operator_aliases::Le\">Le</a>&lt;T::<a class=\"associatedtype\" href=\"digest/core_api/trait.BlockSizeUser.html#associatedtype.BlockSize\" title=\"type digest::core_api::BlockSizeUser::BlockSize\">BlockSize</a>, <a class=\"type\" href=\"digest/consts/type.U256.html\" title=\"type digest::consts::U256\">U256</a>&gt;: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,</span>"]],
"either":[["impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,</span>"]],
"futures_util":[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"futures_util/io/struct.AllowStdIo.html\" title=\"struct futures_util::io::AllowStdIo\">AllowStdIo</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,</span>"]],
"mio":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"mio/net/struct.TcpStream.html\" title=\"struct mio::net::TcpStream\">TcpStream</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"mio/net/struct.UnixStream.html\" title=\"struct mio::net::UnixStream\">UnixStream</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"mio/unix/pipe/struct.Receiver.html\" title=\"struct mio::unix::pipe::Receiver\">Receiver</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;<a class=\"struct\" href=\"mio/unix/pipe/struct.Receiver.html\" title=\"struct mio::unix::pipe::Receiver\">Receiver</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"mio/net/struct.TcpStream.html\" title=\"struct mio::net::TcpStream\">TcpStream</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"mio/net/struct.UnixStream.html\" title=\"struct mio::net::UnixStream\">UnixStream</a>"]],
"rand_core":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for dyn <a class=\"trait\" href=\"rand_core/trait.RngCore.html\" title=\"trait rand_core::RngCore\">RngCore</a>"]],
"rustls":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"rustls/struct.ServerSession.html\" title=\"struct rustls::ServerSession\">ServerSession</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"rustls/struct.ClientSession.html\" title=\"struct rustls::ClientSession\">ClientSession</a>"],["impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"rustls/struct.StreamOwned.html\" title=\"struct rustls::StreamOwned\">StreamOwned</a>&lt;S, T&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"rustls/trait.Session.html\" title=\"trait rustls::Session\">Session</a>,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,</span>"],["impl&lt;'a, S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"rustls/struct.Stream.html\" title=\"struct rustls::Stream\">Stream</a>&lt;'a, S, T&gt;<span class=\"where fmt-newline\">where\n    S: 'a + <a class=\"trait\" href=\"rustls/trait.Session.html\" title=\"trait rustls::Session\">Session</a>,\n    T: 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,</span>"]],
"socket2":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>"]],
"tempfile":[["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"tempfile/struct.NamedTempFile.html\" title=\"struct tempfile::NamedTempFile\">NamedTempFile</a>&lt;F&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"tempfile/struct.SpooledTempFile.html\" title=\"struct tempfile::SpooledTempFile\">SpooledTempFile</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;<a class=\"struct\" href=\"tempfile/struct.NamedTempFile.html\" title=\"struct tempfile::NamedTempFile\">NamedTempFile</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.69.0/std/fs/struct.File.html\" title=\"struct std::fs::File\">File</a>&gt;"]],
"tungstenite":[["impl&lt;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"enum\" href=\"tungstenite/stream/enum.MaybeTlsStream.html\" title=\"enum tungstenite::stream::MaybeTlsStream\">MaybeTlsStream</a>&lt;S&gt;"]],
"zstd":[["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"zstd/stream/read/struct.Decoder.html\" title=\"struct zstd::stream::read::Decoder\">Decoder</a>&lt;'_, R&gt;"],["impl&lt;R, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"zstd/stream/zio/struct.Reader.html\" title=\"struct zstd::stream::zio::Reader\">Reader</a>&lt;R, D&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>,\n    D: <a class=\"trait\" href=\"zstd/stream/raw/trait.Operation.html\" title=\"trait zstd::stream::raw::Operation\">Operation</a>,</span>"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"zstd/stream/read/struct.Encoder.html\" title=\"struct zstd::stream::read::Encoder\">Encoder</a>&lt;'_, R&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()