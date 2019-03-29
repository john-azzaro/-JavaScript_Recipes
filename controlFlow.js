"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Control Flow
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is Control Flow?
//     2. 
//
// NOTES ///////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful information about control flow from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        and Answer format for improved readability.
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
What is control flow?
/////////////////////
        - control flow allows your code to take certain actions based on certain scenarios.
        - control flow allows you to dictate how your code runs under different conditions or until a certain condition is met.
        - control flow can be achieved in 2 ways:
                -- conditional (if, else-if, else),
                -- try/catch/finally
*/

/*
What is a switch statement?
///////////////////////////
https://www.kirupa.com/html5/conditional_statements_if_else_switch_javascript.htm
*/


/*
8. What is a ternary operator?
//////////////////////////////
        - A TERNARY OPERATOR is short-cut conditional statement.
        - A ternary operator is the only JavaScript operator that takes three operands. 
        - In the example below, we want to determine whether a person can drink (or not).
        - Also note that although you dont need the parentheses fro the logical expression, it does help in visual identification.

                --    let canIDrink        -- is the keyword and variable name.
                --     (age >= 21)         -- This is the logical expression, specifically IF age is greater or equal to 21...
                --          ?              -- If this condition is true...
                -- 'Yes, you can drink'    -- Return this.
                --          :              -- If the condition is false...
                -- 'No, you cannot drink'  -- The value returned if the condition is false.
*/
                let age = 21;
                let canIDrink = (age >= 21) ? 'Yes, you can drink' : 'No, you cannot drink';    
                console.log(canIDrink);   //-> Yes, you can drink
/* 
        - Additionally, a ternary operator is right-associative, so conditions can be chained together.
        - note that the format can be a single line or multiple lines depending on your format preference.
*/
                let direction = 'right'
                let myDirection = (direction == 'left') ? 'wrong direction' : (direction == 'right') ? 'right!' : 'where are you going?';
                console.log(myDirection);

                //or//

                let myNumber = 4;
                let result = (myNumber == 1) ? "a" 
                        : (myNumber == 2) ? "b" 
                        : (myNumber == 3) ? "c" 
                        : (myNumber == 4) ? "d" 
                        : "e";
                console.log(result);
