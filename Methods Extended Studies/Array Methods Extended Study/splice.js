"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: .splice()
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     array.splice(startSplice, deleteCount, itemsToAdd1, ... );
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • .splice() changes the content of an array by removing or replacing elements and/or adding new elements
//        in its place.
//
//
//                    Start       item (to insert at index of 2)
//                        \         |
//            array.splice(2, 0, 'kiwi', 'orange');
//                             \               \
//                          deleteCount       item2 (element to insert at index of 3)
//
//      • Start - This is the index at which you start changing the array.
//      • deleteCount - This is the number of elements in the array to remove from Start index number.
//      • item - This is the item you want to insert at the start at.
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: Splice existing array at start of 0, deleteCount of 0, and element to insert is apple.
//      EXAMPLE 2: Splice existing array at start of 0, deleteCount of 1, and element to insert is apple.
//      EXAMPLE 3: Splice more than one item into an array.
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////



// EXAMPLE 1: Splice existing array at start of 0, deleteCount of 0, and element to insert is apple.

const myArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function spliceIt1(array) {
    const spliced = array.splice(0, 0, 'apple');       // at index of 0 (i.e. 1), 
    console.log(spliced);                               
}

console.log(myArray1);               // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
spliceIt1(myArray1);                 // [ 1 ]
console.log(myArray1);               // [ 'apple', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

                                     // NOTE: since the start and delete count is 0, apple is simply spliced
                                     // at the beginning of the array since we dont have splice info.

                                     



// EXAMPLE 2: Splice existing array at start of 0, deleteCount of 2, and element to insert is apple.

const myArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function spliceIt2(array) {
    const spliced = array.splice(0, 2, 'apple');     // starts at 0, deleteCounts to index of 2 (i.e. 1-3) and replaces with apple. 
    console.log(spliced);
}

console.log(myArray2);               // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
spliceIt2(myArray2);                 // [ 1, 2 ]
console.log(myArray2);               // [ 'apple', 3, 4, 5, 6, 7, 8, 9, 10 ]




// EXAMPLE 3: Splice more than one item into an array.

const myArray3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function spliceIt3(array) {
    const spliced = array.splice(2, 0, 'apple', 'berry', 'carrot');      // start at index of 2, dont remove any elements, insert strings
    console.log(spliced);
}

console.log(myArray3);               // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
spliceIt3(myArray3);                 // [ 3, 4, 5 ]
console.log(myArray3);               // [ 1, 2, 'apple', 'berry', 'carrot', 3, 4, 5, 6, 7, 8, 9, 10 ]