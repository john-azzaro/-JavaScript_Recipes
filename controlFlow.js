"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Control Flow and Conditional Statements
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is Control Flow?
//     ?. What is an if...else conditional statement?
//     ?. What is a switch...case conditional statement?
//     ?. What is a ternary operator?
//     ?. what is a try...catch...finally statement?
//
//
// NOTES ///////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful information about control flow and conditional statements from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity. I've put the document in Question
//        and Answer format for improved readability.
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
What is control flow?
/////////////////////
        - control flow allows your code to take certain actions based on certain scenarios.
        - control flow allows you to dictate how your code runs under different conditions or until a certain condition is met.
        - control flow can be achieved in 2 ways:
                -- conditional (if, else-if, else).
                -- try/catch/finally.
*/

/*
What is an if...else conditional statement?
///////////////////////////////////////////
        - A conditional uses a command and executes whatever is in the curly braces if the expression evaluates true.  
        - `if` always comes first in an if...else conditional statement.
        - `else if` is used if there is more than one condition in the if...else condtional statement.
        - `else` comes at the end if none of the previous blocks of code are executed.

        - Below is an example of a if..else conditional statement:

                if (condition) {                     // if the FIRST condition evaluates true...
                     statement;                      //... return this statement.
                } else if (anotherCondition) {       // if the SECOND condition evaluates true...
                     statement;                      //... return this statement.
                } else if (anotherCondition) {       // if the THIRD condition evaluates true...
                     statement;                      //... return this statement.
                } else {                             // if NONE of the conditions above evaluate true...
                     statement;                      //... return this statement.
                }
                
        - In a functional example:
*/       
                function guessPrimaryColor(str) {
                    let color = str;
                    if (color === 'red') {
                        console.log(`correct! One of the primary colors is red!`);
                    } else if (color === 'blue') {
                        console.log(`correct! One of the primary colors is blue!`);
                    } else if (color === 'green') {
                        console.log(`correct! One of the primary colors is green`);
                    } else {
                        console.log(`sorry, that's not a primary color.  Try again!`)
                    }
                }

                guessPrimaryColor("red");      //-> correct! One of the primary colors is red!
                guessPrimaryColor("blue");     //-> correct! One of the primary colors is blue!
                guessPrimaryColor("green");    //-> correct! One of the primary colors is green
                guessPrimaryColor("yellow");   //-> sorry, that's not a primary color.  Try again!

/*   
        - in another example using more complex conditional logic:
*/
                function greeting(num) {
                     let hour = num;                             // we turn our input into a variable...
                     if (hour >= 6 && hour < 12) {               // if the hour is less than or equal to 6 AND less than 12...
                        console.log(`Good morning!`);            // return statement.
                     } else if (hour >= 12 && hour < 18) {
                        console.log(`Good afternoon!`);
                     } else if (hour >= 18 && hour < 24) {
                        console.log(`Good evening!`);
                     } else {
                        console.log(`Go to bed`);
                     }
                }
                greeting(6);
                greeting(16);
                greeting(22);
                greeting(2);


/*
What is a switch...case statement?
//////////////////////////////////
        - A SWITCH statement os a conditional statement that tests whether something is true or false. 
        - a switch statement contains a collection of case blocks.
        - when a switch statement runs, ONLY ONE will get hit and have thier code executed.
        
        - a switch statment works like this:
                - a switch statement starts with the statement itself (i.e. switch ).
                - the statement is followed by parentheses.  HOWEVER, instead of a conditional statement (if..then) we add a VARIABLE.
                - this variable will be compared to each case statement in the code block.
                - inside the body of the switch statement, we have one or more CASE STATEMENTS.
                - each case statement will be compared to the variable at the beginning of the case statement.
                
*/
                function role(str) {
                        let user = str;                               // the input is assigned to the `user` variable that we will use from now on.
                            switch (user) {                           // we start the switch statement with keyword and the variable to compare.
                            case "guest":                             // the first case we compare is `admin` to the value of `user`...
                                console.log(`Guest User`);            // ... if `admin` equals the value of `user` execute this code ONLY...
                                break;                                // ... and if this case was TRUE, then we BREAK out of the switch statement.
                            case "moderator":
                                console.log(`Moderator!`);
                                break;
                            default:
                                console.log(`Unknown User!`);
                        } 
                    }
                    
                    console.log(role("guest"));
                    console.log(role("moderator"));
                    console.log(role("Tom"));



/*
What is iteration (aka loop)?
/////////////////////////////
        - loops allow you to repeat a set of instructions a set number of times OR until a specific condition is true.
        - loops are a generic way for repeating code with control over how many times the code repeats.
        - There are three kinds of loops you can create in JavaScript:

                -- for loops
                -- while loops
                -- do...while loops

        - each of these loops allow you to specify the code we want to repeat and a way to stop the repitition when a condition is met.
*/


/*
What is a for-loop?
///////////////////
        - A for loop repeats an action a number of times
        - A for loop allows you to repeat a set of instructions a set number of times UNTIL the expression you specify returns false.
        - A standard for loop code would look like this:
*/
        const countTo = 10                          //This is the variable that we want to count up to, specifically 10.

        for (let i = 1; i <= countTo; i++) {        // Starting at 1, if `i` is less-than or equal-to the value of countTo (i.e.10), increment by one.
            console.log(i)                          //this block of code executes EACH TIME the through the loop, specifically printing the value of i.
        }

        














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

                // let myNumber = 4;
                // let result = (myNumber == 1) ? "a" 
                //         : (myNumber == 2) ? "b" 
                //         : (myNumber == 3) ? "c" 
                //         : (myNumber == 4) ? "d" 
                //         : "e"; 
                //         console.log(result));
