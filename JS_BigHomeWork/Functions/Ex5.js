/*
Write a function that receives 4 parameters of type int.
If all the four numbers are equal, the function returns the string “all equals”.
If 2 of the four numbers are equals, the function returns the string “only 2 numbers
are equals”.
If none of the two cases happened, the function returns the string “all numbers not
equals”.
*/

function getNum(x,y,z,d){
    if(x == y && y == z && z == d){
        return 'all equal'
    }
    if(x == y || d == z){
        return 'only 2 numbers equal'
    }
    if(y == d || x == z){
        return 'only 2 numbers equal'
    }
    if(y == z || x == d){
        return 'only 2 numbers equal'
    }
    return 'none of the numbers are equal'
}

console.log(getNum(2,12,12,2));