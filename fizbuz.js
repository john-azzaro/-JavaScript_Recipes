"use strict";
// OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
//     1. 
// SUMMARY //////////////////////////////////////////////////////////////////////////////////////////////////
// What is the problem?:  
//    1. Write a program that prints out the numbers 1 to n.  
//       For multiples of 3 print "fizz", for muliples of 5 print "buzz", and multiples of 3 and 5 (i.e. 15) print "fizzbuz".

// What is the BEST solution? 
//     1. 

// What are the special components of these solutions?:  
//     1. 

// What needs work?
//     1. 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


function fizzBuzz(countTo) {
    const result = [];
    for (let i=1; i <= countTo; i++) {
        if (i % 15 === 0) {
            result.push("fizzbuzz");
        } 
        else if (i % 5 === 0) {
            result.push("buzz");
        }
        else if (i % 3 === 0) {
            result.push("fizz");
        }
        else {
            result.push(i);
        }
    }
    return result.join(', ');
}

console.log(fizzBuzz(15));
