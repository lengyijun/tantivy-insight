

# Merging Policy

一个document一开始是一个segment.成百上千的segment总是需要合并的.大多数时候可以合到只有一个Segment

Merge的时候会使用Merging Policy. Tantivy中只有一个Merging Policy. 他的工作流程如下:

1. 首先如果一个Segment太大,就不管了
2. 找到和Segment差不多大的一些Segment,比如 8 9 10可以考虑合在一起. 100的就不聚在一起了
3. 如果这一组的Segment有8个,那就合并.比如8个8,就能合并.7个8就不能

------

对索引优化并不会提高索引速度.只是能减少打开的文件数量.

优化索引的时机并不是在构建索引时.在构建完索引,并且在将来一段时间内不需要被更改时进行优化最好