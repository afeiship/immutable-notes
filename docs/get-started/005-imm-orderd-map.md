# imm-ordered-map

```js
const immutable = require('immutable');

const om1 = immutable.OrderedMap([['k1', 'v1']]);

const om2 = om1.set('x', 1);

// console.log(om2);
om2.forEach((value, key) => {
  console.log('value,key', value, key);
});

```
