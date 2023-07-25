// Method One
// Create Your Object Here
let objMethodOne = {
  property: "One",
};

console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
function objMethodTwo(property) {
  this.property = property;
}
objMethodTwo.property = "Two";

console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
class objMethodThree {
  constructor(property) {
    this.property = property;
  }
}
objMethodThree.property = "Three";

console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
objPrototype = {
  greet: (name) => {
    console.log(`Hello ${name}`);
  },
};

const objMethodFour = Object.create(objPrototype);
objMethodFour.property = "Four";

console.log(objMethodFour.property); // "Method Four"
