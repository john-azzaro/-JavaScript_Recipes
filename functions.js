"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is a Function?
//     2. Function Structure
//     3. 
//

// NOTES ///////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on functions taken from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        and Answer format for improved readability.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
What is a function?
///////////////////
    - A function is one of the fundamental building blocks of JavaScript.
    - A function is a repeatable (i.e. can be called multiple times) and determinate (i.e. predictable) process or behavior.
    - A function performs a task or calculates a value.
    - A function is the primary modular unit of execution in JavaScript (which is a functional language).
    - A function (in JavaScript) are called first-class entities.
    - A function is treaded as a value.   */
    

/* 
What is the structure of a function?
/////////////////////////////////
       - In the example function below we are creating a function that simply adds two numbers together. 
       - Inside the call signature, we have two parameters, num1 and num2.  These are the two numbers that we add together.
       - Inside the block of the function, we have a simple goal... to return the value of num1 plus num2. */

                    function addExample(num1, num2) {
                        return num1 + num2;
                    }
                    console.log(addExample(1,1));

                    /*
                    1. First we DECLARE a function (i.e. function).
                    2. Second, we give the function a NAME (i.e. addExample).
                    3. Third, we add parenthesese (call signature).  In this example we have two PARAMETERS (i.e. num1, num2).
                    4. Fourth, we have curly braces that contain the MAIN BLOCK of our function (i.e. {...}).
                    5. Fifth, we call (or invoke) the function (i.e. console.log with the numbers in the callsignature inserted into num1 and num2).  */


