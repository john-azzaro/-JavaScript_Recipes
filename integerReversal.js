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



// METHOD 1: toString() /////////////////////////////////////////////////////

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



// Trick 1: Math.sign() ////////////////////////////////////////////////////////

// This method uses a function in the math library included with JavaScript called Math.sign().
// With Math.sign() we can pass in a number. If that number is positive, Math.sign() will return 1.  If negative, will return -1.
// So as an example:

Math.sign(4000) // returns 1
Math.sign(-4000)  // returns -1

// so this helper function is useful because it might help solve the issue of maintaining the sign of the actual number.



// Trick 2 & 3: parseInt and toString ////////////////////////////////////////////////////////////

// When using the toString() to turn a number into a string using a string.  
// For example...

const myNumer2 = 400;
// again, using toString by splitting it and joining it back together, we are still working with a string.
// To turn all of this back into a number, you can use the parseInt() function.

///////// parseInt(myNumber2.toString());

// parseInt() takes a string (specifically, myNumber2.toString()) and it returns a number, or at least what it thinks is a number inside the string
// once its turned back into a number, we can add something to it.

//////// parseInt(myNumber2.toString()) + 4000;


///// solution /////////////////////////////////////////////////////////////////////////////////////


// Step 1: inside the function body, the first thing we need to do is have the ability to reverse the number.
// to reverse the number, we can use the same methodology as the reverse string method.
// first, we use toString, which means we are working with a string as opposed to a number.

function reverseInt(n) {
   const reversed = n
    .toString().split('').reverse().join('');
    return parseInt(reversed);
}

console.log(reverseInt(56789));