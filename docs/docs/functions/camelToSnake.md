---
sidebar_label: camelToSnake()
---

# `camelToSnake()`
Given a camelCase string, returns a snake_case string.

## Usage
```javascript
import { camelToSnake } from 'string-factory';

camelToSnake(string);
```

## Prop types
| prop     | type     | required | default   |
|----------|----------|----------|-----------|
| `string` | `String` | yes      | `null`    |

## Examples
```javascript
camelToSnake(someFunctionName) // some_function_name
```

```javascript
camelToSnake(anotherFunction123) // another_function123
```
