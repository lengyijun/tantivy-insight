|                |       |            |                                    |
| -------------- | ----- | ---------- | ---------------------------------- |
| POSTING        | 600M  | .idx       | 倒排索引                           |
| POSTIONS       | 1.1G  | .pos       | 每个Term在document中的position     |
| TERMS          | 30M   | .term      | Term->TermInfo dictionary. 使用FST |
| STORE          | 18M   | .store     | 原document.如果Scheme中加了STORE   |
| POSTITIONSSKIP | 6M    | .posidx    | todo                               |
| FIELDNORMS     | 3M    | .fieldnorm | todo                               |
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

### 如何验证？
用vmtouch
首先把pos文件从内存中释放
```
vmtouch -ve engines/tantivy-0.13/idx/05547fff51334b478466bd834bb95df6.pos
```

然后查看一下，发现确实都释放了。
```
$ vmtouch -v engines/tantivy-0.13/idx/05547fff51334b478466bd834bb95df6.pos

engines/tantivy-0.13/idx/05547fff51334b478466bd834bb95df6.pos
[                                                            ] 0/6032

           Files: 1
     Directories: 0
  Resident Pages: 0/6032  0/23M  0%
         Elapsed: 0.000701 seconds

```
以上的输出表示内存中没有这个pos文件的缓存。

然后我们把query.txt中包含phrase的行都删除掉。我是用vim打开，然后敲
```
:g/phrase/d
```

然后 `make bench`

再 
```
$ vmtouch -v engines/tantivy-0.13/idx/05547fff51334b478466bd834bb95df6.pos

engines/tantivy-0.13/idx/05547fff51334b478466bd834bb95df6.pos
[                                                oOOO     ooo] 401/6032

           Files: 1
     Directories: 0
  Resident Pages: 401/6032  1M/23M  6.65%
         Elapsed: 0.00083 seconds

```

发现只读了一点头部信息，并没有把整个文件都加载到内存。
如果真正使用了pos文件，整个文件都会在内存中，可以自行实验一下。

