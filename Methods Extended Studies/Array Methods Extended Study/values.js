'use strict';
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: Object.values()
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//      Object.values(obj)
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • Object.values() is used to return enumerable property values of a simple array.
//      • Object.values() will take an array and find the values in the array (i.e. apple, berry, carrot);
//      • Object.values() will take a string in split it into seperate elements (i.e. puppy => p,u,p,p,y)
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: Find the values in an array.
//      EXAMPLE 2: Find the values in a string.
//      EXAMPLE 3: Find the values in an Object.
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// EXAMPLE 1: Find the values in an array.

let array = ['alan', 'bob', 'charlie', 'dan', 'ellie', 'frank', 'greg', 'hank', 'ian'];

function findValues(arrayInput) {
    const values = Object.values(arrayInput);
    console.log(values);
}

console.log(findValues(array));            /*[ 'alan',
                                                'bob',
                                                'charlie',
                                                'dan',
                                                'ellie',
                                                'frank',
                                                'greg',
                                                'hank',
                                                'ian' ]  */



// EXAMPLE 2: Find the values in a string.

let theString = "puppy";

function findValuesInString(stringInput) {
    const values = Object.values(stringInput);
    console.log(values);
}

console.log(findValuesInString(theString));         // [ 'p', 'u', 'p', 'p', 'y' ]



// EXAMPLE 3: Find the values in an Object.

let myBook = {
    author: 'joe smith',
    title: 'How to smith well',
    pages: 456
}

function findValuesInObject(objectInput) {
    const values = Object.values(objectInput);
    console.log(values);
}

console.log(findValuesInObject(myBook));           // [ 'joe smith', 'How to smith well', 456 ]