function printUpTo(x){
    for(var i = 0; i <= x; i++){
        console.log(i);
    }
    if(x < 0){
        return false;
    }
  }
  printUpTo(1000); // should print all the integers from 1 to 1000
  y = printUpTo(-10); // should return false
  console.log(y); // should print false