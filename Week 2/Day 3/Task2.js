// create a square 2D array of size x size
// then fill it with 0s
// then fill the main diagonal with 1s

function createSquare(size) {
  var square = [];
  for (var i = 0; i < size; i++) {
    square[i] = [];
    for (var j = 0; j < size; j++) {
      square[i][j] = 0;
    }
  }
  for (var i = 0; i < size; i++) {
    square[i][i] = 1;
  }
  return square;
}