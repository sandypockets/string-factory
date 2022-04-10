---
sidebar_label: kebabToSnake
---

# `kebabToSnake`
Returns a string with kebab-case converted to snake_case.

## Usage
```javascript
import { kebabToSnake } from 'string-factory';

kebabToSnake(string);
```

## Prop types
| prop     | type     | required | default   |
|----------|----------|----------|-----------|
| `string` | `String` | yes      | `null`    |

## Examples
```javascript
kebabToSnake("some-kebab-case-name") // some_kebab_case_name
```
