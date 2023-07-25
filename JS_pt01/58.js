let myArray = ["E", "l", "z", ["e", "r"], "o"];

let res = myArray
  .map((el) => {
    if (Array.isArray(el)) {
      for (let i = 0; i < el.length; i++) {
        return el.join("");
      }
    } else {
      return el;
    }
  })
  .join("");

console.log(res);
// Elzero
