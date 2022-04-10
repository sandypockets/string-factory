---
sidebar_label: kebabToPascal
---

# `kebabToPascal`
Returns a string with kebab-case words converted to PascalCase.

## Usage
```javascript
import { kebabToPascal } from 'string-factory';

kebabToPascal(string);
```

## Prop types
| prop     | type     | required | default   |
|----------|----------|----------|-----------|
| `string` | `String` | yes      | `null`    |

## Examples
```javascript
kebabToPascal("some-kebab-case-var") // "SomeKebabCaseVar"
```
