---
sidebar_label: camelToPascal()
---

# `camelToPascal()`
Returns a string without spaces, and with the first letter of each word capitalized.

## Usage
```javascript
import { camelToPascal } from 'string-factory';

camelToPascal(string);
```

## Prop types
| prop     | type     | required | default   |
|----------|----------|----------|-----------|
| `string` | `String` | yes      | `null`    |

## Examples
```javascript
camelToPascal("helloWorld") // "HelloWorld" 
```

```javascript
camelToPascal("changeToPascalCase") // "ChangeToPascalCase" 
```
