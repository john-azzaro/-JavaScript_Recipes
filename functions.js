"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is the definition of a function?
//     2. What is a function?
//     3. What is the difference between arguments and parameters
//

// NOTES ///////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on functions taken from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        and Answer format for improved readability.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
1. What is the definition of a function?
///////////////////
    - A function is one of the fundamental building blocks of JavaScript.
    - A function is a repeatable (i.e. can be called multiple times) and determinate (i.e. predictable) process or behavior.
    - A function performs a task or calculates a value.
    - A function is the primary modular unit of execution in JavaScript (which is a functional language).
    - A function (in JavaScript) are called first-class entities.
    - A function is treaded as a value.
    - A function is a series of statements that are grouped into a special package.   
    */
    

/* 
2. What is a function?
//////////////////////////////////////
    
Function Basics:
    Function Keyword  - Functions are "DEFINED" with the function keyword (regardless of how they are used or invoked).
                      - Defining a function is sometimes called "DECLARING" a function.

                NAME  - The "NAME" of the code that can be invoked or called elsewhere in our code.
                      - Sometimesd the name can be "OPTIONAL".
                      - You can use the following to name a function:
                            -- a to z (upper and lower case)
                            -- 0 to 9
                            -- _ (underscore)
                            -- $ (cash sign)
                            -- special characters

           Parameters  - "PARAMETERS" go inside the call signature parentheses (i.e. (...)).
                       - Multiple parameters are seperated by commas (i.e. (num1, num2, num3)).
                       - You can have as many parameters as you want.
                       - Parameters are variables that are local and ONLY available inside the function.

           Main Block  -

*/









//    FUNCTION KEYWORD         NAME        CALL SIGNATURE
//                   \           |         /
                    function myFunction(str) {
                       return str;                     //- MAIN BLOCK of function
                    }
                    console.log(myFunction('Hello'));  //- CALL








 /* 
 3. What is the difference between arguments and parameters?
 ///////////////////////////////////////////////////////
 IMPORTANT INFO ON CALL SIGNATURES AND PARAMETERS/ARGUMENTS:
      When talking about functions, the terms parameters and arguments are often interchangeably used as if it were one and the 
      same thing but there is a very subtle difference.  

           A. Parameters are variables listed as a part of the function definition.
           B. Arguments are values passed to the function when it is invoked.  
      
           Its important to know the difference because JavaScript does not throw an error if the number of arguments passed during a function 
      invocation are different than the number of parameters listed during function definition. This should make it clear that parameters 
      and arguments should be treated as two different entities.
 */                   


/*
4. How do you define a function?
////////////////////////////
*/

        // Function Declaration: 1. Hoisted with contents (hoisting is how the browser parses Javascript, reads through once then executes second pass).
        //                       2. Function declarations are hoisted to the top of the top-level or if you have a function declaration inside 
        //                            a function, to the top of that function. 
        //                       3. With function declarations, you can use them above where they are declared.

                        function addDeclaration(num1, num2) {
                            return num1 + num2;
                        }
                        console.log(addDeclaration(2,2))     // 4


        // Function Expression: 1. Not hoisted with contents, but the reference to it may be hoisted if we assign it as a variable.
        //                      2. Functions defined as arguments to functions are expressions.
        //                      3. IMPORTANT: Because of an issue with hoisting, if you invoke a function expression before the function iteslef, you
        //                                    get an error.

                        let addExpression = function(num1, num2) {
                            return num1 + num2;
                        }
                        console.log(addExpression(3,3));    // 6


        // ES6 Fat Arrow Function:

                        const addFatArrow = (num1, num2) => num1 + num2;
                        console.log(addFatArrow(4,4))       // 8   
   



