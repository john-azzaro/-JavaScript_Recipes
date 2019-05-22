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
//     3. .match -- used to see if some possible thing (in the parentheses) is included in the string.

// What needs work?
//     1. solution 1.2.2 has some difficulty because VSC doesnt seem to recognize regexpressions.  need to find out more about this.

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





// Solution 1.2 - ITERATIVE SOLUTION USING .INCLUDES ////////////////
// function below uses a helper method called .includes() that works with strings and arrays.

                function includeTest() {    
                    const word = 'Hello there';
                    return word.includes("o");     // the method the string had is called includes, and then we pass in some substring and see if it is included.
                }
                        
                console.log(includeTest());;  // true

                // you can also use it on an array.

                function includeTest2() {    
                    const word = ["a", "b", "c"];
                    return word.includes("c");     // the method the string had is called includes, and then we pass in some substring and see if it is included.
                    }
                            
                    console.log(includeTest2());;  // true




function vowels2(str) {
    let count = 0;
    const checkVowels = ["a", "e", "i", "o", "u"];    // also keep in mind that you can also use discrete substrings like "abc" as well.
    for (let char of str.toLowerCase()) {
        if (checkVowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(vowels2("hello there again"));   // 7


///// SOlUTION 1.2.2 ///////////////////////////////////////
// with this solution, which should be a bit cleaner than the one above, we'll use a regular expression and the method .match().
 // this is saying that if this string has any character that is inside the brackets ([]), then let us know.  
 // then we add two options g and i.  g makes sure we dont stop at the first match.  the i (insensitive) or case sensitive, takes care of cases for us.
 // now with the match function, if it finds an array of all the matches that were found, so we return is assign it to a varaible called matches.
 // but now if there is a mathc, it will either be an array (if vowel found) or null.
 // to handle this, we need a ternary expression.
 // in the ternary expression, we look at the matches variable.  if matches is null (false value), if an array (TRUE).
 // so for the first part of the ternary, IF matches is a truthy value, then I want to return matches.length.
 // otherwise if matches is null, then 0 (i.e. : 0).


function vowels3(str) {
    const matches = str.match(/[aeiou]/);  
    return matches ? matches.length : 0;            
}

console.log("solution 1.2.2 using regular expression and .match");
console.log(vowels3("hello there for the third time"));   