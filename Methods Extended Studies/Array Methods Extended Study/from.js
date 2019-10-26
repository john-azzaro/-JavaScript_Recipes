'use strict';
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: Array.from
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     let myArr = Array.from("ABCDEFG");
//     Array.from(object, mapFunction, thisValue)
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • Array.from() is an inbuilt function which creates a new array from a given array.
//      • Array.from() will convert every letter in the string into its own array instance.
//      • Array.from() will take every integer value and make its own array.
//      • Array.from() is a static method introduced in ES6 enabling a new shallow-copied array from
//        an array type objector an iterable object.
//      • With Array.from, you can create an "Array" instance.
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: 
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
//      https://www.w3schools.com/jsref/jsref_from.asp
//      https://medium.com/javascript-everyday/javascript-array-from-53287c195487
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


const myString = "This is a string";


function testFrom(input) {
    let myArray = Array.from(input).toString();
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



                                                

