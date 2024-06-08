// let fname = "";

document.getElementById("create").addEventListener("click", function () {
  let fName = document.getElementById("fname").value;
  let lName = document.getElementById("lname").value;
  let age = document.getElementById("age").value;

  let color = "green";

  if (fName.length < 5) {
    color = "red";
  }
  let lColor = "blue";
  if (lName.length < 6) {
    lColor = "yellow";
  }

  document.getElementById(
    "result"
  ).innerHTML = `I am ${fName}<span id ='lColor'>${lName}</span> and ${age} years old.`;
  document.getElementById("lColor").style.backgroundColor = lColor;

  //   document.getElementById(
  //     "result"
  //   ).innerHTML = `I am <span id ='color'>${fName}</span> ${lName} and ${age} years old.`;
  //   document.getElementById("color").style.color = color;
});
