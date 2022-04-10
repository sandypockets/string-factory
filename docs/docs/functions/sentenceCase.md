---
sidebar_label: sentenceCase()
---

# `sentenceCase()`
Returns a string with the first character of the string in upper case and the rest in lower case.

## Usage
```javascript
import { sentenceCase } from 'string-factory';

sentenceCase(string);
```

## Prop types
| prop     | type     | required | default   |
|----------|----------|----------|-----------|
| `string` | `String` | yes      | `null`    |

## Examples
```javascript
sentenceCase("hello world") // "Hello world"
```
