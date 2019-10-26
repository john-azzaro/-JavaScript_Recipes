'use strict';
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: Array.from
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     let myArr = Array.from("ABCDEFG");
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • Array.from() is an inbuilt function which creates a new array from a given array.
//      • Array.from() will convert every letter in the string into its own array instance.
//      • Array.from() will take every integer value and make its own array.
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: 
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
//      https://www.w3schools.com/jsref/jsref_from.asp
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


const myString = "This is a string";
const myIntegers = [1,872,49,80,724];

function testFrom(input) {
    let myArray = Array.from(input);
    return myArray;
}

console.log(testFrom(myString));           /* [ 'T',
                                                'h',
                                                'i',
                                                's',
                                                ' ',
                                                'i',
                                                's',
                                                ' ',
                                                'a',
                                                ' ',
                                                's',
                                                't',
                                                'r',
                                                'i',
                                                'n',
                                                'g' ]    */

console.log(testFrom(myIntegers));

