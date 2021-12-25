---
sidebar_label: 'Tips To Use Docusaurus'
sidebar_position: 2
---

# Tips To Use Docusaurus

- Use `sidebar_position` in markdown file to change position

```
---
sidebar_position: 3
---
```

- If you use a folder, don't forget to add `_category_.json`

```json
{
  "label": "name",
  "position": 3
}
```

- Use `truncate` to limit blog post size in the list view

```
<!--truncate-->
```

- The blog post date can be extracted from filenames, such as:

  2019-05-30-welcome.md

  2019-05-30-welcome/index.md
