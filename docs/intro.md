---
sidebar_position: 1
---

# Getting Started

## Requesting an API Key

Plato is in private beta right now, so you have to request an API key manually. Please contact: [Andrew Gao](mailto:agao2@andrew.cmu.edu?subject=Plato%20API%20Key), [Roger Yang](mailto:hryang@andrew.cmu.edu?subject=Plato%20API%20Key), or [Umut Acar](mailto:uacar@andrew.cmu.edu?subject=Plato%20API%20Key) to obtain one. If you already have an API key, please go to the next step.

## Installing Plato

Plato requires `Python >= 3.8`, install using

```
pip install plato
```

## Making your first query

```
from Plato import Plato

client = Plato(<YOUR_API_KEY_HERE>)
client.upload(file="customer-support-docs.docx")
client.create("What's our return policy on items 30 days late?")
```
