'use strict';
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: .includes
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     array.includes(valueToFind[, fromIndex])
//     array.includes("cat", 0)
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • .includes() method determines if an array INCLUDES a certain value.
//      • .includes() had two parameters: the value to find and the position in the array to start at.
//      • .includes() will return a boolean value of either TRUE or FALSE.
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: Find
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


let myArray = ['Alan', 'Bob', 'Charlie', 'Dan', 'Edward', 'Frank', 'Greg', 'Hector', 'Ian', 'John', 'Kelly'];

function findName(array, name) {
    return array.includes(name);
}

console.log(findName(myArray, 'Kelly'));       // true
console.log(findName(myArray, 'Larry'));       // false