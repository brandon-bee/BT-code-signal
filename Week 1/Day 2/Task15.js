// write a function that returns the largest of six numbers

function largest(a, b, c, d, e, f) {
    if (a > b && a > c && a > d && a > e && a > f) {
        return a;
    }
    if (b > a && b > c && b > d && b > e && b > f) {
        return b;
    }
    if (c > a && c > b && c > d && c > e && c > f) {
        return c;
    }
    if (d > a && d > b && d > c && d > e && d > f) {
        return d;
    }
    if (e > a && e > b && e > c && e > d && e > f) {
        return e;
    }
    if (f > a && f > b && f > c && f > d && f > e) {
        return f;
    }
}

// Turning into array, sorting in reverse, then grabbing first element

// function solution(a, b, c, d, e, f) {
//     let array = [a, b, c, d, e, f];
//     array.sort(function(a, b){return b-a});
//     return array[0];
// }