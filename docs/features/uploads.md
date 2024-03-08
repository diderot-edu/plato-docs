---
sidebar_position: 1
---

# Uploading Documents

## Overview

Plato currently supports three types of uploads:
- Files
- Folders
- Website links

File/folder uploads are preferred to website uploads. Currently, Plato supports only `.tex`, `.docx`, `.md` file extension types. Folder uploads are essentially batch file uploads and can only support the same three file extensions. Websites are uploaded via URLs but may not work for sites that block web crawling. We assume you have set your API key and instantiated your client already,

```
from Plato import Plato

client = Plato()
client.set_api_key(<YOUR_API_KEY_HERE>)
```

## How to Upload

All uploads take place through the `upload` function. You specify different args for different kinds of uploads.

### Files

To upload a file,

```
client.upload(file_name="../examples/test.md")
```

where the `file_name` specified should be relative to your current working directory. Plato will search for this file and send it to us for processing.

### Folders

To upload a folder,

```
client.upload(directory_name="examples/")
```

where `directory_name` is the relative path of the folder you want to upload. Plato recursively searches through the specified directory and uploads all files contained. <ins>Make sure that all files in the folder specified are **accepted file types**</ins>.

### Websites

To upload a website, specify the full URL as follows,

```
client.upload(link="https://example.com")
```

Plato will recursively crawl the website, fetch all internal links (e.g. `example.com/dog`, `example.com/cat/1`), and process them.