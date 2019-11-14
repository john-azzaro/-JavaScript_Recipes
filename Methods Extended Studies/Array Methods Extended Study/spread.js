"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: ... (spread operator)
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//      myFunction(...iterableObj);
//
//
//
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • the spread operator is used to : expand arrays, combine arrays, and copy arrays and objects.
//      • When you use the spread operator, you are essentially saying you want to take everything in either in
//        an array or to be converted into an array and
//      • When you use the spread operator to expand an array, you take the items in an array and "expand"
//        out of the array. In other words, each item in the array is convereted to a string.
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: Use the spread operator to convert an array into a string
//      EXAMPLE 2: Use spread operator to convert a string into an array
//      EXAMPLE 3: Combine the elements of 2 arrays into a single array.
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//      https://stackabuse.com/spread-operator-in-javascript/
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EXAMPLE 1: Use the spread operator to convert an array into a string

let myArray1 = ["Hello", "there", "friend"];

function spreadIt1(array) {
  console.log(...array);
}

console.log(myArray1); // [ 'Hello', 'there', 'friend' ]
spreadIt1(myArray1); // Hello there friend

// EXAMPLE 2: Use spread operator to convert a string into an array

let myString = "Howdy there partner";

function spreadIt2(array) {
  let convertToArray = [...array];
  console.log(convertToArray);
}

console.log(myString); // Howdy there partner
spreadIt2(myString); //  [ 'H','o','w','d','y',' ','t','h','e','r','e',' ','p','a','r','t','n','e','r' ]

// EXAMPLE 3: Combine the elements of 2 arrays into a single array.

const spread1 = [1, 2, 3, 4];
const spread2 = [5, 6, 7, 8];

const combinedSpread = [...spread1, ...spread2];
console.log(combinedSpread); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log(...combinedSpread); // 1 2 3 4 5 6 7 8
