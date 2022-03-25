// create a function that takes an array of points p
// Find and return the minimum possible Euclidean distance between any two points in the array

function minDistance(p) {
  var min = Infinity;
  for (var i = 0; i < p.length; i++) {
    for (var j = i + 1; j < p.length; j++) {
      var distance = Math.sqrt(Math.pow(p[i][0] - p[j][0], 2) + Math.pow(p[i][1] - p[j][1], 2));
      if (distance < min) {
        min = distance;
      }
    }
  }
  return min;
}