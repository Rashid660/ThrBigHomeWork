/*
Initialize two variables to hold the string 'LaunchCode' and the array [1, 5, 'LC101',
'blue', 42], then construct for loops to accomplish the following tasks:
1. Print each element of the array to a new line.
2. Print each character of the 'LaunchCode' string in reverse order
Each letter should start a new line
*/



let str = 'LaunchCode'
let arr =  [1, 5, 'LC101', 'blue', 42]

/*******************First Loop*********************/

for(e in arr){
   console.log(arr[e])
}

/*******************Second Loop (Extra Exercise For Myself)***********************/

for(i = arr.length;  i = arr.length; i-- ){
 e = arr.pop()
  console.log(e)
}

/*******************Third Loop*********************/

for(i = str.length; i >= 0; i--){
   e = str.slice(i -1 , i)
    console.log(e)
}
