let num = 3;

// Solution One
console.log(num * --num); // 6

// Solution Two
num = 3;
console.log((num += num)); // 6

// Soultion Three
num = 3;
console.log(num ** 2 - num); // 6

// Soultion Four
num = 3;
console.log(num / (true / 2)); // 6

// Solution Five
num = 3;
console.log(num << (true / 1)); // 6

// Solution Six
num = 3;
console.log(Math.pow(num, 2) - 3); // 6
