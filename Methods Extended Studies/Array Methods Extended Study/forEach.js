"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: .forEach()
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//      array.forEach(function(element, index) {
//          return `The item is ${element} and the index in the array is ${index}`;
//      });
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • forEach() calls the provided function once for each element in an array. 
//      • Unlike .map() which returns a new array of the same size, forEach() mutates the original array.
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: Iterate over an array and print only the elements in the array.
//      EXAMPLE 2: Iterate over an array and print a template literal with the index and element of an array.
//      EXAMPLE 3: Iterate over an array and print a template literal with the index and elements of an array 
//                 with additional modifications. 
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


const groceryList = ['apple', 'berry', 'carrot', 'date', 'egg', 'fig'];




// EXAMPLE 1: Iterate over an array and print only the elements in the array:

groceryList.forEach(function(element) {
    console.log(element);
});                                             /*  apple
                                                    berry
                                                    carrot
                                                    date
                                                    egg
                                                    fig   */




// EXAMPLE 2: Iterate over an array and print a template literal with the index and element of an array:

groceryList.forEach(function(element, index) {
    console.log(`The ${index} item is ${element}`);
});                                                        /*   The 0 item is apple
                                                                The 1 item is berry
                                                                The 2 item is carrot
                                                                The 3 item is date
                                                                The 4 item is egg
                                                                The 5 item is fig    */




// EXAMPLE 3: Iterate over an array and print a template literal with the index and elements of an array 
//            with additional modifications:                       

groceryList.forEach(function(element, index) {
    console.log(`The ${index + 1} item is ${element.toUpperCase()}`);
});                                                                             /*  The 1 item is APPLE
                                                                                    The 2 item is BERRY
                                                                                    The 3 item is CARROT
                                                                                    The 4 item is DATE
                                                                                    The 5 item is EGG
                                                                                    The 6 item is FIG   */





