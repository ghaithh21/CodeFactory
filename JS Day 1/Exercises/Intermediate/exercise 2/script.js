let fruits = ["apple", "banana", "kiwi", "mango", "pear"];
console.log(fruits);
let orange = fruits.push("orange");
console.log(fruits);
let removeFirst = fruits.shift();
console.log(fruits);
let addApple = fruits.splice(0, 0, "apple") + fruits.pop();
console.log(fruits);
let addStrawberryRemoveApple = fruits.splice(0, 1, "Strawbery");
console.log(fruits);

let animals = ["monkey", "horse", "dog", "elephant", "giraffe"];
console.log(animals);
let removeFirstAnimal = animals.shift();
console.log(animals);
let addCat = animals.unshift("cat");
console.log(animals);
let removeLastAnimal = animals.pop();
console.log(animals);
let addTiger = animals.splice(4, 0, "tiger");
console.log(animals);