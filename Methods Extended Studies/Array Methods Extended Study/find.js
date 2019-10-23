'use strict';
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: .find()
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     array.find(function(element))
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      •   .find() is used to get the value of the FIRST ELEMENT in an array that satisfies the provided condition.
//      •   .find() checks all elements in the array and the first element that meets the condition will be printed.
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: Find the first instance of owl in an array:
//      EXAMPLE 2: Find a property in an object:
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//      
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////



// EXAMPLE 1: Find the first instance of owl in an array:

function findOwl() {
    const animals = ["dog", "cat", "owl", "aardvark", "owl", "parrot"];
    animals.find(function(animal) {
        if (animal === "owl") {
            console.log(animal);
        }
    });
}
console.log(findOwl());



// EXAMPLE 2: Find a property in an object:

const nameList = [
    { id: 1, name: 'Alan'},
    { id: 2, name: 'Bob'},
    { id: 3, name: 'Charlie'}
];

let found = nameList.find(function(nameList) {
    return nameList.name === 'Bob'
});
console.log(found);
