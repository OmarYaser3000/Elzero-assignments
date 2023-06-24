/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  [++a] [+]
  [++a]
  - Value:   11 + 20 + 80 - 11
  - Explain: a=12, b=21, c=81
  [+]
  - Value:   13 - 21 + 81 + 13 + 14

  - Explain: a=14, b=21, c=82
  [+]
  - Value:   81 + 21 + 13 * 21 - 22 * 13 + 12 - 1
  - Explain: a=12, b=22, c=81
  [+]
*/

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log(-d + f + 2 * +e + 3 * g); // 173
