"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Application Logic
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What are logical assertions?
//     2. What are the 3 logical assertions?
//     3. What is the difference between strict and loose equality?
//
// NOTES ///////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful information about application logic from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        and Answer format for improved readability.
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
1. What are logical assertions?
//////////////////////////////
    - ASSERTIONS are statements that evaluates to either TRUE or FALSE.
    - LOGICAL ASSERTIONS allow us to write conditional logic in JavaScript
*/

/*
2. What are the 3 Logical Operators?
///////////////////////////////////
    - There are three essential logical operators: &&, ||, and !.
   
            && -- "and" evaluates as true if both values are true.
                    for example: 
                                const foo = true
                                const bar = false
                                const ree = true
                                
                                foo && bar;     // false
                                foo && ree;     // true

            || -- "or" evaluates as true if one of the values evaluates as true.
                    for example:                             
                                const foo = true
                                const bar = false
                                const ree = true

                                foo || bar       // true
                                foo || ree       // false

            !  -- "exclamation" negates a boolean value.
                    for example:
                                const foo = true
            
                                foo;             // true
                                !foo;            // false
*/

/*
3. What is the difference between strict and loose equality?
///////////////////////////////////////////////////////////

*/






/*

 
ABOUT TRUTH TABLES...
 
   A  B       !A        A && B       A || B         A -> B       A === B
------------------------------------------------------------------------
   T  T        F          T            T              T             T
   T  F        F          F            T              F             F
   F  T        T          T            T              T             F
   F  F        T          F            F              T             T
 
*/