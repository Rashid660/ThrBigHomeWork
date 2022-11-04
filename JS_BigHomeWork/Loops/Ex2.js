/*
=> Write a function `deleteElement()` that deletes all the occurrences of the given element from
the given array. for example: var arr = [23,56,4,78,5,63,45,210,56] and number 4
if the given number appears in the array your function should delete
*/

function deleteElement(arr , e){
    for(i = 0; i < arr.length; i++){
        while(arr[i] === e){
            arr.splice(i, 1)
        }
    }
    console.log(arr)
}


deleteElement([1,2,3,4,5,6,5,5,8,5], 5)
