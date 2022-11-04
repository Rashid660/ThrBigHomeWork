/*
Write a function with switch-case.
The function receives a number and return string saying if the number given is negative or
positive
*/

function getNum(x){
    switch(x > 0){
        case true :
            return 'positive'
        case false :
            return 'negative'    
    }
}

console.log(getNum(1));