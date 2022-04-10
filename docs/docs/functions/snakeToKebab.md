---
sidebar_label: snakeToKebab()
---

# `snakeToKebab()`
Given a snake_case string, returns a lowercase kebab-case string.

## Usage
```javascript
import { snakeToKebab } from 'string-factory';

snakeToKebab(string);
```

## Prop types
| prop     | type     | required | default   |
|----------|----------|----------|-----------|
| `string` | `String` | yes      | `null`    |

## Examples
```javascript
snakeToKebab('some_snake_case_string') // some-snake-case-string
```

```javascript
snakeToKebab('SOME_OTHER_SNAKE_CASE_STRING') // some-other-snake-case-string
```
