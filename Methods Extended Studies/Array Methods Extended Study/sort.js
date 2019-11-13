"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: .sort()
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     array.sort([optional-function])
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • .sort() sorts an array from least to greatest by default (i.e. no parameters).
//      • .sort() is similar to .revers only in a different direction.
//      • .sort() will sort based on the first integer in the array item, so 22 will come before 3.
//      • .sort() 
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: Sort an array from least to greatest.
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////



// EXAMPLE 1: Sort an array from least to greatest.

const myArray = [23, 55, 2, 8, 'carrot', 'apple', 'berry', 'watermelon'];

function sortItOut(array) {
    const sortIt = array.sort();
    console.log(sortIt);
}

console.log(myArray);           // [ 23, 55, 2, 8, 'carrot', 'apple', 'berry', 'watermelon' ]
sortItOut(myArray);             // [ 2, 23, 55, 8, 'apple', 'berry', 'carrot', 'watermelon' ]




// EXAMPLE 2: Sort an array from least to greatest using an anonymous function.

const myArray2 = [3, 6, 2, 10, 5, 4, 8, 9];

function sortItOut2(array) {
    const sortIt = array.sort(function(a, b) {
        return a - b;
    });
    console.log(sortIt); 
    }

sortItOut2(myArray2);                  // [ 2, 3, 4, 5, 6, 8, 9, 10 ]
 




// EXAMPLE 3: Sort an array from greatest to least using an anonymous function.

const myArray3 = [3, 6, 2, 10, 5, 4, 8, 9];

function sortItOut3(array) {
    const sortIt = array.sort(function(a, b) {
        return b - a;                                 // simply flip the values
    });
    console.log(sortIt); 
    }

sortItOut3(myArray3);                  // [ 10, 9, 8, 6, 5, 4, 3, 2 ]









// function sortIt2(array) {
//     const sortGreat = array.sort(function(a,b) {
//         return a - b;
//     });
//     console.log(sortGreat);
// }

// sortIt2(myArray2);