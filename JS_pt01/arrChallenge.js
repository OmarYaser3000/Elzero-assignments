/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
my = my.splice(0, 4).reverse();
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(1, 3)); // ["Elham", "Mazero"]

console.log(`${my[1][0]}${my[1][1]}${my[2].substring(2)}`); // "Elzero"

console.log(`${my[2][4]}${my[2][5].toUpperCase()}`); // "rO"
