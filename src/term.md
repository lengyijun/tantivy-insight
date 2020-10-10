# Term

title:obama 是一个Term. 表示在title中包含obama

多个Term的组合是查询条件, 比如 title:obama  OR title:president OR body:obama OR body:president 

一个Term是个[u8]. 前4个u8(u32),表示title/body. u32<->title/body在Schema中.

Term[5:]表示obama

term会放在fst中,写在硬盘里
