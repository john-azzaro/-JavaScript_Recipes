"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is a function?
//     2. What are the components of a function?
//     3. What is the difference between arguments and parameters
//

// NOTES ///////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on functions taken from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        and Answer format for improved readability.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
1. What is a function?
///////////////////////////////////////
    - A function is one of the fundamental building blocks of JavaScript.
    - A function is a repeatable (i.e. can be called multiple times) and determinate (i.e. predictable) process or behavior.
    - A function performs a task or calculates a value.
    - A function is the primary modular unit of execution in JavaScript (which is a functional language).
    - A function (in JavaScript) are called first-class entities.
    - A function is treaded as a value.
    - A function is a series of statements that are grouped into a special package.   
    */
    

/* 
2. What are the components of a function?
////////////////////////////////////////
 */

            //    FUNCTION KEYWORD         NAME        CALL SIGNATURE
            //                   \           |         /
                                function myFunction(str) {
                                return str;                     //- MAIN BLOCK of function
                                }
                                console.log(myFunction("Hello!"));  //- CALL
/*
Example     
 
function    > Keyword    - Functions are `DEFINED` with the function keyword (regardless of how they are used or invoked).
                         - Defining a function is sometimes called "DECLARING" a function.

myFunction     > NAME    - The `NAME` of the code that can be invoked or called elsewhere in our code.
                         - Sometimesd the name can be `OPTIONAL`.
                         - You can use the following to name a function:
                            -- a to z (upper and lower case)
                            -- 0 to 9
                            -- _ (underscore)
                            -- $ (cash sign)
                            -- special characters

(str)    > Parameters     - `PARAMETERS` go inside the call signature parentheses (i.e. (...) ).
                          - Multiple parameters are seperated by commas (i.e. (num1, num2, num3) ).
                          - You can have as many parameters as you want.
                          - Parameters are variables that are local and ONLY available inside the function.

{...}    > Main Block     - Since the function has to do something, the main block of the function has a series of `INSTRUCTIONS`.
                          - Those instructions are called `STATEMENTS`.
                          - Statements go inside curly braces (i.e. {...} ).
                          - Statements are seperated by semicolons (i.e. ; ).

                          - The 'RETURN' statement can return a result, object, or even another function.
                               This lets JavaScript do things that are very difficult in other languages.
                            In fact, `RETURN` is a function in its own right and you can return a series of parameters in 
                               the parentheses (i.e. return (...) ).  For example:

                                                    function example(a,b) {
                                                        return (
                                                            console.log(a + b),
                                                            console.log(a - b),
                                                            console.log(a * b)
                                                        );
                                                    }


console.log  >  Invoke    - This invokes (or calls) the function to be used elsewhere in the code by name.
                          - console.log will print the result of the function to the browser console.
                          - myFunction("string") will call the function.

*/


 /* 
 3. What is the difference between arguments and parameters?
 ///////////////////////////////////////////////////////
      When talking about functions, the terms parameters and arguments are often interchangeably used as if it were one and the 
      same thing but there is a very subtle difference.  

           A. Parameters are variables listed as a part of the function definition 
                -- i.e. function(num1, num2) {...} where num1 and num2 are the paramter
           B. Arguments are values passed to the function when it is invoked 
                -- i.e. console.log(myFunction(1,2)) where 1 and 2 are the arguments.  
      
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


        // Function Expression:          1. Not hoisted with contents, but the reference to it may be hoisted if we assign it as a variable.
        // (or) Definition Expression    2. Functions defined as arguments to functions are expressions.
        // (or) Function literal         3. This is also known as an anonymous function because you dont need a name for it.
        //                               4. VERY useful because we can use it everywhere a variable can go.
        //                               4. IMPORTANT: Because of an issue with hoisting, if you invoke a function expression before the function iteslef, you
        //                                             get an error.
        //                           

                        let addExpression = function(num1, num2) {
                            return num1 + num2;
                        }
                        console.log(addExpression(3,3));    // 6


        // ES6 Fat Arrow Function:

                        const addFatArrow = (num1, num2) => num1 + num2;
                        console.log(addFatArrow(4,4))       // 8   
   


/*
How do you invoke a function?
////////////////////////////
        There are 4 ways to invoke a function:
                1. Invoke as a function.
                2. Invoke as a method.
                3. Invoke as a constructor.
                4. Invoke with call and apply methods.

            - Invoking as a FUNCTION and METHOD are the most common.
            - functions also get a few extra parameters, like arguments and THIS.
            
            IMPORTANT: A property of functions is that invoking them passes control of the program to the function we are calling.

            - A common way to invoke a function is TRADITIONAL INVOCATION.
                 - so if a function has a name, you can call it by its name and pass along 0 to as many parameters as you need (i.e. myFunction(a,b,c); ).

*/                    
                function addItUp(num1, num2) {                    // plus is passed two parameters, a and b.
                    return (                             // return is used as a function (return IS a function so it can be passed parameters).
                        console.log(num1 + num2),        // here we have num1 + num2, which the result of our operation. NOTE THE COMMA!
                        console.log(num1 * num2),        // here we have num1 * num2, which is another result of our operation. NOTE THE COMMA!!
                        console.log(arguments)           // here we pass the `arguments` parameter (this will restate our parameters).      
                    );                                   // Thus everything above is a straight function call.     
                }
                
                console.log(`results of Return as function example below`);

                addItUp(2, 3);                          // now we INVOKE the function and PASS the parameters we want.  We have two slots, so two numbers.
                                                        //->  5
                                                        //    6
                                                        //    { '0': 2, '1': 3 }




           