# FST

## FST能做什么?

- 有序集合
- 有序dictionary (value需要定义运算符,比如整数的加法)

FST与存储相关联.如果只在内存中,不如用无序的hashmap或者有序的BTree.

存储可以是硬盘,socket或者内存.反正是Rust中writable的东西

加入之后很难修改/删除. 修改/删除=重新构建一个FST

------

## FST vs Trie

1. Trie只适合英文
2. FST能压缩前缀和后缀. Trie只能压缩前缀

https://www.cnblogs.com/bonelee/p/6226185.html

------

## FST vs gzip

1. 压缩时间和压缩率上,gzip都比FST好
2. 但是FST能在上面做搜索

------

## FST 如何压缩后缀的

如果只考虑按字母顺序的插入,比如bird cat dog . 这是比较方便做到的

https://blog.burntsushi.net/transducers/

## FST如果做模糊搜索的(Levenshtein)

