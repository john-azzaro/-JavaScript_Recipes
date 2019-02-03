'use strict';
// template for recipes

// OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
//     1. 
// SUMMARY //////////////////////////////////////////////////////////////////////////////////////////////////
// What is the problem?:  
//    1. Write a funciton that accepts a string.  The function should capitalize the first letter in each word
//       in the string and return the capitalized string.
//
//       example: capitalize('a short sentence')  =>  A Short Sentence
//                capitalize('a lazy fox')        =>  A Lazy Fox

// What is the BEST solution? 
//     1. 

// What are the special components of these solutions?:  
//     1. .slice()

// What needs work?
//     1. 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
There are two potential solutions to this problem.
    * the first solution is concise, short, and is easy to read BUT you need to know a bit more of the JavaScript library 
      for working with strings.
    * the second solution is easy to reason, but it needs  for loop and its hard to tell what its doing in the code.



SPECIAL METHODS IN THE JAVASCRIPT LIBRARY WE CAN POTENTIALLY USE:

1. .slice() - extracts a section of the string and returns it as a new string.
            - it can be used on a string.
            - it can take anumber of elements out of a string.

            The way we use a string is using the arguments in that method to isolate sections of the string.
            So in string.slice(begin, end).
*/
//         In the example:
           
            function sliceItUp(word) {
               const remainder = word.slice(1);
               const upper = word[0].toUpperCase();
               return upper + remainder;
            }
            
            console.log(sliceItUp("take"));   
           
         