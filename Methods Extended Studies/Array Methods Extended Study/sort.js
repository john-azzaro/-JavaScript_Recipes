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

myArray2.sort(function(a, b) {
    return a - b;
}); 

console.log(myArray2);







// function sortIt2(array) {
//     const sortGreat = array.sort(function(a,b) {
//         return a - b;
//     });
//     console.log(sortGreat);
// }

// sortIt2(myArray2);