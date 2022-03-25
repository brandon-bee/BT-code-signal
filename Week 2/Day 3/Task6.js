// write a function that builds an n x n multiplication table
// the result should be a 2D array
// the 0th row and column of the table begin with 1 and end with n

function createMultiplicationTable(n) {
  var table = [];
  for (var i = 0; i < n; i++) {
    table[i] = [];
    for (var j = 0; j < n; j++) {
      table[i][j] = (i + 1) * (j + 1);
    }
  }
  return table;
}