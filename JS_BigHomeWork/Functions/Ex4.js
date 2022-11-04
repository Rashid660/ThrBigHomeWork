/*
Write a function that receives one parameter of type int.
If the number is even then return the string : “even”, otherwise “not even”.
*/

function getNum(x){
    if(x % 2 === 0 ){
        return 'even'
    }
    return 'not even'
}

console.log(getNum(4));