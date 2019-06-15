# List



```js
const { List } = require('immutable');

const list1 = List([1,2,3,4]);

// 创建一个新的 list
List.of(list1);

// List
List.isList(list1) // true
List.isList([1,2,3]) // false
```
