/*
Write a function with switch-case.
The function receives one number, if the number is between 1 to 12, then the function will
return the specific month, otherwise the function will return “please enter another number”.
*/


israel = new Date('December 25, 1995 23:15:30');
month = israel.getMonth()

function getNum(x){
    switch(x <= 12){
        case true :
            return  month
        case false :
            return  'please enter another number'
    }
}

console.log(getNum(12));