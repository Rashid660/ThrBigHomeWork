/*
Write a function that receives a parameter of type int.
The number has to be between 1 to 7 and each number represents each day of the
week.
The function has to return the specific day that represents the number. If the number
is not between 1 to 7, the function has to return the string “Error”.
Ex: if the number is 2, the function returns “Monday”,
if the number is 3, the function returns “Tuesday”....
*/

function getNum(x){
    switch(x){
        case 1 :
            return 'sunday'
        case 2 :
            return 'monday' 
        case 3 :
            return 'tuesday' 
        case 4 :
            return 'wednesday' 
        case 5 :
            return 'thursday' 
        case 6 :
            return 'friday' 
        case 7 :
            return 'saturday'
    }
    return 'error'
}

console.log(getNum(8));