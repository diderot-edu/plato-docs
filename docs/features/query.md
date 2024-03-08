---
sidebar_position: 2
---

# Querying your RAG Model

After uploading your files, you can make queries to your custom RAG model like so,

```
response = client.complete(<YOUR_QUESTION_HERE>)
print(response)
```

The response will always be returned as a `string`. Happy hacking!