function getMaximum(r){
    let max = r[0];
    for (let i = 1; i < r.length; i++) {
        if (r[i] > max) {
            max = r[i];
        }
        return max; // returns the maximum value
    }
}
maxValue = getMaximum([1,30,5,7]); /* we are calling the function getMaximum
and passing an array of numbers as an argument */
console.log(maxValue);