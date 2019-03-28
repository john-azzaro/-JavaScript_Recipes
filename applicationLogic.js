"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Application Logic
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What are logical assertions?
//     2. What are operators?
//       3. What is an arithmatic operator?
//       4. What is an assignment operator?
//       5. What is a comparison operator?
//       6. What is a logical operator?
//       7. What is a bitwise operator?
//     8. What are the 3 logical assertions?
//     9. What is the difference between strict and loose equality?
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
2. What are operators?
/////////////////////
     - OPERATORS are used along with variables and constants to create EXPRESSIONS.
     - EXPRESSIONS can implement logic and algorithms.
     - There are 5 operators in JavaScript:
        -- Arithmatic       
        -- Assignment 
        -- Comparison 
        -- Logical 
        -- Bitwise 
*/

/*
3. What is an Arithmatic operator?
//////////////////////////////
        -- Arithmatic operators are used for performing calculations.
        -- Arithmatic operators are just like mathmatical calculations.
        -- There are 6 important arithmatic operators to know:

                Addition         +       -- adds numbers together.
                Subtraction      -       -- subracts numbers.
                Multiplication   *       -- multiplies numbers.
                Division         /       -- divides numbers
                Exponentation    **      -- to the nth power.
                Remainder        %       -- dividing something and there is no decimal point.

        -- The arithmatic operators are demonstrated below:
*/
                let x = 10;
                let y = 5;

                console.log(x + y);       //-> 15    
                console.log(x - y);       //-> 5
                console.log(x * y);       //-> 50
                console.log(x ** y);      //-> 100000
                console.log(x % y === 0); //-> true (i.e. 0)
















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