/*
Write a function that receives four parameters of type int.
The function has to return the smaller value between all of them.
If one of the parameters is between 1 to 5, then return -1.
*/

function getNum(x,y,z,d){
if(x > y && x > z && x > d){
    return x
    } 
if(y > x && y > z && y > d){
    return y
    }
    if(d > x && d > z && d > y){
        return d
    }
    if(z > x && z > y && z > d){
        return z
    }
if(x < 5 && x > 1){
return -1   
}

if(y < 5 && y > 1){
return -1   
}


if(z < 5 && z > 1){
return -1  
}



if(d < 5 && d > 1){
return -1    
}


}

console.log(getNum(1,22,3,4));