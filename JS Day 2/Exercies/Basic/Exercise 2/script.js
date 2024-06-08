const favoriteFoods = ["pizza", "hamburger", "ice cream", "chocolate"];
const getRandomFood = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};
console.log(getRandomFood(favoriteFoods));