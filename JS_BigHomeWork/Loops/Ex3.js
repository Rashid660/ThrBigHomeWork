/*
Write a function that receives an array of integers and returns how many numbers are odd
and how many are even.
Return an object the contain this data
*/

function odd_even(arr){
let odds = 0
let evens = 0
    
 for(let i = 0; i < arr.length; i++){
        
        if(arr[i] % 2 == 0){
          evens += 1
        }
        if(arr[i] % 2 == 1){
            odds += 1
        }
    }
    return (`you have ${odds} odd numbers and ${evens} even numbers`)
}


var arr = [1,2,3,4,5,6,7,8,9,10]
console.log(odd_even(arr))