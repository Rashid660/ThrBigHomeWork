/*
Create a function that receives an integer array. for each element in the array check If the
value of the index is smaller than 10 → add 5 to that value.
Print the array.
*/

function getArr(arr){
    for(i=0; i<arr.length; i++){
     if(arr[i] < 10){
           arr[i] += 5 
     }
        }  
        console.log(arr)
    } 
  

getArr([6,8,10,12,3])