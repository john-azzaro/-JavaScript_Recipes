"use strict";
// OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Write a function that reutrns the number of vowels used in a string (a,e,i,o,u).
//        Examples:  vowels('Hello there!')   // 4

// SUMMARY //////////////////////////////////////////////////////////////////////////////////////////////////
// What is the problem?:  
//    1. take a string and count the total vowels to output.

// What is the BEST solution? 
//     1. iterative (2 versions)
//     2. regular expression

// What are the special components of these solutions?:  
//     1. for...of loop
//     2. .includes() -- 

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

console.log(vowels("hello there"));  // 4





// Solution 1.2 - ITERATIVE SOLUTION USING .INCLUDE ////////////////
// function below uses a helper method called .includes() that works with strings and arrays.

                function includeTest() {    
                const word = 'Hello there';
                return word.includes("o");     // the method the string had is called includes, and then we pass in some substring and see if it is included.
                }
                        
                console.log(includeTest());;  // true

                // you can also use it on an array.

// 


function vowels2(str) {
    let count = 0;
    const checkVowels = "aeiou";
    for (let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(vowels2("hello there again"));   // 7