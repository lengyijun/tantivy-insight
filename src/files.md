|                |       |            |                                    |
| -------------- | ----- | ---------- | ---------------------------------- |
| POSTING        | 8.5M  | .idx       | 倒排索引                           |
| POSTIONS       | 1.6G  | .pos       | 每个Term在document中的position     |
| TERMS          | 60M   | .term      | Term->TermInfo dictionary. 使用FST |
| STORE          | 4.5G  | .store     | 原document.如果Scheme中加了STORE   |
| POSTITIONSSKIP | 9.4M  | .posidx    |                                    |
| FIELDNORMS     | 8.5M  | .fieldnorm |                                    |
| FASTFIELDS     | 5byte | .fast      | 空的                               |

