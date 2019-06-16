# imm-map

```js
// Map 对应的是无序的

const immutable = require('immutable');
const m1 = immutable.Map({ name: 'afei' });

// set 可以以 复杂对象为 key
const m2 = m1.set('test', 123);
const l1 = immutable.List([1, 2, 3]);
const m3 = m1.set(l1, 'vlaue');

// console.log(m1, m2, m3);

// delete, deleteAll
const dm1 = immutable.Map({
  x: 1,
  y: 2,
  name: 'fzheng'
});

// 好处是：多次删除，只生成一个对象
const dm2 = dm1.deleteAll(['x', 'y']);
console.log(dm2);
```
