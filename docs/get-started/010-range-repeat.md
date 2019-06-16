# Range

```js
const immutable = require('immutable');
const r1 = immutable.Range(5, 10);
const r2 = immutable.Repeat(1,10)

console.log(r1);
console.log(r2);

// Range { _start: 5, _end: 10, _step: 1, size: 5 }
// Repeat { _value: 1, size: 10 }
```
