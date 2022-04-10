---
sidebar_label: escape()
---

# `escape()`
Encodes a string to HTML entities. Encodes all special characters. To encode fewer characters, use the [`escapeBase()`](escapeBase.md) function.

:::tip
Decode the string with the `unescape()` function.
:::

## Usage
```javascript
import { escape } from 'string-factory';

escape(string);
```

## Prop types
| prop     | type     | required | default   |
|----------|----------|----------|-----------|
| `string` | `String` | yes      | `null`    |

## Examples
```javascript
escape("<script>alert('hello')</script>") // "&lt;script&gt;alert&#x28;&#x27;hello&#x27;&#x29;&lt;&#x2F;script&gt;"
```
