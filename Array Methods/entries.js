'use strict';
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: .entries()
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     array.entries()
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • .entries() method returns an array iterator object with key/value pairs.
//      • .entries() is an inbuilt function used to get a new array that contains key/value paris for each
//         index of an array.
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: Create an entries iterator object using Object.entries
//      EXAMPLE 2: entires iterator using for-loop
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//      https://www.w3schools.com/jsref/jsref_entries.asp  -- entries w3school
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EXAMPLE 1: Create an entries iterator object using Object.entries

const array = ['alpha', 'beta', 'charlie', 'delta', 'echo', 'frank', 'gold'];

function createEntriesIterator() {
    const myArray = Object.entries(array);
    return myArray;
}

console.log(createEntriesIterator());



// EXAMPLE 2: entires iterator using for-loop

const array2 = ["apple", "banana", "carrot", "dates", "eggs"];

function createAnotherEntryIterator() {
    let iterator = array2.entries();
    for (let i of iterator) { 
    console.log(i); 
    } 
}
console.log(createAnotherEntryIterator());


