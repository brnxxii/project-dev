function replaceElements(arr){
    for (var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            arr[i] = "0";
        }
    }
    return arr;
}
array = replaceElements([1,2,3,4,5]);
console.log(array); // should log [1,"even",3,"even",5]