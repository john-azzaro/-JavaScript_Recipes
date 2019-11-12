"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: .slice()
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     array.slice()
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • .slice() returns a shallow copy of a portion of an array into a NEW array.
//      • .slice() has two parameters, beginning and end (i.e. .slice(2,4)).
//      • .slice() does NOT modfiy the original array.
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: Slice a new array for the first 2 items.
//      EXAMPLE 2:  Create a new array with the first half of items in array:
//      EXAMPLE 3:  Create a new array with the last half of items in array:
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// EXAMPLE 1: Slice a new array for the first 2 items.

const myArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sliceIt1(array) {
    const slicedArray = array.slice(0, 2);
    console.log(slicedArray);
}

console.log(myArray1);                       // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
sliceIt1(myArray1);                          // [ 1, 2 ]                               
console.log(myArray1);                       // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]





// EXAMPLE 2:  Create a new array with the first half of items in array:

const myArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sliceIt2(array) {
    const halfSlice = array.slice(0, array.length / 2)
    console.log(halfSlice);
}

console.log(myArray2);                     // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
sliceIt2(myArray2);                        // [ 1, 2, 3, 4, 5 ]





// EXAMPLE 3:  Create a new array with the last half of items in array:

const myArray3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sliceIt3(array) {
    const halfSlice = array.slice(array.length / 2, array.length);
    console.log(halfSlice);
}

console.log(myArray3);                     // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
sliceIt3(myArray3);                        // [ 6, 7, 8, 9, 10 ]






