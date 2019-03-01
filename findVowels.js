"use strict";
// OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Write a function that reutrns the number of vowels used in a string (a,e,i,o,u).
//        Examples:  vowels('Hello there!')   // 4

// SUMMARY //////////////////////////////////////////////////////////////////////////////////////////////////
// What is the problem?:  
//    1. take a string and count the total vowels to output.

// What is the BEST solution? 
//     1. iterative
//     2. regular expression

// What are the special components of these solutions?:  
//     1. 

// What needs work?
//     1. 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// SOLUTION 1 - ITERATIVE APPROACH ////////////// 
// 1. Create a counter variable with a default of zero (to store our count).
// 2. Then we'll iterate through all the characters in the string.
// 3. if the character is a vowel, then increment the counter by 1.
// 4. at the end of the function, return the counter variable.

// function below uses longer but less efficient if statement.
function vowels(str) {
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}

console.log(vowels("hello there"));