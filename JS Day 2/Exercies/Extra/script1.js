const add = (array) => {
  return array.splice(2, 0, `${"orange"},${"Strawberry"}`) + array.join();
};
console.log(add(["apple", "banana", "kiwi"]));
