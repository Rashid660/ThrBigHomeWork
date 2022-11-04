/*
Write a function with switch-case.
The function receives a letter and has to check if the letter is a vowel or a consonant.
The vowel letters are : a,e,i,o,u,y and the rest of the letters a consonant.
*/

vowels = ['a','e','i','o','u','y']

function getLet(x){
    switch(vowels.includes(x)){
        case true :
            return 'vowel letter'    
    }
    return 'consonant letter'
}

console.log(getLet('y'));