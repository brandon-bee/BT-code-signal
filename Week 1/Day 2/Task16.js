// write a function that will run a set of tests on three numbers
// if the test passes, the function will return 'OK'
// if the test fails, the function will return 'NOK'
// the test passes if a is greater than b AND b is less than or equal to c AND one or more of the following is true: a * 3 is greater than c OR c is less than or equal to a

function larger(a, b, c) {
    if (a > b && b <= c && (a * 3 > c || c < a)) {
        return 'OK';
    }
    return 'NOK';

    // Ternary

    // return (a > b && b <= c && (a * 3 > c || c <= a)) ? 'OK' : 'NOK';
}