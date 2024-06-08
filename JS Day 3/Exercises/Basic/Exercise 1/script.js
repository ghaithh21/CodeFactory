let arr = [1, 7, -3, 9];
let max = arr[0];
for (i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
let maximum = arr[0];
for (let val of arr) {
  if (val > maximum) {
    maximum = val;
  }
}

let maxi = arr[0];
arr.forEach((val) => {
  if (val > maxi) {
    maxi = val;
  }
});
console.log(max);
console.log(maximum);
console.log(maxi);
