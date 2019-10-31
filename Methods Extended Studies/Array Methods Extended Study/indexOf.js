'use strict';
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: .indexOf()
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     array.indexOf(item, start)
//     array.indexOf('bob', 4)    // search for bob starting at position 4 in the array (i.e. skip to 4).
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      •   indexOf() searches the array for an element and returns its first index.
//      •   indexOf() has two parameters, the first is the item to look for (required) and the
//          second is the place where to start looking in the array.
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: Find the first instance of a given element in an array
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//      
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// EXAMPLE 1: Find the first instance of a given element in an array.

const array = ['alan', 'bob', 'charlie', 'bob', 'elliot', 'alan', 'greg', 'hank', 'ian', 'jon', ];

function findFirst(name, array) {
    let find = array.indexOf(name);
    return find;
}

console.log(findFirst('bob', array));       // position 1 (second element in the array since 0 is the first).block



function findFirstAfterStart(name, array, startPosition) {
    let find = array.indexOf(name, startPosition);
    return find;
}

console.log(findFirstAfterStart('alan', array, 2));    // position 5, which is the second instance of alan in the array!
