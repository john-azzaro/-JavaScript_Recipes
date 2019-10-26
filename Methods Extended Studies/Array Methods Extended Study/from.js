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
//      • With Array.from, you can create an "Array" instance. An array-like object is a JavaScript object 
//        which has a length property, whereas an iterable object is the one that implements @@iterator method 
//        (Array, String, Map, Set).
//      • Array.from() can also be used as an alternative to the string split method.
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


// EXAMPLE 1: Convert a string to an array.

const myString = "This is a string";

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



 
/* EXAMPLE 2: 
    • Because the object features a "length" property, using the Array.from method
      you can create an array instance in which elements will be created based on that
      length property.
    • So below, you'll see an object with 5 properties (note that length is not included in this)
    • Since only the first four are indexed, the fifth (collection) will return undefined.
*/   


const book = {
    0: 'first book',
    1: 'second book',
    2: 'third book',
    3: 'fourth book',
    collection: 'ClassicCollections',
    length: 5
  };
  

  function bookReport() {
      const booksAsArray = Array.from(book);
      return booksAsArray;
  }


console.log(bookReport());              /* [ 'first book',
                                            'second book',
                                            'third book',
                                            'fourth book',
                                            undefined ]   */

  
  
  



