"use strict";
// OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
//    Using the array spread operator (...)
// SUMMARY //////////////////////////////////////////////////////////////////////////////////////////////////
// What is the problem?:  
//    You need to take the items from one array and push them into another array.

// What is the BEST solution? 
//     Use the Array Spread operator when you want to push ALL the items from one array into the other.

// What are the special components of these solutions?:  
//     1. array spread operator (...)

// What needs work?
//     2. convert arguments to array
//     4. destructuring

// Links of interest
// https://davidwalsh.name/spread-operator

//////////////////////////////////////////////////////////////////////////////////////////////////////////////



// COMBINING ARRAYS /////////////////////////////////////////////////

const numbersCA = [1,2,3,4,5];
const multiplierCA = [6,7,8,9];

// WITHOUT ARRAY SPREAD OPERATOR //
// includes the mulitplier as a single array added to numbers
// So bascially when you push multiplierCA into numbersCA, the multiplierCA is simply pushed into the array as a single entity.
console.log(numbersCA.push(multiplierCA));  // 6

// WITH ARRAY SPREAD OPERATOR //
// includes the multiplier numbers with the numbers
// However, when you use the array spread operator, each item in the multiplierCA array is pushed into the numbersCA array.
console.log(numbersCA.push(...multiplierCA)); // 10



// USING MATH FUNCTIONS ////////////////////////////////////////////

let numbersMF = [9, 4, 7, 1];

console.log(Math.min(...numbersMF));   // 1
console.log(Math.max(...numbersMF));   // 9

