有3个Trait: Query, Weight, Score

Query是对 搜索pattern解析后返回的抽象. 搜索pattern解析后返回值是 Box<dyn Query>

Query负责管理Weight. 

Weight负责每一个Segment.查到的数据返回给Query.


# 每个Segment的处理
首先每个Segment是由7个文件组成的。

以 title:obama 为例

首先对title处理。title成为Field,在Schema中有一个map,会把Field转成u32.这是因为保存在文件的时候，存字符串不太容易，所以都是转成u32的

然后我们要插倒排索引。倒排索引在pos文件里面。在一个大的pos文件里面，根据Field被分割成几部分。
首先找到title的部分。

然后我们要找obama的部分。obama是一个Term，有一个TermInfo描述了Term在Field里的偏移量。这样就能找到obama的倒排索引的内容了
