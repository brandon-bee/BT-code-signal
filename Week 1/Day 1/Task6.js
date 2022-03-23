// write a function that computes the sum of all values between n and m (inclusive)
function sum(n, m) {
    var sum = 0;
    for (var i = n; i <= m; i++) {
        sum += i;
    }
    return sum;
}

// const a = m * (m + 1) / 2;
// const b = (n - 1) * (n) / 2;
// return a - b;

// return (m - n + 1) * (m + n) / 2;