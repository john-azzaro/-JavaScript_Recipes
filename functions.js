"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is a Function?
//     2. Function Structure
//     3. What is the difference between arguments and parameters
//

// NOTES ///////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on functions taken from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        and Answer format for improved readability.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
1. What is a function?
///////////////////
    - A function is one of the fundamental building blocks of JavaScript.
    - A function is a repeatable (i.e. can be called multiple times) and determinate (i.e. predictable) process or behavior.
    - A function performs a task or calculates a value.
    - A function is the primary modular unit of execution in JavaScript (which is a functional language).
    - A function (in JavaScript) are called first-class entities.
    - A function is treaded as a value.   */
    

/* 
2. What is the structure of a function?
//////////////////////////////////////
*/
                    function myFunction(str) {
                       return str;
                    }
                    console.log(myFunction('Hello'));

                    /*
                    1. DECLARE FUNCTION (i.e. function).
                    2. NAME the function (i.e. addExample).
                    3. CALL SIGNATURE (i.e. num1, num2).  
                    4. MAIN BLOCK of function (i.e. curly braces {...} ).
                    5. INVOKE (i.e. console.log with the numbers in the callsignature inserted into num1 and num2).  
                    */


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
   



