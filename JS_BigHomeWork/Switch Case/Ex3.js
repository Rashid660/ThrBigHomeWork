/*
Write a function with switch-case.
The function receives one number, if the number is between 1 to 17, then the function will
return the specific day, otherwise the function will return “please enter another number”.
*/

function getNum(x){
    switch(x <= 7){
        case true :
            return new Date();
        case false :
            return  'please enter another number'   
    }
}

console.log(getNum(5));