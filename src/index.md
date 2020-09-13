# 建立索引

首先放在内存中.当体积达到一定大的时候,就flush到磁盘.还在内存没有flush的时候是不能搜索的,所以tantivy,lucene叫做接近实时,而非绝对实时

在tantivy中需要手工调用commit来刷新索引