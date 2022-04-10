---
sidebar_label: snakeToCamel()
---

# `snakeToCamel()`
Returns a camel-cased version of the given snake_case string.

## Usage
```javascript
import { snakeToCamel } from 'string-factory';

snakeToCamel(string)
```

## Prop types
| prop     | type     | required | default   |
|----------|----------|----------|-----------|
| `string` | `String` | yes      | `null`    |

## Examples
```javascript
snakeToCamel("some_snake_case_thing") // someSnakeCaseThing
```
