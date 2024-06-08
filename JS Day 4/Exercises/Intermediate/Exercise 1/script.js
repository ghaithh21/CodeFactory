let matrix3x = [];
for (let i = 0; i < 3; i++) {
  matrix3x[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix3x[i][j] = [];
    for (let z = 0; z < 3; z++) {
      matrix3x[i][j][z] = i + j + z;
    }
  }
}

console.log(matrix3x); /* =>
[ [ [ 0, 1, 2 ], [ 1, 2, 3 ], [ 2, 3, 4 ] ],
  [ [ 1, 2, 3 ], [ 2, 3, 4 ], [ 3, 4, 5 ] ],
  [ [ 2, 3, 4 ], [ 3, 4, 5 ], [ 4, 5, 6 ] ] ] */


// To output the content of this matrix, we can use the following code:
for (let i = 0; i < matrix3x.length; i++) {
  for (let j = 0; j < matrix3x[i].length; j++) {
    for (let z = 0; z < matrix3x[i][j].length; z++) {
      console.log(matrix3x[i][j][z]);
    }
  }
}