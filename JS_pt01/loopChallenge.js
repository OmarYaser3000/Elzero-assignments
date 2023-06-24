/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
  "Seven",
];

let adminCount =
  myAdmins.slice(0, myAdmins.indexOf("Stop")).length || myAdmins.length;

console.log(adminCount);

document.write(
  `<h3>We Have ${myAdmins.slice(0, adminCount).length} Admins</h3><hr>`
);

let teamCount = 0;
let membersCount = 0;

for (let i = 0; i < adminCount; i++) {
  document.write(
    `<h3>The Admin For Team ${++teamCount} Is ${myAdmins[i]}</h3>`
  );
  document.write(`<h2>Team Members:</h2>`);
  for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j].startsWith(myAdmins[i].substring(0, 1))) {
      document.write(`<p>- ${++membersCount} ${myEmployees[j]}</p>`);
    }
  }
  membersCount = 0;
  document.write(`<hr>`);
}
