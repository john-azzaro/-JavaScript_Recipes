"use strict";
// OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
//     1. 
// SUMMARY //////////////////////////////////////////////////////////////////////////////////////////////////
// What is the problem?:  
//    1. Check to see if two provided strings are anagrams of each other.
//       One string is an anagram of another if it uses the same chatacters in the same quantity.
//       Only consider characters, not spaces or punctuation.
//       Capital letters are considered the same as lower case.
//
//       examples
//       anagrams('rail safety', 'fairy tales') --> true
//       anagrams('RAIL! SAFETY!', 'fairy tales') --> true
//       anagrams('Hi there', 'Bye there')  --> false

// What is the BEST solution? 
//     1. 

// What are the special components of these solutions?:  
//     1. RegExp (i.e. )
//     2. character maps

// What needs work?
//     1. 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Notes on edge cases: 
//       Only consider characters, not spaces or punctuation.
//       Capital letters are considered the same as lower case.
// 
// RegExp (regular expressions) can be used to manipulate strings and very easily remove all spaces and exclaimation marks from a string.
// 

    const word = "HI THERE!!!!";
    word.replace(/[^\w]/g, "").toLowerCase();



// Another thing is to rememebr how we generally solve any question that involves strings and comparisons between them
// is to generate character maps.  Character maps looks something like this:

//                             {                                
//                               H: 1,             
//                               e: 3,
//                               l: 2,
//                               o: 1,
//          "hello there" -->   "": 1,
//                               t: 1,
//                               h: 1,
//                               r: 1,
//                               !: 1
//                              }

//  One possible way to solve this question is to generate a character map out of both the strings you are given.
// so if you are given the strings "hello" and "lleho", you would get the same character map.
// so you could iterate over one fo the character maps and compare all the letters inside of it and then with all the ones in the 
// other one.

// one gotcha though when using character maps like this.
// when you want to compare the two character maps of "hello" and "lleho", you might think first iterate through the object with 
// the letters and then compare all the properties and values of "lleho"

// If you had "hellos" (with an added s) and "lleho" (no s), and you loop through the "hellos" object, the loop would gop through 
// letter, BUT when it came to the s in "hellos", it would essentially be missed.  The basic solution would be to count the characters
// or the keys in the object.




