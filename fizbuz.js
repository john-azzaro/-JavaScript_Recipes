"use strict";
// OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
//     1. 
// SUMMARY //////////////////////////////////////////////////////////////////////////////////////////////////
// What is the problem?:  
//    1. Write a program that prints out the numbers 1 to n.  
//       For multiples of 3 print "fizz", for muliples of 5 print "buzz", and multiples of 3 and 5 (i.e. 15) print "fizzbuz".

// What is the BEST solution? 
//     1. Currently, its the regular fizzBuzz solution using an array and then pushing the results to the array and then printing the result.

// What are the special components of these solutions?:  
//     1. conditional logic (if, else if, else)
//     2. modulo (i.e. %)
//     3. for loop
//     4. .push() method
//     5. 

// What needs work?
//     1. add additional commentary

//////////////////////////////////////////////////////////////////////////////////////////////////////////////



function fizzBuzz(countTo) {
    const result = [];
    for (let i=1; i <= countTo; i++) {
        if (i % 15 === 0) {
            result.push("fizzbuzz");
        } else if (i % 5 === 0) {
            result.push("buzz");
        } else if (i % 3 === 0) {
            result.push("fizz");
        } else {
            result.push(i);
        }
    }
    return result.join(', ');
}

console.log(fizzBuzz(15));




function fizzBuzz2(number) {
    for (let i=1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 ===0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}
console.log(fizzBuzz2(15));