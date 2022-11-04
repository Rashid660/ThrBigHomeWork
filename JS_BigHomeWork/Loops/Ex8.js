function getElements(arr, num){
    let sum = 0 
    for( e of arr){ 
        sum += e 
    }
  if(sum < num){
    sum += Math.floor(Math.random() * 10 ) 
    }
  if (sum > num){
    console.log(sum) 
    }
    else{
        console.log(`${num} is bigger`)
    }}

getElements([1,2,3,4,5,],18)