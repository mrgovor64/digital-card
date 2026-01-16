---
title: "Example Article"
description: "This is an example article to demonstrate the articles system. You can delete this file once you add your own articles."
date: 2024-01-15
externalPublication: "Example Blog"
externalPublicationUrl: "https://example.com"
---

This is an example article to help you understand how the articles system works.

## How it works

Simply add a new `.md` file to the `/content/articles` folder with frontmatter containing:

- `title`: The article title (required)
- `description`: A short description/excerpt (optional)
- `date`: Publication date in YYYY-MM-DD format (optional)
- `externalPublication`: Name of external publication if republished (optional)
- `externalPublicationUrl`: URL to original publication (optional, requires `externalPublication`)

## Markdown support

The articles support standard Markdown syntax including:

- **Bold text**
- *Italic text*
- `inline code`
- [Links](https://example.com)
- Lists
  - Unordered
  - Items

### Code blocks

```javascript
// Example code block
function greet(name) {
  return `Hello, ${name}!`;
}
```

> Blockquotes are also supported for highlighting important quotes or excerpts.

You can delete this file once you've added your own articles!