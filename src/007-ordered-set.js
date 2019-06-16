const immutable = require('immutable');

const os1 = new immutable.OrderedSet([1, 2, 4, 1, 2, 3, 'a', 'b', 'c', 'a']);
const os2 = os1.delete('a');


os2.forEach((item) => {
  console.log(item);
});

// 这里是有序的：
// 1;
// 2;
// 4;
// 3;
// b;
// c;
