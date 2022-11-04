/*
Create a function that receives an integer array. If all the values of the array are odd, then
the function returns “odds”, otherwise “not odds”.
*/

function getArr(arr){
    for(e = 0; e < arr.length; e++){
        if(arr[e] % 2 === 1){
            return 'odds'
        }
      }      
   return 'not odds'

    }

console.log(getArr([3,10,3])); 