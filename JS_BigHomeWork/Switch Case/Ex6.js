/*
Write a function with switch-case.
The function receives a number between 0 to 100.
If the number is between 0 to 20, the function returns : “D”.
If the function is between 21 to 55, the function returns : “C ”.
If the function is between 56 to 70, the function returns : “B ”.
If the function is between 71 to 90, the function returns : “A ”.
If the function is between 90 to 100, the function returns : “A+ ”
*/

function getNum(x){
    switch(x > 0 && x < 20){
        case true :
            return 'd'   
    }
    switch(x > 20 && x < 55){
        case true :
            return 'c'
    }
}

// and keep going ...
