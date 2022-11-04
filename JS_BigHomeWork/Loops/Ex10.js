/*
write a function that receives an array of strings.
If the string “Hello” appears and the index is odd then stop the loop and return the index
*/

function helloFunction(arr){
    let myStr = 'hello'
    for(let e in arr){
        if(arr[e] === myStr && e % 2 == 1){
            return e
        }
    }
    return false
    }


    console.log(helloFunction(['hi','hey','ah','hello']));