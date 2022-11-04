/*
Create a function that receives an array and 2 numbers of type integer.
If the first value of the array is equal to the first parameter and the last value of the array is
equal to the second parameter then the function returns true, otherwise, the function returns
false.
*/


function getArr(arr, num1 , num2){
    while(true){
        let i = 0 
        if(arr[i] == num1 && arr.pop() == num2){
            return true
        }
        return false
    }
    
}

console.log(getArr([2,3,4,5,6,7], 4 , 7))