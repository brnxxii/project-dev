function removeDuplicates(arr){
    for (var i = 0; i < arr.length; i++){
        if(arr[i] == arr[i + 1]){
            arr.splice(i, 1);
        }
        else{
            
        }
    }
    return arr;
}
dups = removeDuplicates([20,20,10,15,10]); // should log [20,10,15]
console.log(dups);