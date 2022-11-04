/*
Create a function that receives an array.
If all the values of the array are smaller than 50, the function returns “smaller than 50”.
If all the values of the array are between 51 to 100, the function returns “ between 51 to
100”.
If all the values of the array are between 101 to 200, the function returns “between 101 to
200”.
If all the values of the array are greater than 201, the function returns “greater than 200”.
If none of the conditions above is happening your function should print “No condition is
happening” 
*/

function getArr(arr){
for(let e of arr){
    if(e < 50)
    return 'smaller than 50'
}
return false
}




console.log(getArr([1,55,31]))