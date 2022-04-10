---
sidebar_label: truncate()
---

# `truncate()`
Returns a truncated string, with a custom length and delimiter.

## Usage
```javascript
import { truncate } from 'string-factory';

truncate(string, length, delimiter);
```

## Prop types
| prop         | type     | required | default  |
|--------------|----------|----------|----------|
| `string`     | `String` | yes      | `null`   |
| `length`     | `Number` | no       | 30       |
| `delimiter`  | `string` | no       | "..."    |

## Examples

```javascript
truncate("This is a test", 7) // "This is..."
```

```javascript
truncate("This is a test") // "This is a test"
```

```javascript
truncate("This is a test", 7, "?") // "This is?"
```