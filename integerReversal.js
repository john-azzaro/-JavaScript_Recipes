"use strict";
// OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
//    Reverse a string of numbers.
// SUMMARY //////////////////////////////////////////////////////////////////////////////////////////////////
// What is the problem?:  
//    Given an integer, return an integer that is the reverse ordering of numbers.

// What is the BEST solution? 
//     Coming from the reverseInteger example, here we need to reverse a NUMBER... not a string.
//     To do this, we need to convert the number to a string (using .toString) and then after we run the classic reverse strategy,
//     need to spit out the integers as a number by using .parseInt().  Otherwise, you need to input the numbers as a string from the start.

// What are the special components of these solutions?:  
//     1. use .toString() to turn an integer into a string (then use the classic .split('')reverse().join('')).
//     2. use Math.sign() to maintain the sign of the number.
//     3. use .parseInt() to take a string and return it to a number.

// What needs work?
//     1. Add Math.sign example.
//     2. Add use case scenarios.
//     3. clean up instructions.
//     

//////////////////////////////////////////////////////////////////////////////////////////////////////////////







// APPLICATION ////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Q: Given an integer, return an integer that is the reverse ordering of numbers.
-- examples
reverseInt(15) === 51
reverseInt(981) === 189
reverseInt(500) === 5
reverseInt(-45) === -54

This problem is similar to the reversing string problem, but with a few extra challenges on top of it.
If you understand the tricks, it turns into a straightforward problem.
The solution is very stright forward but its all about understanding the trick to solve it.

*/

// Looking at the directions...
// we are reversing a data entry, which is an integer.
// so I pass in an interger like 15 and the numbers should reverse... 51.
// You can do the strign reversal methods, but since this is an integer we want to do it this way.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// HOW TO USE: toString() /////////////////////////////////////////////////////
    // We know how to reverse a string... (i.e. return string.split('').reverse().join('')).
    // But numbers are different in this case.
    // We CAN turn a number into a string by using a function called toString().
    // As an example:

const myNumber = 200;
    // if I want to turn the number above into a string, I call... 

myNumber.toString().split('').join('');
    // This returns a string of 200.
    // At this point, I can use familiar functions like split, which turns it into an array of strings (i.e. ) ["2""0""0"], reverse, and join.
    // SO IN SUM: we can use the toString() to turn our number into a string and then work on it as though it was a string.





    
// HOW TO USE: Math.sign() ////////////////////////////////////////////////////////
    // This method uses a function in the math library included with JavaScript called Math.sign().
    // With Math.sign() we can pass in a number. If that number is positive, Math.sign() will return 1.  If negative, will return -1.
    // So as an example:

Math.sign(4000) // returns 1
Math.sign(-4000)  // returns -1

// so this helper function is useful because it might help solve the issue of maintaining the sign of the actual number.


// HOW TO USE: parseInt() and toString() //////////////////////////////////////////////////////////////////////////////////
    // When using the toString() to turn a number into a string using a string.  
    // For example...
    //      const myNumer2 = 400;
    // again, using toString by splitting it and joining it back together, we are still working with a string.
    // To turn all of this back into a number, you can use the parseInt() function.
    //      parseInt(myNumber2.toString());
    //
    // parseInt() takes a string (specifically, myNumber2.toString()) and it returns a number, or at least what it thinks is a number inside the string
    // once its turned back into a number, we can add something to it.

// Example using parseInt and toString

function parIntToString(number) {
    const myNumber3 = 400;
    const result = parseInt(myNumber3.toString()) + number;
    return result;
}
console.log(parIntToString(3000))



///// BEST solution ///////////////////////////////////////////////////////////////////////////////////////////////////////


// STEP-BY-STEP SOLUTION //////////////////////////////////////////////////////////////////////////////////////////////////
// Step 1: inside the function body, the first thing we need to do is have the ability to reverse the number.
// to reverse the number, we can use the same methodology as the reverse string method.
//    first, we use toString, which means we are working with a string as opposed to a number.
//    second, we split the string (as a string)...
//    third, we reverse it...
//    fourth, we put it back together (as a string)...
//    Fifth, we return reversed but using parseInt(), we take that string and RETURN IT BACK TO A NUMBER.

function reverseInt(number) {
   const reversed = number.toString().split('').reverse().join('');
    return parseInt(reversed);
}
console.log(reverseInt(56789));


    // Now looking back at the earlier version from reverseInteger for context, it is practically the same EXCEPT for the fact that
    // we need to input the numbers 000111 as a STRING (i.e. "000111"), not as naked integers (i.e. 56789).  

function reverseInt2(number) {
    const reversed = number.split('').reverse().join('');
     return reversed;
 }
 console.log(reverseInt2("000111"));



