const students = [
  [76, 64, 81, 57, 94],
  [85, 49, 81, 72, 55],
  [65, 91, 84, 67, 85],
  [93, 70, 81, 64, 84],
  [81, 99, 71, 100, 69],
  [0, 30, 50, 50, 20],
];
function calculateAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let avg = sum / array.length;
  return avg;
}

let graded = (grade) => {
  if (grade < 60) {
    return "F";
  } else if (grade < 70) {
    return "D";
  } else if (grade < 80) {
    return "C";
  } else if (grade < 90) {
    return "B";
  } else {
    return "A";
  }
};

let totalOfAll = 0;
for (let val of students) {
  console.log(graded(calculateAverage(val)));
  totalOfAll += calculateAverage(val);
}
let avgOfAll = totalOfAll / students.length;
console.log(graded(avgOfAll));

// console.log(calculateAverage(students));

// var Avgmarks = 0;

// Loop through the students array to calculate the total marks
// for (var i = 0; i < students.length; i++) {
//   Avgmarks += students[i][1];
//   var avg = Avgmarks / students.length;
// }

// Calculate and log the average grade
// console.log("Average grade: " + Avgmarks / students.length);

let grades = [80, 87, 94, 82, 62, 98, 81, 81, 74, 91]; // define the array
let total = 0; // initialize the total
let x = 0;

function calculateAvg() {
  if (students.length > 0) {
    for (let x = 0; x < students.length; x++) {
      // loop (students.length) times

      for (let j = 0; j < students[x].length; j++) {
        total += students[x][j];
      }
    }

    document.write(
      "The existing list is: " +
        students +
        "<br>" +
        "The total is: " +
        total +
        "<br>" +
        "The average grade is: " +
        total / students.length
    );
  } else document.write("Empty Array");
}
calculateAvg();
