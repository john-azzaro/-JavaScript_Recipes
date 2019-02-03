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
//     1. .slice() - also note the difference between word.slice('') and word.slice(' ') i.e. the space between the quotatation.
//                   to put a space between the qutation will seperate the WORD while no space will seperate all the letters.

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
           



///// FIRST SOLUTION ///////////////////////////////////////
/*
    1. make an empty array of words.
            first we start with an empty array called words which will store the end result of the capitalized word 
            we are looking for.
    2. split the input string by spaces to get an array.
            when we loop through our string so we need to split it by spaces.
            the way we can do this is with:
                string.split(" ") // note the space between the quotation marks.
                so in the example below:
*/
            function splitSentenceUp(string) {
               const sentence = string;
               return sentence.split("");
            }
            console.log(splitSentenceUp("Hi there fellas!"));   

            function splitSentenceUpByWords(string) {
                const sentence = string;
                return sentence.split(" ");
            }
            console.log(splitSentenceUpByWords("Hi there again fellas!"));

/*                
    3. for each word in the array:
        3A. upper case the first letter in the word.
        3B. join the first letter with the rest of the word
        3C. Push result into 'words'
    4. Join 'words' into a string and return it.



*/

        function capitalization(string) {
            const words = [];
        
        }