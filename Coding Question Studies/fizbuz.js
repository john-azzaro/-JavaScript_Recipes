"use strict";
// OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
//     1. create a function with logic that will push "fizz", "buzz", and "fizzbuz" in stead of given numbers.
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

// about the modulo
// although modulo (i.e. %) is rearely used in the javascript world, we use it to determine the remainder of a number during division.
// so if you took 9 % 3, it would return 0.  Thats because if we divide 9 by 3, 3 goes into 9 EXACTLY 3 times and there is no remainder left over.
// but if you divide 10 % 3, 3 still goes into 10 3 times but we have a remainder of 1.
// if we divide 11 % 3, we get a remainder of 2.
// However, if we divide 12 % 3, we get a remainder of 0 because 3 goes into 12 exactly 4 times.
// In the problem below, we also add the strict equality operator (i.e. ===).  
// When we say 12 % 3 === 0, this would evaluate TRUE




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