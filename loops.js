"use strict";
// OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
//    Study Loops, how they work, what use cases do they have, etc.
// SUMMARY //////////////////////////////////////////////////////////////////////////////////////////////////
// What is the problem?:  
//    Study loops

// What is the BEST solution? 
//     Find the most efficient way to use a loop.

// What are the special components of these solutions?:  
//     1. "for" statment -- loop repeats until a specified condition is true.
//             example: [counts up] 
//                           for (let i=0; i <= countTo; i++) {code looped through}
//             example: [counts down] 
//                           for (let i = countFrom; i >= 0; i-- ) {code looped through}
//     2. "for... of" -- creates a loop through iterable objects like arrays, maps, etc.

// What needs work?
//     1. Add more loop examples (i.e for...in, etc.) from research.
//     2. Add use case scenarios.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////




function countUp() {
    const countTo = 10;
    for (let i=0; i <= countTo; i++) {
        console.log(i);
    }
}
console.log(countUp());


function countDown() {
    const countFrom = 10;
    for (let i = countFrom; i >= 0; i-- ) {
        console.log(i);
    }
}
console.log(countDown());

// for (let{variable of declaration} character{temporary variable that is redeclared EVERY time through the loop} of string{iterable object we want to iterate through})
// so we'll iterate through every character of string one by one and set each character equal to the temporary variable "character".
// we then take that character and add it on to the start of the string reversed 
// then after the entire for loop, we return reversed
function tester(string) {
    let reversed = '';                   // string that will be assembled over time
    for (let character of string) {      
        reversed = character + reversed;
    }
    return reversed;
}
console.log(tester('this is a test'));
