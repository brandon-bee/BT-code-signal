// write a function that returns a string based on input (n)
// if n is 0, return 'none'
// if n is 1, return 'one'
// if n is 2, return 'two'
// if n is anything else, return 'some'

function string(n) {
    if (n === 0) {
        return 'none';
    }
    if (n === 1) {
        return 'one';
    }
    if (n === 2) {
        return 'two';
    }
    return 'some';

    // Ternary
    
    // return (n === 0) ? 'none' :
    //     (n === 1) ? 'one' :
    //     (n === 2) ? 'two' : 'some';
}