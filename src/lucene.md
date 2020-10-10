# Lucene

这里整理一些我看到的和lucene相关的资料

| Jargon | Meaning                                          |
| ------ | ------------------------------------------------ |
| Field  | StringField, TextField and NumericDocValuesField |
|        |                                                  |
|        |                                                  |


## Pattern 

|               |                                                  |
| ------------- | ------------------------------------------------ |
| java          | 默认域包含java项的文档                           |
| java unit     | 默认域包含java或者unit的文档                     |
| java OR unit  | 同上                                             |
| +java +unit   | 默认域同时包含java和unit的文档                   |
| java AND unit | 同上                                             |
| title:ant     | title域中包含ant的文档                           |
| java~         | 与java相似的项的文档,例如lava                    |
| java*          | 包含与java开头的项的文档,例如javaserver java.net |
|               |                                                  |


## Merging policy
有两种mergy policy.一个根据大小(字节)合并,一种根据文档个数合并.
如果文档大小的方差比较大,建议使用文档大小合并
当然,你也可以自己写Merging policy

## Compare with tantivy
|            | lucene | tantivy      |
| ---------- | ------ | ------------ |
| 音近词     | ✅      | ❌            |
| 形近词     | ✅      | ❌            |
| 自定义排序 | ✅      | I don't know |

### 音近词

似乎用处不大

在google搜索中,只有当所有单词都出现拼写错误,因而没有搜索到任何匹配文档的时候,才会检查音近词,否则搜索的结果就太多了