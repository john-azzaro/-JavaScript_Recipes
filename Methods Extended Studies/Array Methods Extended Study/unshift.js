'use strict';
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: .unshift
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     array.unshift(addElement1, addElement2, ...)
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • .unshift() adds one or more elements to the beginning of an array and returns NEW ARRAY WITH ADDED 
//        ELEMENTS at the beginning of the array.
//      • .unshift() takes as parameters as many elements to be added to the BEGINNING of an array.
//      • .unshift() will add those parameters from position 0, 1, 2, etc.
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: Add elements to the beginning of an array.
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// EXAMPLE 1: Add elements to the beginning of an array.


let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(myArray);                                      // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

function addElements(array) {
    const newArray = array.unshift(-2, -1, 0);
    console.log(newArray);
}

addElements(myArray);                                      //  13   (returns 13 because we added 3 elements)

console.log(myArray);                                      // [ -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]