/*
 Write a function that receives 2 parameters of type int.
If the first parameter is equal to the second parameter -> the function should add 1 to
the first parameter and return it.
*/


function getNum(x , y){
    if(x === y){
        x++
        return x
    }
}

console.log(getNum(3,3));