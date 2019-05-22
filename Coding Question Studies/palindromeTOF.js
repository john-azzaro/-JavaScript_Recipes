"use strict";
// OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
//    Find out whether or not a word is a palindrome (i.e. form same word if it is reversed i.e. abba === abba).

// SUMMARY //////////////////////////////////////////////////////////////////////////////////////////////////
// What is the problem?:  
//    Common question: Given a string, return true if the string is a palindrome or false if it is not.

// What is the BEST solution? 
//    The current best solution involves using the reverseInteger (i.e. split, reverse, and join).
//    Then when we return, we compare the string to reversed using the strict equality operator.
//    If string = reversed, then TRUE (this is a palindrome).  If string =/= reversed, then FALSE

// What are the special components of these solutions?:  
//    1. for finding the palindrome, we use the strict equality operator(i.e. ===) in the best solution.
// 
// What needs work?
//    1. resolve error on palindrome3

//////////////////////////////////////////////////////////////////////////////////////////////////////////////





///// palindrome True or false /////////////////////////////////////////


//-- 
//-- Palindromes are strings that form the same word if it is reversed.
//-- Example: abba === true
//            abcd === false


///// Solutions ///////////////////////////////////////////////////////

        function palindrome(string) {
            const reversed = string.split('').reverse().join('');
            return string === reversed;
        }

        // RESOLVE ERROR //////////////////////////////////////
        // function plaindrome3(string) {
        //     return string.split('').every((character, i) => {
        //         return character === string[string.length - i - 1]
        //     });
        // }


///// Solutions with comments /////////////////////////////////////////

        

        function palindrome2(string) {
                // we create a variable that just much the same thing that the reverse string problem does, specfically:
                // string.split('') gives you an array...
                // .reverse() reversed the order of the string...
                // .join('') joins everything back together again.
            const reversed = string.split('').reverse().join('');
                // Now you need a direct comparison between the reverse of the string and the return result.  If the two are equal, great!  if not, then false. 
            return string === reversed;
        }



        // function plaindrome2(string) {
        //     // STEP 1: Turn the string into an array.
        //     // STEP 2: Then we call .every().
        //     // STEP 3: The first argument that we pass to .every() is a function that will be called for every element in the array.
        //     //         We will recieve the first argument to this function which is each character from the array as as an argument 
        //     //         that will call "character".  Then, because we want to compare each element to its mirror on the other side,
        //     //         we need to figure out how to get access to the other side of the array.  So as a second argument to this 
        //     //         function, we are given the index of the element.  so the second argument of the function is the index of the element
        //     //         we are currently iterating over which will record as "i".  The first time the inner function is called, i will be 
        //     //         equal to zero because we are operating on the first element in the array
        //     // STEP 4: Inside the function we can return a comparison between the current element and the mirrored element on the other
        //     //         side of the array.
        //     // STEP 5: So the first time we run the function, we are at index 0.  To get access to the element on the opposite side, we
        //     //         could look at the entire string array and access the element at the length of the array minus 1.
        //     //         So what we need to do is look at the string at string.length minus i (so that we'll make sure we increment for
        //     //         every step through the loop or through every function minus one).  The -1 is to make sure we are taking into 
        //     //         account the fact that length is the overall length.

        //     return string.split('').every((character, i) => {
        //         return character === string[string.length - i - 1]
        //     });
        // }




        // function plaindrome2(string) {
        //         // in this soltion, we're going to use the .every() array helper.
        //         // we'll take our string, turn it into an array and then use the .every() helper on it.
        //         // the .every() function is used to do a boolean check on every element within an array.
        //         // So in this example: 
        //             /* 
        //                 1. we have an array containing values 0, 10, and 14
        //                 [o, 10, 14]
        //                 2. we want to ask the question "if every single value in there was greater than 5"
        //                     the code would look like this:
        //                         array.every((val) => val > 5)
        //                             first, we take the array and we would call the .every() function on it.
        //                             second, we would pass in a function to invoke for every element within the array.
        //                 3. So the first time this function is executed, we pas in the first element as val (i.e. 0).
        //                     In this case, 0 is not greater than 5, so it would return FALSE.
        //                     When the .every() function runs, it checks to see if the return value of .every() function.
        //                     If any function returns false then the overall expression will return false as well.
        //                     But if the inner function (i.e. the > sign) returns true for every element, then the entire function is true.
                        
        //                     SO TO SUM UP: Every is aplty named and its essentially executing a check or some type of comparison for every
        //                     element in the array.

        //                     To check if we are working with a palindrome

                
                
        //             */
            
        //         }

    console.log(palindrome("abba"));     // true
    console.log(palindrome("wakka"));    // false

    console.log(palindrome2("abba"));     // true
    console.log(palindrome2("wakka"));    // false
