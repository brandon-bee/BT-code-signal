// create a function that takes three parameters, s, a, and b
// s is a string, a and b are indexes
// return the substring between the two indexes, a and b
// if a is less than 0, treat it as 0
// if b is greater than the length of the string, treat it as the length of the string
// if a is greater than b, return an empty string

function substring(s, a, b) {
  if (a < 0) {
    a = 0;
  }
  if (b > s.length) {
    b = s.length;
  }
  if (a > b) {
    return "";
  }
  return s.substring(a, b);
}