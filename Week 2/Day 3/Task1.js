// create a 2D array of size row_count x col_count
// then fill it with 0s

function createSquare(row_count, col_count) {
  var square = [];
  for (var i = 0; i < row_count; i++) {
    square[i] = [];
    for (var j = 0; j < col_count; j++) {
      square[i][j] = 0;
    }
  }
  return square;
}