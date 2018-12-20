"use strict";
// WHAT IS THIS DOCUMENT? /////////////////////////////////////////////////////////////////////////////////////////////////
// Summary: 
// Purpose: 
// Objective:

// WHAT DOES THIS DOCUMENT DO? ////////////////////////////////////////////////////////////////////////////////////////////
// What is the problem?:  
// Why hasn't the problem been solved?: 
// What is possible?: 
// What is different?: 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





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
