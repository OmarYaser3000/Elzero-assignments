function ageInTime(theAge) {
  // Your Code Here
  if (theAge > 100 || theAge < 10) {
    console.log(`Age Out Of Range`);
  } else {
    console.log(`Age in Months => ${theAge * 12}`);
    console.log(`Age in Weeks => ${theAge * 52}`);
    console.log(`Age in Days => ${theAge * 365}`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
