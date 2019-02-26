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
//    1. 

// What is the BEST solution? 
//     1. 

// What are the special components of these solutions?:  
//     1. 

// What needs work?
//     1. 

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
 4. ...

*/



