有3个Trait: Query, Weight, Score

Query是对 搜索pattern解析后返回的抽象. 搜索pattern解析后返回值是 Box<dyn Query>

Query负责管理Weight. 

Weight负责每一个Segment.查到的数据返回给Query.

