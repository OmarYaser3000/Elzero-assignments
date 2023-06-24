let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (let i = 0; i < friends.length; i++) {
  if (friends[i].startsWith(letter.toUpperCase())) {
    continue;
  }
  console.log(`${i} => ${friends[i]}`);
}
