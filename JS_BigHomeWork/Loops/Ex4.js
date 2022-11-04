/*
Write a function called findDup() that returns all the elements that are repeated more than
once in a given array.
Return the result as a Javascript object (the key should be the repeated element, the value
should be the amount of times this element repeated).
If an element appears only once it should not be added to the result object.
*/


function findDup(arr) {
    const result = { }
    for(e of arr){
        if( result[e] == undefined) {
            result[e] = 1
        }
        else{
            result[e] += 1
        }
      }
    for(e in result){
        if(result[e] == 1 ){
            delete result[e]
        }
    }
return result
}

const testArr = [1,5,8,6,8,7,2,4,5,6,3,1,9,10]

console.log(findDup(testArr))