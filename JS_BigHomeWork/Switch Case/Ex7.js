/*
Write a function with switch-case.
The function receives 3 parameters(2 integer numbers and number between 1 to 4).
number 1 -> addition
number 2 -> subtraction
number 3 -> division
number 4 -> multiplication
For example, if the third parameter is 4, the function returns the first parameter * the second
parameter.
If the third parameter is 2, the function returns the first parameter - the second parameter
*/

function getNum(x,y,z){
    switch(z){
        case 1 :
            return x + y
        case 2 :
            return x - y
        case 3 :
            return x / y
        case 4 :
            return x * y            
    }
}

console.log(getNum(10,7,1));