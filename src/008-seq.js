const immutable = require('immutable');

const sq1 = immutable.Seq([1, 2, 3, 4, 5, 6]);
const sq2 = sq1.filter((x) => x % 2 === 0)
  .map((x) => {
    console.log('running?');
    return x * 4;
  });

// 只是输出，是不会计算的
console.log(sq2);

// 这里需要用到里面的值的时候，才开始计算
console.log(sq2.get(1));
