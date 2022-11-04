/*
Write a function that receives two parameters of type int.
If the first parameter is bigger than the second parameter -> the function should
returns the first parameter
else -> the function should return the second parameter
*/

function getNum(num1,num2){
    if(num1> num2){
        return num1
    }
    return num2
}
console.log(getNum(7,11));