function specialMix(...data) {
  // Your Code Here
  let sum = 0;
  let num = 0;
  let numTracker = 0;
  let strTracker = 0;

  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "string" && isNaN(parseInt(data[i]))) {
      strTracker += 1;
    } else if (typeof data[i] === "string" && !isNaN(parseInt(data[i]))) {
      num = parseInt(data[i]);
      sum += num;
    } else if (typeof data[i] === "number") {
      num = data[i];
      sum += num;
    }
  }
  if (strTracker === data.length) {
    return `All Are Strings`;
  } else {
    return sum;
  }
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
