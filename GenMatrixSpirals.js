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







*/
