function largestElement(arr){
    
    let max = arr[0];

    for (let i = 0; i < arr.length; i++){
        // need something to check if if index 0 is greater than index 1
        // if it is not, check the other index
        // if it is, swap values and print the new max
        if (arr[i] > max){
            max = arr[i];        }
        }
        console.log(max);
    }

    largestElement([1,30,5,7]);