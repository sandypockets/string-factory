---
sidebar_label: escapeBase()
---

# `escapeBase()`
Applies minimal amount of HTML entities encoding. This is useful for escaping user input that is to be used in a URL, when you want to sanitize as little of the input as needed for security. 

## Usage
```javascript
import { escapeBase } from 'string-factory';

escapeBase(string);
```


## Prop types
| prop     | type     | required | default   |
|----------|----------|----------|-----------|
| `string` | `String` | yes      | `null`    |

:::info
The following characters are escaped:

- `&`
- `<`
- `>`
- `"`
- `'`
:::

## Examples
```javascript
escapeBase('<style>@keyframes x{}</style><xss style="animation-name:x" onanimationend="alert(1)"></xss>') // "&lt;style&gt;@keyframes x{}&lt;/style&gt;&lt;xss style=&quot;animation-name:x&quot; onanimationend=&quot;alert(1)&quot;&gt;&lt;/xss&gt;"
```
