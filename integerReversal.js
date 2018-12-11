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

// METHOD 1:
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

