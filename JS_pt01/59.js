let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

res = numsAndStrings
  .filter((el) => {
    return typeof el === "number";
  })
  .map((el) => {
    return -el;
  });

console.log(res);

// [-1, -10, 10, 20, -5, -3]
