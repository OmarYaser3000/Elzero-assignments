let myString = "EElllzzzzzzzeroo";

let arr = myString.split("");
let res = arr
  .filter((el, index) => {
    if (arr[index] != arr[index + 1]) {
      return el;
    }
  })
  .join("");

console.log(res);
// Elzero
