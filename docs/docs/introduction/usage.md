---
sidebar_position: 3
---

# Usage

After installing `string-factory`, using it is as simple as importing (or requiring) the function at the top of your project or component file. 

## ES Modules
```javascript
import { sarcasm } from 'string-factory';
```

Then you can use it normally, like you would any other function. Here's a React.js example.

```jsx title="src/components/MyComponent.jsx"
import React from 'react';
import { sarcasm } from "string-factory";

function MyComponent() {
  return (
    <div>
      <p>{dateNow("wow so funny")}</p>
    </div>
  )
}
```
Check out a live ESM demo of this function on StackBlitz. 

[![Open string-factory demo in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/string-factory-demo?file=src/App.js)

## CommonJS
```javascript title="index.js"
const { sarcasm } = require('string-factory');

console.log(sarcasm("wow so funny"));
```