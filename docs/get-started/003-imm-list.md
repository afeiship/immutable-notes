# List



```js
const { List } = require('immutable');

const list1 = List([1,2,3,4]);

// 创建一个新的 list
List.of(1,2,3,4);

// 用工厂方法创建
List([1,2,3])

// List
List.isList(list1) // true
List.isList([1,2,3]) // false

// 长度：
list.size
```

