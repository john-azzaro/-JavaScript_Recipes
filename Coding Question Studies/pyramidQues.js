"use strict";
// OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
//     1. write a function that accepts a positive number N.  The function should console lof a pyramid style
//        shape with N levels using the # character.  Make sure the pyramid has spacies on both the left and right sides.
//        Note: This question is closely related to the steps question

//
//        Example 1:
//                   pyramid(1)
//                          '#'

//                   pyramid(2)
//                         " # "
//                         "###"

//                   pyramid(3)
//                         "  #  "
//                         " ### "
//                         "#####"
//                       

// SUMMARY //////////////////////////////////////////////////////////////////////////////////////////////////
// What is the problem?:  
//    1. building a log of pounds that form a pyramid

// What is the BEST solution? 
//     1. just the one solution right now.

// What are the special components of these solutions?:  
//     1. iteration 
//     2. intermediate core logic
//     3. math.floor

// What needs work?
//     1. For some reason the return solution does not show a proper pyramid shape, need to investigate the issue.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
Solving the problem

  1. From 0 to n (iterate through the rows)
  2.    Create  an empty string called "level"
  3.    From 0 to ?? (columns)...
  4.      IF the column should have a #...
  5.         Add a '#' to 'Level'
  6.      ELSE
  7.         Add a space to 'Level'
  8.    Console lod 'stair'


 The general algorithm we used in steps will still be useful here.

 1. First, we iterate through the number of rows we have.  If there are three rows (i.e. n=3), we start off at 0, then 1 and 2.
 2. Second, for each one of those rows we'll create an empty string.
 3. For the columns, you need to decide if that column should be given a # so we create an inner for-loop.
 4. for the logic to come, we take n, double it, then subtract 1.
 5. then find the mid point of the columns (i.e. the midpoint index of [1,2,3,4,5] which would be 3) 
        //  for example:       const columns = [0,1,2,3,4];
        //                     const row = 0;
        //
        //                      Math.floor(5/2)     




*/


function pyramid(n) {
    const midpoint = Math.floor((2 * n - 1) / 2)      // calculate the midpoint of the row (which changes depending on n)
    for (let row = 0; row < n; row++ ) {              // First, we iterate through the number of rows we have. 
        let level = '';                               // for each row that we create (i.e. level)...                                              
        for (let column = 0; column < 2 * n - 1; column++) {          // iterating through list of columns (take care of the correct number of columns but taking n x2 plus 1)...
        //    const midpoint = Math.floor((2 * n - 1) / 2)               // we calculate n at the top of our function 
            if (midpoint - row <= column && midpoint + row >= column)   {      // now we need row elements to left and right of midpoint  
                level += '#';
            } else {
                level += '';
            }
        }
        console.log(level);
    }
}

console.log(pyramid(10));

// however, this solution does not seem to return the desired results.



// SOLUTION 2 (using recursion) //////////////////////////////


// function pyramid2(n, row = 0, level = "") {     // we use n, which row we are currently looking at, and some given level (as an empty string).
//     if (row === n) {                             // first we make sure we set up our base case correctly.  when row is equal to n...
//        return;                                   // we return and stop calling pyramid.
    
//     // if (level.length === 2 * n - 1 ) {           // this next if statement will detect when we are et the end of a level.
//     //     console.log(level);                      
//     // }
// }

// console.log(pyramid2(10));

