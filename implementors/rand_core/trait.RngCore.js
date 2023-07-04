(function() {var implementors = {
"merlin":[["impl <a class=\"trait\" href=\"rand_core/trait.RngCore.html\" title=\"trait rand_core::RngCore\">RngCore</a> for <a class=\"struct\" href=\"merlin/struct.TranscriptRng.html\" title=\"struct merlin::TranscriptRng\">TranscriptRng</a>"]],
"proptest":[["impl <a class=\"trait\" href=\"proptest/prelude/trait.RngCore.html\" title=\"trait proptest::prelude::RngCore\">RngCore</a> for <a class=\"struct\" href=\"proptest/test_runner/struct.TestRng.html\" title=\"struct proptest::test_runner::TestRng\">TestRng</a>"]],
"rand":[["impl&lt;R, Rsdr: <a class=\"trait\" href=\"rand/trait.RngCore.html\" title=\"trait rand::RngCore\">RngCore</a>&gt; <a class=\"trait\" href=\"rand/trait.RngCore.html\" title=\"trait rand::RngCore\">RngCore</a> for <a class=\"struct\" href=\"rand/rngs/adapter/struct.ReseedingRng.html\" title=\"struct rand::rngs::adapter::ReseedingRng\">ReseedingRng</a>&lt;R, Rsdr&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"rand_core/block/trait.BlockRngCore.html\" title=\"trait rand_core::block::BlockRngCore\">BlockRngCore</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"rand/trait.SeedableRng.html\" title=\"trait rand::SeedableRng\">SeedableRng</a>,\n    &lt;R as <a class=\"trait\" href=\"rand_core/block/trait.BlockRngCore.html\" title=\"trait rand_core::block::BlockRngCore\">BlockRngCore</a>&gt;::<a class=\"associatedtype\" href=\"rand_core/block/trait.BlockRngCore.html#associatedtype.Results\" title=\"type rand_core::block::BlockRngCore::Results\">Results</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.u32.html\">u32</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.AsMut.html\" title=\"trait core::convert::AsMut\">AsMut</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.u32.html\">u32</a>]&gt;,</span>"],["impl <a class=\"trait\" href=\"rand/trait.RngCore.html\" title=\"trait rand::RngCore\">RngCore</a> for <a class=\"struct\" href=\"rand/rngs/struct.ThreadRng.html\" title=\"struct rand::rngs::ThreadRng\">ThreadRng</a>"],["impl <a class=\"trait\" href=\"rand/trait.RngCore.html\" title=\"trait rand::RngCore\">RngCore</a> for <a class=\"struct\" href=\"rand/rngs/struct.SmallRng.html\" title=\"struct rand::rngs::SmallRng\">SmallRng</a>"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"rand/trait.RngCore.html\" title=\"trait rand::RngCore\">RngCore</a> for <a class=\"struct\" href=\"rand/rngs/adapter/struct.ReadRng.html\" title=\"struct rand::rngs::adapter::ReadRng\">ReadRng</a>&lt;R&gt;"],["impl <a class=\"trait\" href=\"rand/trait.RngCore.html\" title=\"trait rand::RngCore\">RngCore</a> for <a class=\"struct\" href=\"rand/rngs/struct.StdRng.html\" title=\"struct rand::rngs::StdRng\">StdRng</a>"],["impl <a class=\"trait\" href=\"rand/trait.RngCore.html\" title=\"trait rand::RngCore\">RngCore</a> for <a class=\"struct\" href=\"rand/rngs/mock/struct.StepRng.html\" title=\"struct rand::rngs::mock::StepRng\">StepRng</a>"]],
"rand_chacha":[["impl <a class=\"trait\" href=\"rand_core/trait.RngCore.html\" title=\"trait rand_core::RngCore\">RngCore</a> for <a class=\"struct\" href=\"rand_chacha/struct.ChaCha8Rng.html\" title=\"struct rand_chacha::ChaCha8Rng\">ChaCha8Rng</a>"],["impl <a class=\"trait\" href=\"rand_core/trait.RngCore.html\" title=\"trait rand_core::RngCore\">RngCore</a> for <a class=\"struct\" href=\"rand_chacha/struct.ChaCha20Rng.html\" title=\"struct rand_chacha::ChaCha20Rng\">ChaCha20Rng</a>"],["impl <a class=\"trait\" href=\"rand_core/trait.RngCore.html\" title=\"trait rand_core::RngCore\">RngCore</a> for <a class=\"struct\" href=\"rand_chacha/struct.ChaCha12Rng.html\" title=\"struct rand_chacha::ChaCha12Rng\">ChaCha12Rng</a>"]],
"rand_core":[],
"rand_xorshift":[["impl <a class=\"trait\" href=\"rand_core/trait.RngCore.html\" title=\"trait rand_core::RngCore\">RngCore</a> for <a class=\"struct\" href=\"rand_xorshift/struct.XorShiftRng.html\" title=\"struct rand_xorshift::XorShiftRng\">XorShiftRng</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()