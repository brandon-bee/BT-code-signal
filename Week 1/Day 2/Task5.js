// write a function that computer the absolute value of a number

function absoluteValue(number) {
    return Math.abs(number);
}

// without built in function

function solution(x) {
    if (x < 0) {
        return x *= -1;
    }
    return x;
}