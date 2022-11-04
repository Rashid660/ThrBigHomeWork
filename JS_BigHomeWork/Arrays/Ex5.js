/*
Create a function that receives an integer array and int number.
If the value of the second parameter is in the array, the function returns “found” otherwise
“not found”.
*/



arr = [1,2,3,4,5,6,7,9]

function getArr(arr,num){
      for(e of arr){
        if(e == num){
            return 'found'
        }
      }
      return 'not found'
    }

console.log(getArr(arr,23))