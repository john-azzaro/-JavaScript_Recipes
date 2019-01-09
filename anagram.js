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

word;



