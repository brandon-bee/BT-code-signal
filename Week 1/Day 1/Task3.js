// Write a function that performs a sequence of mathematical operations by reassigning the results into the same variable
// first add 7 to the number, then divide by 2, then multiply by 5
function solution(n) {
  n = n + 7;
  n = n / 2;
  n = n * 5;
  return n;
}