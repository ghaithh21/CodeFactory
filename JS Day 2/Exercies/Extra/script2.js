const calc = alert("average calculation");
let a = Number(prompt("Enter first grade: "));
let b = Number(prompt("Enter second grade: "));
let c = Number(prompt("Enter third grade: "));
if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
  console.log("You must enter number!");
} else {
  let avg = a + b + c / 3;
  console.log("Your average is: " + avg);
}
