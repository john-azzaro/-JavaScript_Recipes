"use strict";
// OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Anything that revolves around counting number of charcters or comparing the number of charcters can be solved with the following solution.

// SUMMARY //////////////////////////////////////////////////////////////////////////////////////////////////
// What is the problem?:  
//    1. Given a string, return the character that is most commonly used in the string.
//            example: maxChar("abcccccccd") === "c"
//            example: macChar("12311111") === "1"
//
//       Common variations of this question:
//            What is the most common character in the string?
//            Does string A have the same characters as string B (is it an anagram)?
//            Does the given string have any repeated characters in it?

// What is the BEST solution? 
//     1. ...

// What are the special components of these solutions?:  
//     1. for...of loop.
//     2. for...in loop.

// What needs work?
//     1. Simplify steps and identify best solution method.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*
///// THINKING ABOUT HOW DO WE TAKE A STRING AND CONVERT IT INTO AN OBJECT:

    FIRST, we are going to take a string and convert it into an object.

                    {
                        H: 1,
                        e: 3,
                        l: 2,
                        o: 1,
    "hello there" -->   "": 1,
                        t: 1,
                        h: 1,
                        r: 1,
                        !: 1
                    }

    Notice some things here:
        -- The keys of the object are the charcters from the string
        -- The values are the number of times that the character has been found

    In the case of "Hello There", we have 1 capital H, 3 lower case e's, etc.
    This type of map makes many different questions very straight forward.

    So in the case of the question "what is the most common character in the string", now that we have the object above, we can walk
    throught the objectand find the property with the highest number assigned to it (which in this case is "e").

    In the case of the question "Does string A have the same characters as string B (is it an anagram)", we could build up an object
    that looks like this for both string A and string B and then compare the two making sure that both objects have the same number of 
    properties inside of it and the same values.

    In the case of the question "Does the given string have any repeated charcters in it?", its easy because if there is any value inside 
    of the object with a value greater than 1, we can see from the key/value pairs that yes there are.

    So setting up an object like that above is a strong tool for problem solving with any type of question around for producing some counts or
    verification of a word.
*/






///// BASIC SOLUTION TO CONVERT STRING TO OBJECT: ////////////////////////////////////////////////////////////////////////////////////


                const string = "Hello There!";
                const chars = {};

                for (let char of string) {
                    if(!chars[char]) {
                        chars[char] = 1;
                    } else {
                        chars[char]++;
                    }
                    }
                chars;

                console.log(">> Basic example");     // { H: 1, e: 3, l: 2, o: 1, ' ': 1, T: 1, h: 1, r: 1, '!': 1 }
                console.log(chars);


///// BASIC SOLUTION STEP-BY-STEP: 

// 1. take a new string:
//
//     const string = "Hello There!";
//
//
// 2. Then we need to iterate through the string and add that character to a new object.
//    To do this, we need to create a new object that we will call chars.
//
//     const chars = {};
//
//
// At this point there are a few ways we can take these charcters and add them to the object.
// First way is to split the string into an array and then use forEach helper to loop over all the characters.
// Second is to use a for...of loop to loop through all of the characters inside there and do the same thing.
//
// Using the for...of method.
// First we'll iterate through the variable "string" and then for every character there we will either ass the character
// as a property and assign it and assign it a value of 1 or if we;ve already seen that character before we will add 1 to it.
//
//
// 3. for every character (char) that we find in the string...
//    note: char[char] will return a reference to that particular character or at least its value.
//      
//         for (let char of string) {
//
//
// 4. "if nothing exists here now,
//           
//            if(!chars[char]) {
//
//        
// 5.  If it is the first time (which this line references), we want to set that value as 1.
//       
//                chars[char] = 1;
//
//
// 6. Otherwise (else),
//            } else {
//
//        
// 7. assume that there is a number already there and increment by 1.
//              chars[char]++;
//          }
//      }
//
//
// 8. Then print chars object.
//      chars;
//
//
// console.log(chars);







///// BASIC COLUTION TO CONVERT THE STRING TO AN OBJECT AND COUNT EACH CHARACTER: /////////////////////////////////////////////

            function maxChar(string) {
                const charMap = {};
                for (let char of string) {
                    if (charMap[char]) {
                        charMap[char]++;
                    } else {
                        charMap[char] = 1;
                    }
                }
                return charMap;
            }

            console.log(">> Converting string to an object")      //   { H: 1, e: 3, l: 2, o: 1, ' ': 1, t: 1, h: 1, r: 1 }
            console.log(maxChar("Hello there"));



/* 
So here we are still using a character map, where we take every character out of the string, add it as a key to the object, and then
the value for each key is the number of times that letter has been found in that string. So there would be 1 "H", 3 lower case "e", etc.

        1. We start out with the function:

                function maxChar(string) {

                }

        2. Then we declare a new variable called charMap (i.e. character map) as an empty object (i.e. {} )
                
                function maxChar(string) {
                    const charMap = {};
                }

        3. Then we iterate over our source string and use that to build out the character map.
            -- For every character of string, we will add a character to character map.
            -- If an entry already exists there, we will add 1 on. So if an entry already exists at 
               this particualr character (i.e. charMap[char]), we increment by 1.
            -- Otherwsie (else), set character map at 1.
            -- Note that this is flipped compared to the example before.

                function maxChar(string) {
                    const charMap = {};
                    for (let char of string) {
                        if (charMap[char]) {
                            charMap[char]++;
                        } else {
                            charMap[char] = 1;
                        }
                    }
                    return charMap;
                }

            console.log(macChar("Hello there"));

*/





////// SOLUTION FOR FINDING THE MAX CHARACTER ///////////////////////////////////////////////////////////////////////////////


            function maxCharMax(string) {
                const charMap = {};
                let max = 0;
                let maxChar = '';

                for (let char of string) {
                    if (charMap[char]) {
                        charMap[char]++;
                    } else {
                        charMap[char] = 1;
                    }
                }
                
                for (let char in charMap) {
                    if (charMap[char] > max) {
                        max = charMap[char];
                        maxChar = char;
                    }
                }
                return `The maxChar is "${maxChar}" with a count of ${max}`;
                
            }

            console.log(">> Finding the Max Character")
            console.log(maxCharMax("Hello there"));




/*
        function maxCharMax(string) {
                // we iterate through the character map
            const charMap = {};
                // if we come across a character that has more uses then max, then we set max equal to that new value.
            let max = 0;
                // then we set maxChar to the character responsible for that number of uses.
                // so what happens is when we iterate through the object and we come acorrss "H", which is 1.
                // 1 is greater then max (which is 0), so that is a new maximum.
                // when we go on to the next value, "e", which has 3, maxChar is updated to "e" rather than "H" which has only 1.
            let maxChar = '';

            for (let char of string) {
                if (charMap[char]) {
                    charMap[char]++;
                } else {
                    charMap[char] = 1;
                }
            }
                // now here we need a new loop to iterate through our character map.
                // note the for...in loop.  
                // for...of loop is used to iterate through an array or a string or any type of iterable object.
                // but in this case, we are iterating through an actual object (i.e. charMap = {}) with a collection of key/value pairs.
                // so to iterate through the object (or any other javascript object) as opposed to an array or a string, we use a slightly different loop


        for (let char in charMap) {
                // if charMap at char (i.e. this particualr character) is greater than max, then...
            if (charMap[char] > max) {
                   // max will become char map at char and max char will become char.
                max = charMap[char];
                maxChar = char;
            }
        }
            return maxChar;  
        }

        console.log(maxCharMax("Hello there"));

            // so when we iterate through a for..in loop, char in i.e. (let char in charMap) at the beginning, char is assigned the keys
            // inside the object.  So not the values, its the keys.


*/























//// scratch

// //// alternate version ///////////////

// for (let char of string) {
//     chars[char] = chars[char] + 1 || 1;