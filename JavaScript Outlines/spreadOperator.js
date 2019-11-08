'use strict';
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: spread operator (...)
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//      for function calls:
//          myFunction(...iterableObj);
//
//      for array literals or strings:
//          [...iterableObj, '4', 'five', 6];
//
//      for object literals:
//          let objClone = { ...obj };
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • "..." spread operator is used combine arrays.
//      • "..." spread operator is similar to the concat method.
//      • "..." spread operator "spreads" all of the combined elements of the array individually.
//      • To create a new array using different arrays using the spread operator, eclare a new array THEN
//        inside the new array we are adding the individual elements of the first and second arrays.
//      • The spread operator allows you to have greater flexibility than concat method, for example you could
//        add another element to certain parts of the array besides
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: Combine two arrays
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////



// EXAMPLE 1: Combine two arrays

const myArray1 = [1,2,3,4];
const myArray2 = [5,6,7,8];


function combo(array1, array2) {
    const combinedSpread = [...array1, ...array2];  
    console.log(combinedSpread);
}

combo(myArray1, myArray2);