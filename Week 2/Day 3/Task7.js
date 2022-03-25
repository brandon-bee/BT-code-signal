// write a function that scans an array (a) for certain elements (x) and removes them

function remove(a, x) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === x) {
            a.splice(i, 1);
            i--;
        }
    }
    return a;
}