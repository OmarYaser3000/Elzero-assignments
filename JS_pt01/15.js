// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
// Number Methods
// - Two Dots To Call A Methods
// - toString()
// - toFixed()
// - parseInt()
// - parseFloat()
// - isInteger() [ES6]
// - isNaN() [ES6]
let num = 100000;
console.log(Number(num.toFixed(0))); // 100000
console.log(parseInt("100000")); // 100000
console.log(10e4); // 100000
console.log(+"100000"); // 100000
console.log(-"-100000"); // 100000
console.log(10 ** 5); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(5e4 * 2); // 100000
console.log(5e2 * 2e2); // 100000
console.log(Math.sqrt(Math.pow(10e4, 2))); // 100000
