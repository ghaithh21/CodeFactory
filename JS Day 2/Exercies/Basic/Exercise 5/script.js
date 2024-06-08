function ageCalculater(birthYear) {
  let today = new Date();
  let yourAge = today.getFullYear() - birthYear;
  return ["You are either " + (yourAge - 1) + " or " + yourAge + " years old."];
}
console.log(ageCalculater(1990));
