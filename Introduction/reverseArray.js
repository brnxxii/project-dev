function reverseArray(arr){
    var temp = arr[0];
    for (var i = 0; i < arr.length; i++){
        arr[0] = arr[arr.length - 1]; // arr[0] = 4
        arr[arr.length - 1] = temp; // arr[4] = 1
        return arr;
    }
}
myArray = reverseArray([1,2,3,4,5]); // should log [5,4,3,2,1]
console.log(myArray);