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

// set/get
const list2 = list1.set(0,'aaa');
list2.get(0); // 'aaa'

const list3 = list1.set(10, 666);
// [1,2,3,undefined,...., 666];

// 从右向左，第1个
const list4 = list1.set(-1, 555);


// delete/insert/update: 删除指定下标
const list5 = list1.delete(0);

// 第2个插入值
const list6 = list1.insert(1,777); 

// clear
const list7 = list1.clear();

// update
const list8 = list1.update(0, function(val){
  return Date.now() + val;
});


// other: push/pop/unshift/shift

// setSize
const l1 = List([1,2,3,4,5]);
const l2 = l1.setSize(2);

// 多维数组： setIn/deleteIn/insertIn....


// merge/concat 这两个是相同的

// filter/flattern(true/false) 
// true: shalow
// false: deep
// find/findLast ......
```

