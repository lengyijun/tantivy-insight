Object.assign(window.search, {"doc_urls":["intro.html#为什么在有elastic-search的情况下还要tantivy","merging.html#merging-policy","term.html#term","postings.html#postings","skiplist.html#skiplist"],"index":{"documentStore":{"docInfo":{"0":{"body":2,"breadcrumbs":2,"title":2},"1":{"body":12,"breadcrumbs":2,"title":2},"2":{"body":13,"breadcrumbs":1,"title":1},"3":{"body":16,"breadcrumbs":1,"title":1},"4":{"body":3,"breadcrumbs":1,"title":1}},"docs":{"0":{"body":"因为Tantivy比Lucene快 而且Rust写的有更多的可能性.可以移植到SGX中,也可能放到WASM中.(写Rust附送WASM)","breadcrumbs":"为什么在有Elastic Search的情况下,还要Tantivy?","id":"0","title":"为什么在有Elastic Search的情况下,还要Tantivy?"},"1":{"body":"一个document一开始是一个segment.成百上千的segment总是需要合并的.大多数时候可以合到只有一个Segment Merge的时候会使用Merging Policy. Tantivy中只有一个Merging Policy. 他的工作流程如下: 首先如果一个Segment太大,就不管了 找到和Segment差不多大的一些Segment,比如 8 9 10可以考虑合在一起. 100的就不聚在一起了 如果这一组的Segment有8个,那就合并.比如8个8,就能合并.7个8就不能 对索引优化并不会提高索引速度.只是能减少打开的文件数量. 优化索引的时机并不是在构建索引时.在构建完索引,并且在将来一段时间内不需要被更改时进行优化最好","breadcrumbs":"Merging Policy","id":"1","title":"Merging Policy"},"2":{"body":"title:obama 是一个Term. 表示在title中包含obama 多个Term的组合是查询条件, 比如 title:obama OR title:president OR body:obama OR body:president 一个Term是个[u8]. 前4个u8(u32),表示title/body. u32<->title/body在Schema中. Term[5:]表示obama","breadcrumbs":"Term","id":"2","title":"Term"},"3":{"body":"也称为Inverted list, posting list 是Term -> [DocId] 的映射 在tantivy中,是 Term -> [(DocId,frequencies)] The term frequency is the number of occurrences of the term within the document.","breadcrumbs":"Postings","id":"3","title":"Postings"},"4":{"body":"在倒排索引中使用了跳表.来加速查询. 每个Term建立一个跳表.跳表里存DocId. 可以快速查询一篇文档里面有没有这个Term 跳表只在内存中,不存磁盘.因为没有序列化方法(serde)","breadcrumbs":"SkipList","id":"4","title":"SkipList"}},"length":5,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"1":{"0":{"0":{"df":1,"docs":{"1":{"tf":1.0}}},"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"4":{"df":0,"docs":{},"个":{"df":0,"docs":{},"u":{"8":{"(":{"df":0,"docs":{},"u":{"3":{"2":{")":{",":{"df":0,"docs":{},"表":{"df":0,"docs":{},"示":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"/":{"b":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"8":{"df":1,"docs":{"1":{"tf":1.0}}},"9":{"df":1,"docs":{"1":{"tf":1.0}}},"b":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"y":{":":{"df":0,"docs":{},"o":{"b":{"a":{"df":0,"docs":{},"m":{"a":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"d":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"i":{"d":{",":{"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}},"一":{"df":0,"docs":{},"开":{"df":0,"docs":{},"始":{"df":0,"docs":{},"是":{"df":0,"docs":{},"一":{"df":0,"docs":{},"个":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"成":{"df":0,"docs":{},"百":{"df":0,"docs":{},"上":{"df":0,"docs":{},"千":{"df":0,"docs":{},"的":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"总":{"df":0,"docs":{},"是":{"df":0,"docs":{},"需":{"df":0,"docs":{},"要":{"df":0,"docs":{},"合":{"df":0,"docs":{},"并":{"df":0,"docs":{},"的":{".":{"df":0,"docs":{},"大":{"df":0,"docs":{},"多":{"df":0,"docs":{},"数":{"df":0,"docs":{},"时":{"df":0,"docs":{},"候":{"df":0,"docs":{},"可":{"df":0,"docs":{},"以":{"df":0,"docs":{},"合":{"df":0,"docs":{},"到":{"df":0,"docs":{},"只":{"df":0,"docs":{},"有":{"df":0,"docs":{},"一":{"df":0,"docs":{},"个":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}},"e":{"df":0,"docs":{},"的":{"df":0,"docs":{},"时":{"df":0,"docs":{},"候":{"df":0,"docs":{},"会":{"df":0,"docs":{},"使":{"df":0,"docs":{},"用":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}}}}}}}}},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}}},"o":{"c":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"写":{"df":0,"docs":{},"的":{"df":0,"docs":{},"有":{"df":0,"docs":{},"更":{"df":0,"docs":{},"多":{"df":0,"docs":{},"的":{"df":0,"docs":{},"可":{"df":0,"docs":{},"能":{"df":0,"docs":{},"性":{".":{"df":0,"docs":{},"可":{"df":0,"docs":{},"以":{"df":0,"docs":{},"移":{"df":0,"docs":{},"植":{"df":0,"docs":{},"到":{"df":0,"docs":{},"s":{"df":0,"docs":{},"g":{"df":0,"docs":{},"x":{"df":0,"docs":{},"中":{",":{"df":0,"docs":{},"也":{"df":0,"docs":{},"可":{"df":0,"docs":{},"能":{"df":0,"docs":{},"放":{"df":0,"docs":{},"到":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"m":{"df":0,"docs":{},"中":{".":{"(":{"df":0,"docs":{},"写":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"附":{"df":0,"docs":{},"送":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}}}}}}}}},"df":0,"docs":{}}}}}}}}}}}}}},"s":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"的":{"df":0,"docs":{},"情":{"df":0,"docs":{},"况":{"df":0,"docs":{},"下":{",":{"df":0,"docs":{},"还":{"df":0,"docs":{},"要":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}},"差":{"df":0,"docs":{},"不":{"df":0,"docs":{},"多":{"df":0,"docs":{},"大":{"df":0,"docs":{},"的":{"df":0,"docs":{},"一":{"df":0,"docs":{},"些":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}}}},"有":{"8":{"df":0,"docs":{},"个":{",":{"df":0,"docs":{},"那":{"df":0,"docs":{},"就":{"df":0,"docs":{},"合":{"df":0,"docs":{},"并":{".":{"df":0,"docs":{},"比":{"df":0,"docs":{},"如":{"8":{"df":0,"docs":{},"个":{"8":{",":{"df":0,"docs":{},"就":{"df":0,"docs":{},"能":{"df":0,"docs":{},"合":{"df":0,"docs":{},"并":{".":{"7":{"df":0,"docs":{},"个":{"8":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}},"r":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"k":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}}},"t":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}},"y":{"df":0,"docs":{},"中":{"df":0,"docs":{},"只":{"df":0,"docs":{},"有":{"df":0,"docs":{},"一":{"df":0,"docs":{},"个":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}}},"比":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"[":{"5":{":":{"]":{"df":0,"docs":{},"表":{"df":0,"docs":{},"示":{"df":0,"docs":{},"o":{"b":{"a":{"df":0,"docs":{},"m":{"a":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":3,"docs":{"2":{"tf":1.7320508075688772},"3":{"tf":2.0},"4":{"tf":1.0}},"建":{"df":0,"docs":{},"立":{"df":0,"docs":{},"一":{"df":0,"docs":{},"个":{"df":0,"docs":{},"跳":{"df":0,"docs":{},"表":{".":{"df":0,"docs":{},"跳":{"df":0,"docs":{},"表":{"df":0,"docs":{},"里":{"df":0,"docs":{},"存":{"d":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}},"是":{"df":0,"docs":{},"个":{"[":{"df":0,"docs":{},"u":{"8":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"/":{"b":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"y":{"df":0,"docs":{},"在":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},":":{"df":0,"docs":{},"o":{"b":{"a":{"df":0,"docs":{},"m":{"a":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"中":{"df":0,"docs":{},"包":{"df":0,"docs":{},"含":{"df":0,"docs":{},"o":{"b":{"a":{"df":0,"docs":{},"m":{"a":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}},"u":{"3":{"2":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}},"breadcrumbs":{"root":{"1":{"0":{"0":{"df":1,"docs":{"1":{"tf":1.0}}},"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"4":{"df":0,"docs":{},"个":{"df":0,"docs":{},"u":{"8":{"(":{"df":0,"docs":{},"u":{"3":{"2":{")":{",":{"df":0,"docs":{},"表":{"df":0,"docs":{},"示":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"/":{"b":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"8":{"df":1,"docs":{"1":{"tf":1.0}}},"9":{"df":1,"docs":{"1":{"tf":1.0}}},"b":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"y":{":":{"df":0,"docs":{},"o":{"b":{"a":{"df":0,"docs":{},"m":{"a":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"d":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"i":{"d":{",":{"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}},"一":{"df":0,"docs":{},"开":{"df":0,"docs":{},"始":{"df":0,"docs":{},"是":{"df":0,"docs":{},"一":{"df":0,"docs":{},"个":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"成":{"df":0,"docs":{},"百":{"df":0,"docs":{},"上":{"df":0,"docs":{},"千":{"df":0,"docs":{},"的":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"总":{"df":0,"docs":{},"是":{"df":0,"docs":{},"需":{"df":0,"docs":{},"要":{"df":0,"docs":{},"合":{"df":0,"docs":{},"并":{"df":0,"docs":{},"的":{".":{"df":0,"docs":{},"大":{"df":0,"docs":{},"多":{"df":0,"docs":{},"数":{"df":0,"docs":{},"时":{"df":0,"docs":{},"候":{"df":0,"docs":{},"可":{"df":0,"docs":{},"以":{"df":0,"docs":{},"合":{"df":0,"docs":{},"到":{"df":0,"docs":{},"只":{"df":0,"docs":{},"有":{"df":0,"docs":{},"一":{"df":0,"docs":{},"个":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"的":{"df":0,"docs":{},"时":{"df":0,"docs":{},"候":{"df":0,"docs":{},"会":{"df":0,"docs":{},"使":{"df":0,"docs":{},"用":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}}}}}}}}},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}}},"o":{"c":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":2.0}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"写":{"df":0,"docs":{},"的":{"df":0,"docs":{},"有":{"df":0,"docs":{},"更":{"df":0,"docs":{},"多":{"df":0,"docs":{},"的":{"df":0,"docs":{},"可":{"df":0,"docs":{},"能":{"df":0,"docs":{},"性":{".":{"df":0,"docs":{},"可":{"df":0,"docs":{},"以":{"df":0,"docs":{},"移":{"df":0,"docs":{},"植":{"df":0,"docs":{},"到":{"df":0,"docs":{},"s":{"df":0,"docs":{},"g":{"df":0,"docs":{},"x":{"df":0,"docs":{},"中":{",":{"df":0,"docs":{},"也":{"df":0,"docs":{},"可":{"df":0,"docs":{},"能":{"df":0,"docs":{},"放":{"df":0,"docs":{},"到":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"m":{"df":0,"docs":{},"中":{".":{"(":{"df":0,"docs":{},"写":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"附":{"df":0,"docs":{},"送":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}}}}}}}}},"df":0,"docs":{}}}}}}}}}}}}}},"s":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"的":{"df":0,"docs":{},"情":{"df":0,"docs":{},"况":{"df":0,"docs":{},"下":{",":{"df":0,"docs":{},"还":{"df":0,"docs":{},"要":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}},"差":{"df":0,"docs":{},"不":{"df":0,"docs":{},"多":{"df":0,"docs":{},"大":{"df":0,"docs":{},"的":{"df":0,"docs":{},"一":{"df":0,"docs":{},"些":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}}}},"有":{"8":{"df":0,"docs":{},"个":{",":{"df":0,"docs":{},"那":{"df":0,"docs":{},"就":{"df":0,"docs":{},"合":{"df":0,"docs":{},"并":{".":{"df":0,"docs":{},"比":{"df":0,"docs":{},"如":{"8":{"df":0,"docs":{},"个":{"8":{",":{"df":0,"docs":{},"就":{"df":0,"docs":{},"能":{"df":0,"docs":{},"合":{"df":0,"docs":{},"并":{".":{"7":{"df":0,"docs":{},"个":{"8":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}},"r":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"k":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}}}}}},"t":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}},"y":{"df":0,"docs":{},"中":{"df":0,"docs":{},"只":{"df":0,"docs":{},"有":{"df":0,"docs":{},"一":{"df":0,"docs":{},"个":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}}},"比":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"[":{"5":{":":{"]":{"df":0,"docs":{},"表":{"df":0,"docs":{},"示":{"df":0,"docs":{},"o":{"b":{"a":{"df":0,"docs":{},"m":{"a":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":3,"docs":{"2":{"tf":2.0},"3":{"tf":2.0},"4":{"tf":1.0}},"建":{"df":0,"docs":{},"立":{"df":0,"docs":{},"一":{"df":0,"docs":{},"个":{"df":0,"docs":{},"跳":{"df":0,"docs":{},"表":{".":{"df":0,"docs":{},"跳":{"df":0,"docs":{},"表":{"df":0,"docs":{},"里":{"df":0,"docs":{},"存":{"d":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}},"是":{"df":0,"docs":{},"个":{"[":{"df":0,"docs":{},"u":{"8":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"/":{"b":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"y":{"df":0,"docs":{},"在":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},":":{"df":0,"docs":{},"o":{"b":{"a":{"df":0,"docs":{},"m":{"a":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"中":{"df":0,"docs":{},"包":{"df":0,"docs":{},"含":{"df":0,"docs":{},"o":{"b":{"a":{"df":0,"docs":{},"m":{"a":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}},"u":{"3":{"2":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}},"title":{"root":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"的":{"df":0,"docs":{},"情":{"df":0,"docs":{},"况":{"df":0,"docs":{},"下":{",":{"df":0,"docs":{},"还":{"df":0,"docs":{},"要":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"k":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});