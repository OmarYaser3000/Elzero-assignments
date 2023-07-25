let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let res = mix
  .map((el) => {
    if (typeof el === "string") {
      return el;
    } else {
      return;
    }
  })
  .reduce((acc, el) => {
    if (el !== undefined) {
      acc += el;
    }
    return acc;
  }, "");

console.log(res);
// Elzero
