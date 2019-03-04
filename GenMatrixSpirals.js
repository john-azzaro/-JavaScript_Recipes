"use strict";
// OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Write a function that accepts an integer N and returns a NxN spiral matrix.
//
//     Example:   matrix(2)
//                  [ [1,2],
//                    [4,3] ]   

//    Example: matrix(3)
//                 [ [1, 2, 3],
//                   [8, 9, 4],
//                   [7, 6, 5] ]

// SUMMARY //////////////////////////////////////////////////////////////////////////////////////////////////
// What is the problem?:  
//    1. When we call the function, we want to return a two dimensional array (an array of arrays).
//       The reason this is called a spiral matrix is becasue we are goign to start at one and then go around clockwise.
//       This had proven to be a VERY difficult problem and requires a LOT of thought.

// What is the BEST solution? 
//     1. 

// What are the special components of these solutions?:  
//     1. 

// What needs work?
//     1. 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Solution breakdown /////////////////
/*
    1. create empty array of arrays called 'results'.
    2. create a counter variable, starting at 1.
    3. As long as (start column <= end column) AND (start row <= end row):
        4. Loop from start column to end column...
            5. At results[start_row][i] assign counter variable... 
            6. Increment counter.
        7. Increment start row.
        8. Loop from start row to end row:
            9. At results[i][end_column] assign coutner variable...
            10. increment counter.
        11. Decrement end row.
        12. repeat for other two sides.


                    start column             end column
        start row        1          2           3
                         8          9           4
        end row          7          6           5


Important for solution:
        * the solution is predicated on the idea of maintaining some counter variables that reflect what starter column we are workig on 
          and what end column we are working on along with the starting row and ending row.

        * The idea is that we are going to have some integer values that keep track of the current index that we are trying to fill inside our matrix.
          - so for example we'l would start off with a star row = 0, which means that when the alogrithm first starts off we want to look at the row 0
            and start attempting to fill values inside of that row.

        * so if you reference th example above, we start at start column=0 and end (in the #4 psudocode step) at column=2.
          at every step of that loop, we attempt to insert some value on the first starting row.

        * after the first loop (step #4(5 > 6)) THEN you increment (add) the start value row. 

*/

function matrix(n) {
    const results = [];                     // create empty array.  Note the number of sub-arrays is dependant on the number n.
   for (let i=0; i < n; i++) {              // now we need to iterate with a for loop from 0 up to n and for each step we are going to push in an empty substrate into results.
        results.push([]);                   // for each step we take the results array and push in an empty array.  at this point with with logged
    }
}

console.log(matrix())
