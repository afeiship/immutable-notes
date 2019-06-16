const immutable = require('immutable');

const s1 = new immutable.Set([1, 2, 4, 1, 2, 3, 'a', 'b', 'c', 'a']);
const s2 = s1.delete('a');
s2.forEach((item) => {
  console.log(item);
});


// 这个循环，证明是无序的：
// 1;
// 2;
// 4;
// 3;
// c;
// b;

// console.log(s1);
