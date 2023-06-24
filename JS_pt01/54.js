// Currying Function Technique
// Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. This allows you to partially apply arguments and create new functions with fewer parameters.
// Currying allows you to create reusable and specialized functions by providing arguments incrementally. It can be particularly useful in scenarios where you want to create variations of a function with common parameters or when you need to pass functions as arguments in a more convenient way.
// -------------------------------------------
// Raw Implementation
//function add(x) {
//     return function(y) {
//         return x + y;
//       };
//     }

// Partial application of arguments
//     const addTwo = add(2);

//     console.log(addTwo(3)); // Output: 5
//     console.log(addTwo(5)); // Output: 7
// -------------------------------------------
// Arrow function implementation
// const add = x => y => x + y;

//  Partial application of arguments
// const addTwo = add(2);

// console.log(addTwo(3)); // Output: 5
// console.log(addTwo(5)); // Output: 7
// -------------------------------------------

function checker(zName) {
  return function (status) {
    return function (salary) {
      return status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Avaialble`;
    };
  };
}

// Answer
let check = (fName) => (status) => (salary) => {
  return status === "Available"
    ? `${fName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;
};

console.log(check("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(check("Ahmed")("Not Available")()); // Iam Not Avaialble
