/*
1 - Create a function that receives an integer array and number as parameters (will be used
    as index of array).
    2 - Print the value of the array by the number value you got.
    For example if the number is 2 you should print the value in the array of index 2.
    3 - In case the number is not in the array index range you should print “Sorry, no value in thearray for index number: {number}”
*/

function integerArr(arr , num){
console.log(arr[num])
while(arr[num] == undefined){
    console.log(`Sorry, no value in thearray for index number: ${num}`)
    break
}
}

integerArr([1,2,3,4,5,6,7],3)
