let nums = [2, 12, 11, 5, 10, 1, 99];

let res = nums.reduce((acc, el) => {
  if (el % 2 === 0) {
    return acc * el;
  } else if (el % 2 === 1) {
    return acc + el;
  }
}, 1);

console.log(res);
// 500
