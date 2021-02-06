# Postings

也称为Inverted list, posting list

是Term -> [DocId] 的映射

在tantivy中,是 Term -> [(DocId,frequencies)]

The term frequency is the number of occurrences of the term within the document.

In source code, Term->[(DocId,frequencies);128], which is in postings/serilizer.rs:265 Block struct

Block is used in PostingsSerializer

解码以Block为单位。每次解码后的数据不会保存，而是下一次要用到的时候再次解码。

