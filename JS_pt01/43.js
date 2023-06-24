let start = 0;
let swappedName = "elZerO";

let arr = [];
for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] !== swappedName[i].toUpperCase()) {
    arr.push(swappedName[i].toUpperCase());
  } else if (swappedName[i] !== swappedName[i].toLowerCase()) {
    arr.push(swappedName[i].toLowerCase());
  }
}
console.log(arr.join(""));
