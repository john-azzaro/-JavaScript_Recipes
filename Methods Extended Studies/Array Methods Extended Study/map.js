"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: .map()
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//      const myVariable = array.map(function(value) {
//          return value + 1;                 
//      });                                                
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • .map() is used to generate a new a new array of items by applying the same function to each item 
//        in the array. In other words, we can map each item in the array to something else.
//      • .map() creates an array by calling a specific function on each element present in the array.
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: Map an array of numbers using a function containing an argument
//      EXAMPLE 2: Create an unordered list of items from an array:
//
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////



// EXAMPLE 1: Map an array of numbers using a function containing an argument:

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function doMap(array) {
    const mapIt = array.map(function(value) {
        return value * 2;
    });
    console.log(mapIt);
}

console.log(myArray);                             // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
doMap(myArray);                                   // [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]



// EXAMPLE 2: Create an unordered list of items from an array:

const myGroceries = ['apples', 'bread', 'carrots', 'dough'];

function convertArrayToList(array) {
    const createListItem = array.map(function(item) {
        return '<li>' + item + '</li>'
    });
    console.log(createListItem);                                     //[ '<li>apples</li>','<li>bread</li>','<li>carrots</li>','<li>dough</li>' ]
    
    const convertArrayToString = createListItem.join(' ');
    console.log(convertArrayToString);                               // <li>apples</li> <li>bread</li> <li>carrots</li> <li>dough</li>

    const wrapInUlTag = '<ul> ' + convertArrayToString + ' </ul>'   
    console.log(wrapInUlTag);                                        // <ul> <li>apples</li> <li>bread</li> <li>carrots</li> <li>dough</li> </ul>
}

convertArrayToList(myGroceries);