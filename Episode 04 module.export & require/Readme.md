
---

# 🌟 Episode 04: `module.exports` & `require` in Node.js 🌟  

Node.js treats every file as a **module**, allowing you to share and reuse code effectively. This episode covers everything from importing/exporting modules to handling nested modules and understanding strict vs. non-strict mode.  

---

## 📌 Why Use Modules?

Modules let us include code from one file into another.  
For example:  

```javascript
// app.js
console.log("This is Application JS File");

// server.js
require('./app');
console.log("This is Server JS File");

// Output (when running `node server.js`)
This is Application JS File
This is Server JS File
```

> Every file is a **module** in Node.js, and we use the `require()` function to access its content.  

---

### ❌ Why Can't We Access Functions or Variables Directly?

```javascript
// sum.js
function calculateSum(a, b) {
  console.log(`Sum is ${a + b}`);
}

// server.js
require('./sum');
calculateSum(10, 20); // Error: calculateSum is not defined
```

**Reason:**  
Modules are **protected by default**! You must explicitly export functions or variables to share them between files.  

---

## 📤 Exporting and 📥 Importing Modules  

1️⃣ **Single Export Example**  
```javascript
// sum.js
function calculateSum(a, b) {
  console.log(`Sum is ${a + b}`);
}
module.exports = calculateSum;

// server.js
const calculateSum = require('./sum');
calculateSum(10, 20);

// Output: Sum is 30
```

2️⃣ **Multiple Exports with an Object**  
```javascript
// sum.js
function calculateSum(a, b) {
  console.log(`Sum is ${a + b}`);
}
let name = "Sambhav";

module.exports = { calculateSum, name };

// server.js
const { calculateSum, name } = require('./sum');
calculateSum(10, 20);
console.log(name);

// Output:
// Sum is 30
// Sambhav
```

3️⃣ **Exporting Using `module.exports.<name>`**  
```javascript
// sum.js
module.exports.calculateSum = function (a, b) {
  console.log(`Sum is ${a + b}`);
};
module.exports.name = "Sambhav";

// server.js
const { calculateSum, name } = require('./sum');
calculateSum(10, 20);
console.log(name);

// Output:
// Sum is 30
// Sambhav
```

---

## 🔄 CommonJS (CJS) vs ECMAScript Modules (ESM)

| **Feature**            | **CommonJS (CJS)**               | **ECMAScript Modules (ESM)**       |
|-------------------------|-----------------------------------|-------------------------------------|
| Export Syntax           | `module.exports`                | `export`                           |
| Import Syntax           | `require()`                     | `import`                           |
| Default in Node.js      | ✅ Yes                           | ❌ No (unless specified in `package.json`) |
| Asynchronous Loading    | ❌ No (Synchronous)              | ✅ Yes                              |
| Strict Mode             | ❌ Optional                     | ✅ Enabled by Default               |

To enable ESM in Node.js, update your **package.json**:  
```json
{
  "type": "module"
}
```

### Example of ESM:
```javascript
// sum.js
export function calculateSum(a, b) {
  console.log(`Sum is ${a + b}`);
}
export let name = "Sambhav";

// server.js
import { calculateSum, name } from './sum.js';
calculateSum(10, 20);
console.log(name);

// Output:
// Sum is 30
// Sambhav
```

---

## 🛡 Strict Mode vs Non-Strict Mode  

| **Mode**        | **Example Code**                   | **Behavior**              |
|------------------|------------------------------------|---------------------------|
| **Non-Strict**  | `z = "Non Strict Mode";`           | ✅ Allowed                |
| **Strict**      | `'use strict'; z = "Strict Mode";` | ❌ `ReferenceError: z is not defined` |

---

## 🗂 Nested Modules

You can organize modules into folders for better structure:  

### Option 1: Import Each Module Separately  
```javascript
// calc/sum.js
function calculateSum(a, b) {
  console.log(`Sum is ${a + b}`);
}
module.exports = { calculateSum };

// calc/multiply.js
function calculateMul(a, b) {
  console.log(`Multiplication is ${a * b}`);
}
module.exports = { calculateMul };

// server.js
const { calculateSum } = require('./calc/sum');
const { calculateMul } = require('./calc/multiply');
calculateSum(10, 20);
calculateMul(10, 20);

// Output:
// Sum is 30
// Multiplication is 200
```

### Option 2: Create an `index.js` for Folder Exports  
```javascript
// calc/index.js
const { calculateSum } = require('./sum');
const { calculateMul } = require('./multiply');
module.exports = { calculateSum, calculateMul };

// server.js
const { calculateSum, calculateMul } = require('./calc');
calculateSum(10, 20);
calculateMul(10, 20);

// Output:
// Sum is 30
// Multiplication is 200
```

---

## 🎯 Key Takeaways  

- **Modules** make your code reusable and organized.  
- Use `require()` (CJS) or `import` (ESM) to include modules.  
- Export specific functions or variables to share them across files.  
- Use **nested modules** and `index.js` files to organize large codebases.  
- **ESM** is becoming the industry standard for module management.  

---

## 📂 Project Directory  

```plaintext
Episode04_ModuleExport_Require
├── calc
│   ├── index.js
│   ├── multiply.js
│   └── sum.js
├── app.js
├── server.js
├── package.json
└── README.md
```

---
