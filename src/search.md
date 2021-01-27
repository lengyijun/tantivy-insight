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

倒排索引是以Block为单位的，每个block里有128个文章和对应的出现频率。 用128是SIMD的要求。

但并不是一个segment只能有128个文章。事实上10000个文章是没有问题的。128篇文章只是一个处理单元。每收集了128篇文章，就保存一次磁盘。
最后尾巴上不够128篇文章也没关系.用0填充就可以了

在实现上，是复用一个Block.这个block有一个is_full方法。 一旦full了，就write to disk,然后clean这个struct,重复使用这一块内存。

