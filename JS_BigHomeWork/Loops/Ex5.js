/*
Construct for loops that accomplish the following tasks:
1. Print the numbers 1 - 20, one number per line.
2. Print only the ODD values from 3 - 29, one number per line.
3. Print the EVEN numbers between 1 - 20 in a descending order, one number
per line.
4. Print the numbers 50 down to 20 in descending order, but only if the numbers
are multiples of 3.
*/
                                



/**************First Loop******************/


for(i = 1; i <= 20; i++ ){
    console.log(i)
}


/**************Second Loop******************/

for(i = 3; i <= 29; i){
    console.log(i)
    i += 2
}

/**************Third Loop******************/


for(i = 20; i >= 2; i){
    console.log(i)
    i -= 2
}

/**************Third Loop******************/


for(i = 48; i >= 21; i){
    console.log(i)
    i -= 3
}
