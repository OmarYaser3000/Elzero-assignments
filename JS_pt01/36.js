let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

// 01
if (haystack.includes(needle)) {
  console.log("Found");
}

// 02
let index = haystack.indexOf(needle);
if (index != -1) {
  console.log("Found");
}
// 03
let index2 = haystack.lastIndexOf(needle);
if (index2 != -1) {
  console.log("Found");
}

// console.log(index, index2);
