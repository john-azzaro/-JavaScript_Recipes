'use strict';
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: .join
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     array.join([seperator])
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • .join() method creates and returns a new string by concatenating all the element in the array.
//      • Optionally, inside the .join() parentheses, you can add a seperator (i.e. -, _, etc.)
//      • By default, the .join() method will return with commas (i.e. apple,berry,carrot).
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: Join the element in the array together
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


const myArray = ['Alan', 'Bob', 'Charlie', 'Donald', 'Ellie', 'Frank', 'Greg', 'Hank'];

function joinArrayElements(array) {
    return array.join();
}
console.log(joinArrayElements(myArray));           // Alan,Bob,Charlie,Donald,Ellie,Frank,Greg,Hank


function joinArrayElementsWithSpace(array) {
    let joinedArray = array.join(" ");
    return joinedArray;
}
console.log(joinArrayElementsWithSpace(myArray));        // Alan Bob Charlie Donald Ellie Frank Greg Hank