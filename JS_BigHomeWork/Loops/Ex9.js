/*Ex9:
Write a function that receives an array of Boolean type.
As long as the value is true, the loop should continue, if the value is false, then return the
first index of the false value.
*/

function getArr(arr){
    let i = 0
   while(i < arr.length && arr[i] == true){
i++
   } 
   if(i == arr.length){
    return true;
   }
   else{
    return i
   }}

   console.log(getArr([true,true,true,]))