---
sidebar_label: snakeCase()
---

# `snakeCase()`
Returns a string formatted in snake_case.

## Usage
```javascript
import { snakeCase } from 'string-factory';

snakeCase(string);
```

## Prop types
| prop     | type     | required | default   |
|----------|----------|----------|-----------|
| `string` | `String` | yes      | `null`    |

## Examples
```javascript
snakeCase('snake case') // "snake_case"
```

```javascript
snakeCase('some new file name') // "some_new_file_name"
```
