// write a function that computes the sum of all values between 1 and n, inclusive
function sum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}