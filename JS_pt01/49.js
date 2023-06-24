function checkStatus(a, b, c) {
  // Your Code Here
  let name = "";
  let age = 0;
  let status = false;

  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "string") {
      name = arguments[i];
    } else if (typeof arguments[i] === "number") {
      age = arguments[i];
    } else if (typeof arguments[i] === "boolean") {
      status = arguments[i];
    } else {
      console.log(`unsupported data types!`);
    }
  }

  let message = "";
  if (status) {
    message = "You Are Available For Hire";
  } else {
    message = "You Are Not Available For Hire";
  }

  console.log(`Hello ${name}, Your Age is ${age}, ${message}.`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
