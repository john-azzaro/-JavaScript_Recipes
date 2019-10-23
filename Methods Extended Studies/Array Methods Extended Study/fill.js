'use strict';
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: .fill()
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//      array.fill(value, start, end)
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • .fill is a function that is used to fill an array with a given static value which can be used ot fill
//        the entire array or a part of the array.
//      • In other words, with fill you can replace whole parts or sections of an array with a given value.
//
//      • .fill takes three arguments: value, start, end
//          •   Value: The value that will replace elements in the array. 
//          •   Start (optional): The starting point in the array that will fill the array.
//          •   End (optional): The endingpoint in the array that will fill the array.
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: Replace all the elements in the array with a given value.
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////



// EXAMPLE 1: Replace all the elements in the array with a given value.

function replaceElements() {
    let array = ["alpha", "beta", "charlie", "delta", "echo", ];
    return array.fill("*****");
}

console.log(replaceElements());
// [ '*****', '*****', '*****', '*****', '*****' ]



// EXAMPLE 2: Replace certain elements in an array with a given value

function replaceElements2() {
    let array = ["apple", "banana", "carrot", "dill", "egg", "fig", "ginger"];
    return array.fill("*****", 1, 3);
}

console.log(replaceElements2());
// [ 'apple', '*****', '*****', 'dill', 'egg', 'fig', 'ginger' ]



