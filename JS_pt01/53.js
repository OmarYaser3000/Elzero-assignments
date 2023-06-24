// 01
function itsMe() {
  return `Iam A Normal Function`;
}

// Answer
let itsMe2 = () => {
  return `Iam An Arrow Function`;
};
console.log(itsMe2()); // Iam A Normal Function

// 02
function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}

// Answer
let createUrl = (protocol, web, tld) => {
  return `${protocol}://www.${web}.${tld}`;
};

console.log(createUrl("https", "elzero", "org")); // https://www.elzero.org
