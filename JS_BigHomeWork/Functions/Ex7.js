/*
Write a function that receives a number between 1 to 12.
Each number represents each month of the year.
The function has to return the number of the days in the month. If the number given
is not between 1 to 12, then the functions -1.
*/

function getNum(x){
    switch(x){
        case 1 :
            return 'Jan -> 31 Days'
            case 2 :
            return 'Feb -> 28 Days'
            case 3 :
            return 'March ->31 Days'
            case 4 :
            return 'April -> 30 Days'
            case 5 :
            return 'May -> 31 Days'
            case 6 :
            return 'June -> 30 Days'
            case 7 :
            return 'Jule -> 31 Days'
            case 8 :
            return 'Aug -> 31 Days'
            case 9 :
            return 'Sep -> 31 Days'
            case 10 :
            return 'Oct -> 30 Days'
            case 11 :
            return 'Nov -> 31 Days'
            case 12 :     
            return 'Dec -> 31 Days'  
    }
}

console.log(getNum(3));