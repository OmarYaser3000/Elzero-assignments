/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(`${a.substring(2, 6).charAt(0).toUpperCase()}${a.substring(3, 6)}`); // Zero

// 8 H
console.log(a.slice(-4, -3).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split(" ").slice(0, 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substring(0, 7)}${a.substring(11)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(`${a.charAt(0).toLowerCase() + a.substring(1).toUpperCase()}`); // eLZERO WEB SCHOOl
