/*
Write a function with switch-case.
The function receives a number and return string saying if the number given is even or odd.
*/

function getNum(x){

  switch(x % 2 === 1){
    case true :
        return 'odd'
    case false :
        return 'even'   
  }
     }

console.log(getNum(6));