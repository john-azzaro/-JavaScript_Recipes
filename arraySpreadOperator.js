"use strict";
// OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
//    Using the array spread operator
// SUMMARY //////////////////////////////////////////////////////////////////////////////////////////////////
// What is the problem?:  
//    

// What is the BEST solution? 
//     

// What are the special components of these solutions?:  
//     1. combining arrays

// What needs work?
//     1. copying arrays
//     2. convert arguments to array
//     3. using math functions
//     4. destructuring

//////////////////////////////////////////////////////////////////////////////////////////////////////////////



// COMBINING ARRAYS /////////////////////////////////////////////////

const numbersCA = [1,2,3,4,5];
const multiplierCA = [6,7,8,9];

// WITHOUT ARRAY SPREAD OPERATOR //
// includes the mulitplier as a single array added to numbers
// So bascially when you push multiplierCA into numbersCA, the multiplierCA is simply pushed into the array as a single entity.
console.log(numbersCA.push(multiplierCA));

// WITH ARRAY SPREAD OPERATOR //
// includes the multiplier numbers with the numbers
// However, when you use the array spread operator, each item in the multiplierCA array is pushed into the numbersCA array.
console.log(numbersCA.push(...multiplierCA));



// USING MATH FUNCTIONS ////////////////////////////////////////////

let numbersMF = [9, 4, 7, 1];

// WITH


console.log(Math.min(...numbersMF));
console.log(Math.max(...numbersMF));

