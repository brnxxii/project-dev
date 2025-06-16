function multiply(a,b) {
    return a * b;
}
function square(n) {
    return multiply(n,n);
}
function cube(x){
    return multiply(x, square(x));
}

console.log(cube(3)); // should log 27