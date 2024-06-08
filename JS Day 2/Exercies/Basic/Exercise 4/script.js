function ageCalculater(birthYear, currentYear) {
  let yourAge = currentYear - birthYear;
  return ["You are either " + (yourAge - 1) + " or " + yourAge + " years old."];
}
console.log(ageCalculater(1992, 2024));
