let randomTemperature = Math.floor(Math.random() * 25) - 5;
console.log(randomTemperature);
if (randomTemperature > 10) {
  console.log("The weather is moderate.");
} else if (randomTemperature <= 10 && randomTemperature >= -5) {
  console.log("The weather is cold.");
}