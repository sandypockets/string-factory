---
sidebar_label: unescape()
---

# `unescape()`
Decodes HTML entities in a string. This is the opposite of [`escape`](escape.md).

## Usage
```javascript
import { unescape } from 'string-factory';

unescape(string);
```

## Prop types
| prop     | type     | required | default   |
|----------|----------|----------|-----------|
| `string` | `String` | yes      | `null`    |

## Examples
```javascript
unescape("&lt;script&gt;alert&#x28;&#x27;hello&#x27;&#x29;&lt;&#x2F;script&gt;") // "<script>alert('hello')</script>" 
```
