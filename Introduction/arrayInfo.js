function arrayInfo(arr){
    for (var i = 0; i < arr.length; i++){
      return arr;
    }
}
info = arrayInfo([1,2,3]); // should log 1,2,3 
console.log(info);
console.log("The first value is " + info[0]);
console.log("The last value is " + info[info.length - 1]);
console.log("The sum of the first and last value is " + info[0] + info[info.length - 1]);
