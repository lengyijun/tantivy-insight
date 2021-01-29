|                |       |            |                                    |
| -------------- | ----- | ---------- | ---------------------------------- |
| POSTING        | 8.5M  | .idx       | 倒排索引                           |
| POSTIONS       | 1.6G  | .pos       | 每个Term在document中的position     |
| TERMS          | 60M   | .term      | Term->TermInfo dictionary. 使用FST |
| STORE          | 4.5G  | .store     | 原document.如果Scheme中加了STORE   |
| POSTITIONSSKIP | 9.4M  | .posidx    | todo                               |
| FIELDNORMS     | 8.5M  | .fieldnorm | todo                               |
| FASTFIELDS     | 5byte | .fast      | 空文件                             |



## Tantivy中,有时会产生很大的索引文件,比如表格中的.pos文件.那么他是怎么读到内存中的?

首先文件用mmap读到内存中,然后转到某个数据结构.

但是转成某个数据结构之后,原始文件还会在缓存中存在.用的是一个HashMap.虽然我不确定HashMap的意义,毕竟把内存搞的很大


## POSTIONS的作用
.pos是最大的一个文件，但是他其实没有什么用。
只有在词组查询的时候才会用到。

position与positionreader联系紧密。
SegmentPosting里有一个positionreader
但是SegmentPosting中的positionreader只在positions_with_offset里用到过
继续追查position_with_offset 发现用处很少。

