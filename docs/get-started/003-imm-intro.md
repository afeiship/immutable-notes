# imm-video2
- https://www.bilibili.com/video/av51579469

## 三种重要的数据结构
- Map: 键值集合，对应于 Object; Es6也有专门的 Map对象
- List: 有序且可以重复的列表，对于 Array
- Set: 无序且不可重复的列表， 对应于 es6 里的 Set

## 特性
- Immultable Data，一旦创建，再不可改变
- Immutable 的对象CURD都会产生新的对象
- Why? 
  - Redux有个基本原则是：要求数据是只读的，如果要改，就得 copy 数据之后再进行操作
  - 对于复杂的业务场景，任何都能改，就容易导致 `BUG`
  - 数据只能用，不能改
  - 随便改变数据，会带来不可预期的效果
- 好处
  - 减少内存使用
  - 降低复杂度
  - 方便 Undo/redo Copy/Paste
  - 函数式编程 (不要用 new Map/List 等操作。直接用Map、List()等函数式方式进行)

## 证明一下节省内存的原因
```js
const { Map } = require('immutable');

const car1 = Map({
  name:'benz',
  size: Map({ size: 1 })
})

const car2 = car1.set('name','bmw');

// 对象变了，所以不相等
console.log(car1 !== car2 );

// size 并没有变化，所以继续共享：
console.log(car1.size === car2.size );
```
