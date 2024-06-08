// class Cars {
//   carName;
//   ProducationYear;
//   carImage;
//   carPrice;
//   constructor(car, year, image, price) {
//     this.name = carName;
//     this.year = ProducationYear;
//     this.img = carImage;
//     this.price = this.carPrice;
//   }
// }
let arrayOfObj = [];
let keys = ["carName", "producationYear", "carImage", "carPrice"];
let values = [
  ["Mazda", 2023, "", 15000],
  ["Ford", 2020, "", 20000],
  ["GMC", 2022, "", 18000],
  ["BMW", 2024, "", 40000],
];
for (let i = 0; i < values.length; i++) {
  let car = {};
  for (let j = 0; j < values[i].length; j++) {
    car[keys[j]] = values[i][j];
  }
  arrayOfObj.push(car);
}

let text = "";
for (let [keys, values] of Object.entries(arrayOfObj)) {
  document.getElementById("result").innerHTML += ` ${values.carName} 
  ${values.producationYear} 
  ${values.carImage}
  ${values.carPrice} <br>`;
}

// arrayOfObj.forEach((val, i) => {
//   document.getElementById("result").innerHTML += ` ${val.carName}  <br>`;
// });
console.log(arrayOfObj);
