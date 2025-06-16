function printSumOfArr(arr){
    // print the sum of the array
    var sum = 0;
    for (let i = 4; i <= 22; i+=2){
        console.log(i);
        // sum = sum + i;
        sum += i;
    }
   console.log(sum);
}

printSumOfArr();