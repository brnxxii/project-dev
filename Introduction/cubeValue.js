function cubeValue(x){
    for(var i = 0; i < x.length; i++){
        x[i] = x[i] * x[i] * x[i];
    }
    return x;
 }
 c = cubeValue([2,4,3]);
 console.log(c); // should log [8,64,27]