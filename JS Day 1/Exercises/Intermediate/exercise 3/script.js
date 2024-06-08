const splitLines = (str) => str.split(/\r?\n/);
console.log(
  splitLines(
    "mango\n cherries\n kiwi\n grapes\n pear\n peach\n orange\n lemon\n"
  )
);

let fruits = "mango/ cherries/ kiwi/ grapes/ pear/ peach/ orange/ lemon/";
document.write(fruits.split("/").join("<br>"));
console.log(fruits.split("/").join("\n"));
