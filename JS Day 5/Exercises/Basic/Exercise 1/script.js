let sportsCar = {
  modelId: 7,
  brand: "SpyMotors",
  model: "Spectre",
  colors: ["Silver", "Black", "White"],
  printOut: function () {
    return `Id-Model: ${this.modelId} Brand: ${this.brand} Model: ${this.model} Colors: ${this.colors} `;
  },
};
sportsCar.modelId = 8;
sportsCar.colors.push("Midnight Blue");

console.table(sportsCar);
console.log(sportsCar);
document.write(sportsCar.printOut());
