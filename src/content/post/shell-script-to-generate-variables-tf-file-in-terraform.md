---
title: Shell script to generate `variables.tf` file in terraform
description: Simple tip for terraform.
publishDate: 1 Apr 2022
tags: ["terraform", "software"]
---

Here is small script that can help generating the variables.tf file by reading other .tf files.

Warning, below command overwrites your current variables.tf file.

```bash
grep -oE "var\.(\w+)" main.tf | \
awk '!a[$0]++' | \
while IFS= read -r line; do echo $line | \
cut -d '.' -f 2 | \
awk '{print "variable \""$1"\" {\n  description = \"\"\n}\n"}' ; done > variables.tf
```
