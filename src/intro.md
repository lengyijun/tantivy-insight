# 为什么在有Elastic Search的情况下,还要Tantivy?

1. Tantivy比Lucene快


2. Rust写的有更多的可能性

Rust 写的可以移植到intel SGX中,也可能放到WASM中(写Rust附送WASM)

# 为什么tantivy比lucene快?

如果只说tantivy是Rust写的,所以比java快,是不准确的. lucene的移植,比如Rucene,clucene都比lucene慢

真正的原因是:

SIMD

the care given to what should be a static dispatch and what can be a dynamic dispatch

on the indexer side,the data structure is sensibly different

For count on unions, the algorithm is better on tantivy's side

Finally there is a couple of difference in phase queries handling, I don't know if that make s difference to be honest
