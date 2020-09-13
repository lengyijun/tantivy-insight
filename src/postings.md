# Postings

也称为Inverted list, posting list

是Term -> [DocId] 的映射

在tantivy中,是 Term -> [(DocId,frequencies)]

The term frequency is the number of occurrences of the term within the document.