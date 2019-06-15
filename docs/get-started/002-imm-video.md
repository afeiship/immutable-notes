# imm-video
- https://www.bilibili.com/video/av11040701

## immutable Map
```js
var immutable = require('immutable');
var map1 = immutable.Map({ name: 'fei' });
var map2 = immutable.Map({ age: 108 });

var map3 = map1.merge(map2);


// set/get/merge and ...
map3.set('a',1);
map3.get('name');
```


## immutable List
```js
var immutable = require('immutable');
var list1 = immutable.List([1,2,3]);
var list2 = immutable.List([2,3,4,5]);


// merge
list1.merge(list2);
list2.merge(list1);
```


## immulable VS javscript
```js
// arr1 changed:
var arr1 = [1,2,3];
arr1.pop();

// immutalbe will return new, old will not changed:
var map1 = immultable.Map({ a:1, b:2});
var map2 = map1.set('a',100);

console.log(map1); // Map({ a:1, b:2 });
console.log(map2); // Map({ a:100, b:2 });
```
