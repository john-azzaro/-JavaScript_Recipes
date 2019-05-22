"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Functions (broad overview)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is a function?
//     2. What is functional programming?
//     3. What are the components of a function?
//     4. What is the difference between arguments and parameters?
//     5. What is a default parameter?
//     6. How do you define a function?
//          + What is a function defintion?
//          + What is a function expression?
//     7. How do you invoke a function?
//     8. How many ways are there to invoke a function?
//     9. How do you use functions in objects?
//    10. How do you invoke a function through a constructor?
//    11. How do you use prototypes?
//    12. How do you invoke through Call and Apply?
//    13. How do you use the arguments parameter?
//    14. Can you explain the return statement?
//    15. How do you use an anonymous closure (or self executing function)?
//    16. What is variable hoisting and scope?
//    17. How do you create and namespace modules?
//    18. How do you chain method calls?
//    19. What is a rest operator?
//    20. What is a callback function?
//
// NOTES ///////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on functions taken from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        and Answer format for improved readability.
//     2. For more examples and rough idea for this page, see functionScratch.js
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
1. What is a function?
/////////////////////////
    ==SHORT ANSWER==
        -- A function is a repeatable process or behavior.
        
    ==EXTENDED ANSWERS==
        -- A function is a reusable recipe that perfoms the same set of actions over and over again on a set of ingredients 
        -- A function is a REPEATABLE (i.e. can be called multiple times) and DETERMINATE (i.e. predictable) PROCESS or BEHAVIOR.
        -- A function is a series of STATEMENTS that are grouped into a special package.
        -- A function is a MODULAR and fundamental BUILDING BLOCK of JavaScript that perform tasks or calculate values.
        -- A function is an OBJECT that is a FIRST-CLASS ENTTITY which is treated as a VALUE.
    
    ==ANALOGY==
        -- Think of a function as a resuable recipe for cooking.
        -- That recipe (e.g. "function") performs the same set of actions (i.e. "main block" of function) over and over again on 
           a set of ingredients (e.g. parameters).        
*/




/*
2. What is functional programming?
//////////////////////////////////
    ==SHORT ANSWER==
        -- Functional programming is a PROGRAMMING STYLE/TECHNIQUE (i.e. PARADIGM) that breaks code into SINGLE-USE peices and focuses
           on DATA-FLOW rather than control-flow.  

    ==EXTENDED ANSWERS==
        -- Functional programming stresses importance on the ORDER in which things run, specifically how the program progresses from 
           statement to statement, in-and-out of for loops and in-and-out of sub-routines.
        -- Functional programming is about breaking your code into "verbs" (vs OOP which is about 'nouns').
            -- In many ways, it is easier to think of the world in terms of nouns (and by extention objects).
                -- So if we were to build a house in OOP, we would talk about the walls, doors, and windows.
            -- However, with functional programming we are thinking about the ACTIONS.
                -- So if we were building a house with functional programming, we would talk about turning the lights
                   on or off, opening or closing the doors, etc.
        -- Functional programming uses many functions, passing functions to functions, returning functions, doing 
           things with the arguments and parameters. 

    ==EXAMPLE==      
        Function                                                       Order                 What it does
        _________________________________________________              ____________          ____________________________________
*/
            function replaceIt(string) {                              //    3.1              Replaces the word 'this' with the word 'that'.                       
                return string.replace("this", "that");                //
            }

            function capitalizeIt(string) {                           //    3.2              Capitalizes all the words in the string.
                return string.toUpperCase();                          //
            } 

            function printIt(string) {                                //    3.3              Prints the string to console.
                return console.log(string)                            //
            }

            function repAndCap(string) {                              //    2                ... we pass the string to repAndCap and executes
                return printIt(capitalizeIt(replaceIt(string)));      //                     in order by first running replaceIt, then capitalizing
            }                                                         //                     it by running capitalizeIt, then finally printing it. 

            console.log(repAndCap("this is a test"))                  //    1                When repAndRap is called with the argument 
                                                                      //                     "this is a test"....

        
            


/* 
3. What are the components of a function?
////////////////////////////////////////
     ==ANSWER==
        -- A function is comprised of a function names "keyword", a name for that function (e.g. "myFunction"), a call signature with 
           parameters (which are stipulated or passed in), a main block of the function.  The function is then called by calling the 
           function name as well as any parameters.

    ==EXAMPLE==
*/          
            //    FUNCTION KEYWORD         NAME        CALL SIGNATURE (W/PARAMETER)
            //                   \           |         /
                                function myFunction(str) {
                                return str;                     //- MAIN BLOCK of function
                                }
                                console.log(myFunction("Hello!"));  //- CALL (W/ARGUMENT)
/*  
 
        Component           ID              What it is and what it does
        _________________   ___________     ________________________________________________________________________________________________
            function        > Keyword       - Functions are `DEFINED` with the function keyword (regardless of how they are used or invoked).
                                            - Defining a function is sometimes called "DECLARING" a function.

            myFunction      > NAME          - The `NAME` of the code that can be invoked or called elsewhere in our code.
                                            - Sometimesd the name can be `OPTIONAL`.
                                            - You can use the following to name a function:
                                                -- a to z (upper and lower case)
                                                -- 0 to 9
                                                -- _ (underscore)
                                                -- $ (cash sign)
                                                -- special characters

            (str)           > Parameters    - `PARAMETERS` go inside the call signature parentheses (i.e. (...) ).
                                            - Multiple parameters are seperated by commas (i.e. (num1, num2, num3) ).
                                            - You can have as many parameters as you want.
                                            - Parameters are variables that are local and ONLY available inside the function.

            {...}           > Main Block    - Since the function has to do something, the main block of the function has a series of `INSTRUCTIONS`.
                                            - Those instructions are called `STATEMENTS`.
                                            - Statements go inside curly braces (i.e. {...} ).
                                            - Statements are seperated by semicolons (i.e. ; ).
                                            - Also remember NOT to add a semicolon after the main block (i.e. {}; )

            console.log     > Invoke        - This invokes (or calls) the function to be used elsewhere in the code by name.
                                            - console.log will print the result of the function to the browser console.
                                            - myFunction("string") will call the function.
*/




/* 
4. What is the difference between arguments and parameters?
//////////////////////////////////////////////////////////
    ==SHORT ANSWER==
        -- Parameters are variables passed to the call signature while Arguments are values passed when the function in invoked.

    ==LONG ANSWER==
        -- When you define a function (i.e. function declaration or function expression), you provide parameter "slots".  When you 
           invoke the function, you pass in the values as arguments to fill those slots so the function has ingredients to efectively 
           "cook" the recipe in the function block of code.

    ==EXTENDED ANSWER==
        -- When talking about functions, the terms parameters and arguments are often interchangeably used as if it were one and the 
           same thing but there is a very subtle difference.  

                A. Parameters are variables listed as a part of the function definition 
                     -- i.e. function(num1, num2) {...} where num1 and num2 are the paramter

                B. Arguments are values passed to the function when it is invoked 
                    -- i.e. console.log(myFunction(1,2)) where 1 and 2 are the arguments.  
      
        -- Its important to know the difference because JavaScript does not throw an error if the number of arguments passed during a function 
           invocation are different than the number of parameters listed during function definition. This should make it clear that parameters 
           and arguments should be treated as two different entities.
*/




/*
5. What is a default parameter?
////////////////////////////////
    ==SHORT ANSWER==
        -- A default parameter is a specified parameter that we put in the call signature parentheses of the function or in the code block.

    ==LONG ANSWER==
        -- A default parameter can either be specified in a variable (i.e. let cake = ingredient || flour) or in the actual call signature of 
           the function itself, meaning that we do not need to pass anything in because that slot is filled with the information we need.
        
    ==EXAMPLES==
        EXAMPLE WITHOUT DEFAULT PARAMETERS
        ==================================
        -- below we have a normal function BEFORE default parameters:
*/
                function interest(principal, rate, years) {                         // note here that no default parameters are given, only inputs.
                    return principal * rate / 100 * years;          
                }
                console.log(`default parameter example before default:`);
                console.log(interest(10000, 3.5, 5));                               //-> 1750
/*

        EXAMPLE WITH DEFAULT PARAMETERS IN VARIABLES USING 'OR'
        =======================================================
        -- However, we can use a variable to provide a default value with the or operator (i.e. ||).
        -- note that you DO NOT instantiate the default parameters as variables.
*/

                function interest2(principal, rate, years) {
                    rate = rate || 3.5;                                            // the default parameter here is 3.5 (i.e. input OR 3.5 by default).
                    years = years || 5;
                    return principal * rate / 100 * years;
                }
                console.log(`default parameter example with default variable:`);
                console.log(interest2(10000));                                     //-> 1750
/*

        EXAMPLE WITH DEFAULT PARAMETERS IN THE CALL SIGNATURE
        =====================================================
        -- With ES6, you can do it in amuch cleaner way by inserting it inside the call signature itself.
        -- Once you give a default parameter, every parameter after that should also have a default as well, otherwise
           you get a NaN (not a number).  
              -- HOWEVER, if you pass in undefined (i.e. console.log(interest3(principle, rate = 3.5, undefined))), you will be able
                 to use default parameters at whichever point you wish... but try not to because it is not good practice.
*/

                function interest3(principal, rate = 3.5, years = 5) {              // note here default parameters are INSIDE the call signature.
                    return principal * rate / 100 * years;
                }
                console.log(`default parameter example with default variable in call signature:`);
                console.log(interest3(10000));                                       //-> 1750





/*
6. How do you define a function?
////////////////////////////////
    ==SHORT ANSWER==
       -- A function can be defined as either a function declaration or a function expression. Unlike function expressions which are NOT
          hoisted (thus need to be placed where they are used), function declarations can be declared anywhere. 


    ==EXTENDED ANSWERS==

    What is a function Declaration?
    ===============================
        -- A function declaration is hoisted with contents (hoisting is how the browser parses Javascript, reads through once 
           then executes second pass).
        -- Function declarations are hoisted to the top of the top-level or if you have a function declaration inside 
           a function, to the top of that function. 
        -- With function declarations, you can use them above where they are declared.
*/
                function addDeclaration(num1, num2) {
                    return num1 + num2;
                }
                console.log(`function declaration example:`)
                console.log(addDeclaration(2,2))     //-> 4


/*  What is a function expression?
    ==============================
        -- Function expressions also go by the name "Definition Expression" and "Function literal".
        -- Function expressions are a JavaScript pattern that lets you create a variable and execute it as a function.
            -- Remember: a variable can be set to a number, a string, an object, or even a function (seen here). 
        -- Function expressions are Not hoisted with contents, but the reference to it may be hoisted if we assign it as a variable.
        -- Functions defined as arguments to functions ARE expressions.
        -- Internal functions with no names are also known as an anonymous function because you dont need a name for it.
        -- Function expressions are useful because we can use it everywhere a variable can go.
        -- Since a function expression is a variable (or if it is a const), we need to terminate the function with a semi-colon.
        -- If you DO NOT have a name for the function (seen below), you have an ANONYMOUS function.
        -- If you add a name to the function (i.e. let run = function walk() {...}), it is a NAMED function expression.
        -- IMPORTANT: Because of an issue with hoisting, if you invoke a function expression before the function itself, you will get an error.
        -- You can also run the function through another declared variable.             
 */                                 
        // function expression:

                let addExpression = function(num1, num2) {
                    return num1 + num2;
                };                                                 // note the semi-colon that terminates the variable.
                console.log(`function expression example:`)
                console.log(addExpression(3,3));                   //-> 6

        //function expression called through another variable:

                let variableWithAddExpression = addExpression;
                console.log(`function expression called via another variable:`);
                variableWithAddExpression();

        // ES6 Fat Arrow Function:
        //  -- when you read this, you would say 'goes to...' for fat arrow.
                                             
                const addFatArrow = (num1, num2) => num1 + num2;
                console.log(addFatArrow(4,4))       // 8   
   



/*
7. How do you invoke a function?
/////////////////////////////////
    ==SHORT ANSWER==
        -- You can invoke a function most commonly using the function name (i.e. myFunction) and passing in the ARGUMENTS in the call signature 
           which occupy specific slots that translate to the function being called.
    
    ==EXAMPLES== 
        -- In the following example, we will see how to invoke the function and pass the arguments as parameters. 
*/     

                function multiplyIt(num1, num2) {               // function
                    return num1 * num2;
                }

                console.log(`multiply it result`);
                console.log(multiplyIt(2, 3));          //=>6   // invocation   (note that console.log is just so that the example prints to console)


/*      -- In the example above, we have two specific components: the function and the invocation.
        -- The function (i.e. multiplyIt) is a basic function declaration with two parameters, num1 and num2.
        -- The objective of the function is to multiply num1 and num2 together and return the result.

        -- To invoke the multiplyIt function, we simply CALL the function name AND pass in any parameters we need.
 
          
                Function name       first argument
                            \       |
                        multiplyIt( 2, 3 )
                                /       \
                  call signature         second argument


        -- It is important to note that when you pass arguments to the function, those are dedicated "SLOTS" for those arguments.
        -- So in the multiplyIt example, we're passing two arguments:
            -- when we pass "2" as an argument, it fills the FIRST"slot" as num1.
            -- when we pass "3" as an argument, it fills the SECOND slot as num2.
        
            
                                slot 1     slot 2
                                    _\__ __/_
                                    |  | |  | 
                         multiplyIt(  2,  3 )
                                      |   | 
                                      |   |  
                function multiplyIt(num1, num2) {          
                    return num1 * num2;
                }           |      |
                            2      3         => 6


        -- So this means that num1 will ALWAYS be 2 when the function is invoked as it was above.
        -- And num1 will ALWAYS have the value of 2 inside the function body.
*/



/*
8. How many ways are there to invoke a function?
/////////////////////////////////////////////
==SHORT ANSWER==
    -- You can invoke a function most commonly by function (e.g. functional programming) and method (e.g. methods in objects).  
       Constructors and call and apply methods 


==LONG ANSWER==
    -- There are 4 ways to invoke a function:
        1. Invoke as a function.
        2. Invoke as a method.
        3. Invoke as a constructor.
        4. Invoke with call and apply methods.

    -- Invoking as a FUNCTION and METHOD are the most common.
    -- functions also get a few extra parameters, like arguments and THIS.
    -- IMPORTANT: A property of functions is that invoking them passes control of the program to the function we are calling.

==EXAMPLE==
    -- A common way to invoke a function is TRADITIONAL INVOCATION.
    -- so if a function has a name, you can call it by its name and pass along 0 to as many parameters as you need (i.e. myFunction(a,b,c); ).
*/                    
            function addItUp(num1, num2) {           // plus is passed two parameters, a and b.
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



/* 
9. How do you use functions as objects?
//////////////////////////////////////
    ==SHORT ANSWER==
        -- A function method is a property with a function assigned as its value, and invoked using dot notation.
           

    ==LONG ANSWER==
        -- in addition ot calling functions using the Traditional way (i.e. call name and pass along parameters), we can also invoke them by METHODS.
        -- A METHOD is a function that has been assigned as a property of an OBJECT (i.e. myObject.firstName where .firstName is the method).
        -- An OBJECT is a complex data type that brings together properties and behaviors into a single entity.
        -- An OBJECT always begins and ends with curly braces.
        -- Inside an object, we have key:value pairs.
        -- An OBJECT can have:
                -- variables  -- (i.e. let car = "Honda"; ).
                -- lists (aka arrays)  --   (i.e. let cars = ["Toyota", "BMW", "Mercedes"]; ).
                -- any data type (including other objects).
        
        -- The example below is a normal function with key/value pairs:
*/                
                let info = {
                    firstName : 'John',                        // a name/value pair
                    lastName : 'Smith',
                    occupation : 'soldier'
                }
                console.log(`result of normal function test:`)                                   
                console.log(info.firstName);                    //-> John   ()
/*        
        -- The example below shows a function as a property of an object
        -- Here we create an object called 'report' and add 2 properties, status and a method called plus (which is function).
*/              
                let report = {
                    status: 'Awesome',                  // property called status with a value called Awesome.  NOTE COMMA!
                    plus: function(a,b)  {              // this is an anonymous function assigned to an element.  It is called with the 'plus' identifier
                        return (
                            console.log(this),          // check the value of the `this` attribute.
                            console.log(a + b),         // return result of the function.
                            console.log(arguments),     // find out what the arguments are (i.e. values of a and b).
                            console.log(this.status)    // ask for the `this` attribute and then ask for the status variable.
                        );
                    }                      
                }
                console.log(`results of function in object example:`)
                report.plus(2,3);                       //-> { status: 'Awesome', plus: [Function: plus] }
                                                        //   5
                                                        //   { '0': 2, '1': 3 }
                                                        //   Awesome



/*
10. How do you invoke a function through a constructor?
/////////////////////////////////////////////////////
        -- functions can construct objects as well.
        -- in other words, the function itself BECOMES the constructor.
        -- you can create an object with the `new` keyword.
             -- this method of creating an object is called a CONSTRUCTOR INVOCATION.
             -- a constructor builds on object based on the original function
             -- each instance will have its own set of properties (see example below).
             -- A CONSTRUCTOR INVOCATION can use the function keyword to create an object with the variable from the function.
             -- By convention, constructor functions should always be CAPITALIZED.

            IMPORTANT NOTE: This does not seem to work correctly in VSCode, but in chrome it does.

                                   
            1. So first we create a function. 
                 -- "dog" is essentially an object. 
                 -- this dog function only had 2 variables, name and breed.

                           var Dog = function() {     
                               var name, breed;
                               console.dir(this);     
                           }
    
            2. Next, we'll create a new instance of this with a new constructor.
                   -- this creates a new object based on the `dog` function.
                   -- the NEW keyword create a new instance of the object (like a copy or reproduction). 

                            creates "new" object
                                      \ 
                            firstDog = new Dog;       

            3. Now that the new object has been created, we can assign a name and a breed.

                           firstDog.name = "bowser";
                           firstDog.breed = "Yorkie";

            4. Now you can ask for the dogs first name.

                        console.log(firstDog);          //-> dog {name: "bowser", breed: "yorkie"}
 */             
 
 



/* 
11. How do you expand objects through prototypes?
///////////////////////////////////////////////
        -- JavaScript is known as a prototypal inheritance langauge, which means you can base the functionality of an
           object on ANOTHER object,
        -- EVERY object in JavaScript can be based on another object.
        -- With the prototype object create relationships in JavaScript and we can expand anything in JavaScript.
                - this is convienent because we dont have to build the same functionality for different things.
                - the way this is done is by linking the prototype object to another.  For example:


        1. First, we create out constructor function for 'Dog' and create a dog (i.e. firstDog).

                let Dog = function() {
                    let name, breed;
                }

                firstDog = new Dog;
                firstDog.name = 'bowser';
                firstDog.breed = 'collie'


        2. To add functionality to the Dog obejct.  For this example, we'll create a function called 'speak'.

                let speak = function(sayWhat) {
                    console.log(sayWhat);
                }


        3. To expand on Dog by accessing on its prototype and setting a method of Dog to be the same as the speak function.

                Dog.prototype.speak = speak;

                         - what this does is give a Dog the ability (or method) to speak.


        4. then we attach the speak method to firstDog and pass along something to say.

                firstDog.speak('I go bark sometimes')
*/ 




/*
12. How do you invoke through Call & Apply?
/////////////////////////////////////////
        -- Call & Apply is sometimes refered to as "indirect invocation".
        -- Call & Apply can define the value of `this` argument.
        -- Call & Apply can control `this` and `arguments`.
        -- Call passes a VALUE.
        -- APPLY passes an ARRAY.
  */

                let talk = function() {
                    console.log(this.loud);                             
                }
                let talkOutLoud = {normal: "whisper", loud: "yell"}

                talk.call(talkOutLoud);                             //-> yell
                                                                    //   we invoke the function call...
                                                                    //   use the .call method...
                                                                    //   pass-in the talkOutLoud     
                                                                    //   console.log runs this(i.e. talk) dot loud(from talkOutLoud)
                 
               
                // Another way to do the same thing above is like this:
                let talk2 = function(what) {
                    console.log(what);                             
                }
                let talkOutLoud2 = {normal: "whisper", loud: "yell"}

                talk2.call(talkOutLoud2, talkOutLoud2.normal);      //-> whisper    
                                                                    // normal is being passed into the what variable in the function.
                                                                    // which is then passed into the console.log.

/* 
        -- Now the difference between call and apply is that apply can pass an ARRAY.

*/                let talk3 = function(what) {
                    console.log(what);                             
                }
                let talkOutLoud3 = {normal: "whisper", loud: "yell"}

                talk3.apply(talkOutLoud3, ['roar']);                  //-> roar 
                                                                      // instead of normal (previous), we pass in an array with 'roar'.
                                                                      //   we change call to apply...
                                                                      //   roar is passed to the what variable and the console.log.






/*
13. What is the arguments parameter?
///////////////////////////////
        -- Although we've been passing elements to functions, but often we dont know how many elements we will be needing.
        -- You want your function to be able to accept an number of elements.
        -- The ARGUMENTS PARAMETER is used to hold a list of all the elements passed as arguments to the function.
        -- The arguments parameter is an array-like object becasue it looks like an array and we can do some things we do to arrays.
                -- for example, we can call the numerical index(i.e. arguments[x] ).
                -- we can also get the arguments.length (i.e. the amount of elements we pass to the function).
                -- because we have these properties, we can loop through the arguments with a for-loop.
                -- however, we CANNOT use array methods (i.e. pop, push, shift, etc. ).            
*/
                let addSomething = function() {
                    let sum = 0;                                         // sum initialized to 0.
                    for (let i=arguments.length - 1; i >= 0; i--) {      // for-loop will go through all the arguments in the arguments array
                        sum += arguments[i];                             // increment the arguments so they add themselves together.
                    }
                    return sum;
                }

                console.log(addSomething(4,4,4));            //-> 12     // because we use `arguments`, we can pass in as many
                console.log(addSomething(5,5,5,5,5,5,5,5));  //-> 40     // arguments as we want. 
/*
        - To pass as many arguments as we want (and in this case get the sum), we use the special object called object again.
*/
                function addSomething2() {
                    let total = 0;
                    for (let value of arguments) {
                        total += value;
                    }
                    return total;
                }
                console.log(`example with arguments object:`)
                console.log(addSomething2(1,2,3,4,5,10));     //-> 25






/*
14. Can you explain the return statement?
////////////////////////////////////////
        -- When you invoke a function, its like generating an equation, which usually have results.
        -- The 'RETURN' statement can return a result, object, or even another function.
               -- This lets JavaScript do things that are very difficult in other languages.
               -- In fact, `RETURN` is a function in its own right and you can return a series of parameters in 
                  the parentheses (i.e. return (...) ).  For example:

                             function example(a,b) {
                                return (
                                    console.log(a + b),
                                    console.log(a - b),
                                    console.log(a * b)
                                );
                            }
                                                    
        -- So to put it simply, the return statement expresses the result of the operation we perform in our function.  
               -- For example:
*/
                let addTheThing = function(a,b) {
                    return a + b;                 // the job of the return function here is to return the result of a + b.
                }
                console.log(addTheThing(4,5))     //-> 9
/*
        -- the return statement is optional.  that is to say, if you do not include it in your code, the function will return something.
        -- the return statement is only in the function body.
        -- the return statement can be used to return something back to the caller.
                -- so you could assign it to a variable and it will place a value in the variable when the function returns.
        -- the return statement is usually the last statement in a function (stops execution).
        -- the return statement can be anything or return nothing.
        -- the return statement appears only in the body of a function (otherwise it is a syntactical error).

*/





/* 
15. How do you use an anonymous closure (or self executing function)?
//////////////////////////////////////////////////////////////////////
        -- a typical function definition can be invoked by calling the function name anywhere in the code.  For example:
*/
                    let cat = function() {
                        console.log('meow')
                    }
                    console.log(cat());
/*
        -- However, there is a way to invoke a function and NOT call it manually.  

        -- Anonymous closures can be used to invoke a function automatically by adding parentheses AFTER the function body.
        -- Anonymous closures DO NOT have a name... they dont need it since they run automatically.
        -- Any variables INSIDE the function body will NOT be known outside the anonymous closure.
        -- the () at the end of the function change the function declaration to a function expression.
            -- when you use the function keyword, JavaScript assumes you want to create a function with a name.  But it will not run it.
            -- 
*/
                    let cat2 = function() {
                        console.log('meow meow')
                    }();
/*
        -- You can also instantiate the function by passing parameters into those parentheses.
*/
                    let addTheCats = function(message) {        // Second, the string is passed (via message) to the function.
                        console.log(message);                   // Third, the string finally is passed to the console.log statement.
                    }("Good evening, I am a cat");              // First, a string is passed.
/*
        -- You can also make the function completely anaonymous.
        -- You make a function completely anonymous by wrapping the ENTIRE function in parentheses.
            -- what this does is ask JavaScript to comvert this function into a value and then use the last set of parentheses to
               pass in any parameters (if needed).
            -- important to remember, you dont need to have any parameters in the last parentheses, just that this example has one.
*/
                    (function(message) {
                        console.log(message)
                    })("I am an anonymous function");






/*
16. What is variable hoisting and scope?
///////////////////////////////////////
        -- HOISTING is the process of moving the FUNCTION DECLARATIONS to the top of the file automatically.

        -- HOISTING refers to how browsers parse JavaScript.
            -- First pass, the browser reads through the code once, setting aside space for variables, functions, etc.
            -- Second pass, the browser reads through AGAIN and executes the code.
                 -- this is how the browser knows what is what.

        -- With hoisting, we can call a FUNCTION before it has been defined.
                -- i.e. function hoistThis() {...}

        -- However, we CANNOT call a function that is defined using FUNCTION EXPRESSION syntax.
            -- this is because when the JavaScript engine executes the code, it moves all the function DECLARATIONS to the top.
            -- when all the function declarations are 'HOISTED' to the top, we get the term 'hoisting',

                --i.e. const hoistThis = function() {...}

        -- VARIABLE SCOPE defines how the variables declared CAN or CANNOT be accessed at different places in your code.

        -- GLOBAL SCOPE means that the variable is available EVERYWHERE in the code.

        -- BLOCK (LOCAL) SCOPE means that the variable is only available within the confines of the function.

        -- SCOPE CHAIN refers to the way the JavaScript interpreter determines the value of a variable.
                    -- first, the interpreter looks locally for the variable.
                    -- if it is not there, then the interpreter will look UP THE SCOPE CHAIN until it reaches GLOBAL SCOPE.
                    
        -- VARIABLE SHADOWING means that if there is a global AND block scope variable, the local block variable will take precedence.

        -- GLOBAL variables have some negative attributes.
                    -- GLOBALS tend to have unintended SIDE EFFECTS.
                    -- SIDE EFFECTS occur when a local scope variable reaches into global and changes a value there.
                    -- Side Effects are UNINTENDED since it can change an outside variable to carry out its instructions.
                    -- When this happens, a code is INDETERMINATE.

                    -- A function should be DETERMINATE, meaning that it should always return the same value and have NO side effects.
                    -- A function that is determinate is a PURE function.
*/





/*
17. How do you create and namespace modules?
///////////////////////////////////////
    -- modules let you reuse code across apps.
        -- when you just start coding, you are coding just for that program.  However, when you start a new project you
           might tend to look around your old code to find bits and peices to use.
        -- modules will allow you to start reusing those bits and peices without having to capy-and-paste.
        -- in a way, modules is like creating a library for you to use on any project. 

    -- To create a module, you need to create a NAME SPACE.
        -- namespacing allows you to protect variables that you have in your modules from any global scoped variables.
            -- this is important because you might have variables in your module that are in the application.
        -- so we know we can create a self executing function (within parentheses) which protects all the variables inside from global scope.
            -- but what if we want access to those variables OUTSIDE the closure but INSIDE our application?
            -- to do this, we need to create a variable and assign it to our self executing function.
*/

                    let myLibraryDemo = (function() {
                        let myBook = "Moby Dick";
                    })();                                    //-> 
/*
             -- inside the function we have a private variable (i.e. myBook).
             -- the variables in this function would NOT be accessible outside the function (i.e. protected from global scope).
        
    -- Now if you want to access a variable from OUTSIDE the function, you need a RETURN statement to commicate back with the
       rest of the application.
*/

                    let myLibrary = (function() {
                        return {                               // Here we return an object.
                            book: function() {                 // Then, we have an element with the name 'book' and a method (i.e. function).
                                console.log('Pride and Prejudice')
                            }
                        }
                    })();
                    myLibrary.book();       //-> Moby Dick     // call function with name space (i.e. myLibrary) and method (i.e. book).

                    /*
    -- main thing is that the name space protects the variables inside from global scope.
    -- So what we've done is create a module and used name spacing to protect that module's internal variables from global scope.       
*/
/* 
    -- What if we want to send infromation TO our function using an object and how to set defaults just in case the user calls a method without
       initializing it?
    -- To send information, we use an object.
    -- it s good to use an object because we can pass in multiple key/value pairs to the function and then parse each of the values out.
*/

                    let myLibrary2 = (function() {
                        return {                               
                            bookCollection: function() {                 
                                console.log(arguments[0].book);       // Capture the argument as arguments[0] (i.e. the 0th argument)
                            }
                        }
                    })();
                    myLibrary2.bookCollection({ book: 'Jane Eyre'});   //-> Jabe Eyre
/*

    -- but suppose you forget to initialize the bookCollection function?
        -- you will get an error because its asking to read an argument with nothing in it.

    -- To fix this, we need to do a SHORT CIRCUIT EVALUATION.
*/                    
                    let myLibrary3 = (function() {
                        return {                               
                            bookCollection: function() { 
                                let myArguments = arguments[0] || '';             // so here if the user forgets to set the argument, myArguments will be set to nothing.
                                let statement = myArguments.book || 'nothing';    // this is setup to only be the `say` parameter... but if it is empty, then it says 'nothing'.
                                console.log(statement);       
                            }
                        }
                    })(); 
                    myLibrary3.bookCollection();                      //-> nothing      // because no arguments are given, you will get 'nothing'.
                    myLibrary3.bookCollection({ book: 'Persuasion'}); //-> Persuasion   // because we now have a key value pair.

/*
    -- Now what if we have a bunch of variables everywhere within a much larger function?
    -- it would NOT be efficient to have these values scattered all over the place.
    -- To avoid this, we need a DEFAULT OBJECT for the function.
*/

                    let myLibrary4 = (function() {
                        let DEFAULT = {
                            book: 'Northanger Abbey'                                  // 2. this is good if you need to modify your defaults in one place.
                        }
                        
                        return {                               
                            bookCollection: function() { 
                                let myArguments = arguments[0] || '';            
                                let statement = myArguments.book || DEFAULT.book;     // 1. instead of inserting the default value here, you can relocate to a seperate variable.
                                console.log(statement);       
                            }
                        }
                    })(); 
                    myLibrary4.bookCollection();




/* 
18. How do you chain method calls?
/////////////////////////////////
    -- CHAINING makes it easy to work with multiple methods and it allows one function to call another.
    -- similar to jQuery.

*/
                let cars = (function() {
                    let DEFAULT = {
                        car: 'Ferrari', 
                        speed: 'normal'                                 
                    }
                    
                    return {                               
                        carCollection: function() { 
                            let myArguments = arguments[0] || '';            
                            let statement = myArguments.car || DEFAULT.car;     
                            console.log(statement);       
                        },                                                             // 1. add another item to our object (i.e. run).
                        run: function() {
                            let myArguments = arguments[0] || '';            
                            let running = myArguments.speed || DEFAULT.speed;          // 2. running is either the argument or default (in DEFAULT).
                            console.log(`running...` + running);                       // 3. output will be running plus either argument OR default.
                        }
                    }
                })(); 

               cars.carCollection();           //-> Ferrari
               cars.run();                     //-> speed...normal
               cars.run( { speed: 'fast'});    //-> speed...fast

/*
    -- Now you can use DOT NOTATION to chain one call to another.
    -- However, you need to understand WHY it is working.
    -- what is important is we have to make sure each function returns the calling object... which is exactly what the `this` argument does, 
       specifically, return the object that contains it.
    -- why is this working?  The `this` parameter is goign to return the instance of the object.
    -- in other words, in the example below the `this` is going to return the cars2 object.
    -- normally return would exit the current function, but in this case the `this` returns the carCollection (or run) and returns the
       cars2 object where you have access to carCollection AND run.
*/

                let cars2 = (function() {
                    let DEFAULT = {
                        car: 'Ferrari', 
                        speed: 'normal'                                 
                    }
                    
                    return {                               
                        carCollection: function() { 
                            let myArguments = arguments[0] || '';            
                            let statement = myArguments.car || DEFAULT.car;     
                            console.log(statement);
                            return this;       
                        },                                                             
                        run: function() {
                            let myArguments = arguments[0] || '';            
                            let running = myArguments.speed || DEFAULT.speed;          
                            console.log(`running...` + running);
                            return this;                       
                        }
                    }
                })(); 

                cars2.carCollection({ car: 'Porsche'}).run({ speed: 'Super Fast'});



/*
19. What is a Rest Operator?
////////////////////////////
    -- if you want a function with varying numbers of parameters, you can use the rest operator.
    -- this is not to be confused with the spread operator because it is used with arrays.
    -- with a spread operator, we can spread an array which means take it individual elements.
    -- but when we use the ... along with a parameter of a function, it is refered to as a spread operator.
    -- when you apply the rest operator to a parameter of a function, we pass a varying number of arguments and the rest 
       operator will take all of them and put them in an array.
    -- remember, rest operator must be LAST formal parameter (i.e. function sum(var1, var2, ...var3) {...}).
    -- because it is always at the end, we have as many parameters as we want but we use the ... for the REST of the parameters.
*/
                
            // classic was of getting the sum with rest operator

                function sum1(...args) {
                    let total = 0;
                    for (let value of arguments) {
                        total += value;
                    }
                    return total;
                }
                console.log(sum1(1,2,3,4,5,10));


            // more modern way of getting the sum with rest operator

                function sum2(...args) {
                    return args.reduce((a, b) => a + b);
                }
                console.log(sum2(1,2,3,4,5,10));


            // more complex example

                function sum3(discount, ...prices) {
                    const total = prices.reduce((a,b) => a + b);
                    return total * (1 - discount);                   // if dicount is .01 subtracted from 1 is 0.9 multiplied by total will... 
                }                                                    // ...return final price after discount.
                console.log(sum3(0.1, 20, 30));                      // 0.1 is the discount, 20 and 30 are the prices.
                                                                     //-> 45
           

/*
20. What is a callback?
//////////////////////
    -- A callback is a function that is passed into another function as a parameter to another function.
        -- for example, if you run a .forEach on an array (i.e. something.forEach(function(key) {return `${key}`})), where we pass in
           "function" is a callback.  
            -- Note that that .forEach example is not asynchronous. 
    -- A callback is a convention in JavaScript that is often used with asyncronous programming.
    -- A callback is used when you want to do things asyncronously, or whenever you want to exectue a code, which may not necessarily be
       in order, but at a certain point in time, or when an event takes place. 
    -- A callback often uses the anonymous functions (i.e. functions without names like function() {...}) because they are
       evoked immediately once the the event takes place.
    -- A callback is often tied to events (i.e. to take care of tasks whenever an event is triggered).
    -- callbacks are also called "higher order functions".
    -- callbacks are a way to make sure certain code doesnt execute until other code has already finished execution.
    -- when you pass a function as an argument.
    -- a callback is a name to describe a method that is supplied as an argument to another method such that when the parent method is
       called and the method body completes, the callback function is THEN invoked.
    -- in javascript, functions are objects, so functions can be taken as arguments and can be returned by other functions.
    -- any function that is passed as an argument is called a callback function. 
*/

/*
    EXAMPLE 1: Basic example
    ========================
    -- In the example below, we have two functions: xS and yS.
    -- However, even through we have xS as an argument, it does not log in the console.  Why?
        -- When we pass xS into yS, we essentially want to pass it in as an argument so that it will run after we call yS.
        -- But because theres no enforced order of operations, only yS will print.
*/

            let xS = function() {
                    console.log("You will see me if there was a successful asynchronous callback");
            }

            let yS = function() {
                console.log('yS has been called successfuly, but not xS.')
            }              

            yS(xS);                                              //=> yS has been called successfuly, but not xS.
/*

    -- How do enforce the order of operations and successfully pass in the xS function as an argument?
    -- The answer is with a callback.
        -- In this case, the "callback" will assume the role of whatever you pass into the function.
        -- when we run the callback at the end of the function, will run.
*/

            function xA() {
                console.log("xA has been successfulluy run via callback!");
            }

            function yA(callback) {                              // We pass the function body of xA into yA...  
            console.log("yA has been called successfuly");               
            callback();                                          // ... and then execute it at some point.
            }              
 
            yA(xA);                                              //=>  yA has been called successfuly
                                                                 //    xA has been successfulluy run via callback!                      

/*
    -- Once you call yA(xA), the xA is passed to yA in that slot.
    -- Then when yA is called, xA will be you could call the paramter whatever you want because the information in that slot
       will be called when you invoke the callback function at the end of your code block.
    -- Note that we are passing the FUNCTION BODY itself of xA into another function, not the results of xA.
            -- Once that is done, we can execute it at some point.
    
*/


/*
    EXAMPLE 2: callback calculator
    ===============================
    -- Take the function below which takes two numbers and the 2 calculation types to get a result.
*/
            function calculator(num1, num2, calcType) {
                if (calcType === "add") {
                    return num1 + num2;
                } else if (calcType === 'multiply') {
                    return num1 * num2;
                } else {
                    console.log(`I dont know how to divide or subract :(`)
                }

            }

            console.log(calculator(10, 5, "add"));       //=> 15

/*
    -- However, we can take all of these calculation types, move them out of the function, and use a callback function
       to get the same result, but much cleaner.
*/

            function add(a,b) {
                return a + b;
            }        

            function multiply(a,b) {
                return a * b;
            }

            function calc(num1, num2, callback) {
                return callback(num1, num2);
            }

            console.log(calc(10, 5, multiply));            //=> 50
            console.log(calc(10, 5, add));                 //=> 15



/*
    EXAMPLE 3: Blog Posts
    =====================
    -- below we have an array storing two blog posts and two functions, createPost and getPost.
    -- to provide an example of a callback, we'll use "setTimeout" to mimic server response (time).
    -- the objective is to create the post first (i.e. createPost) and then call getPost after (i.e. getPost).
    -- 
*/

                const posts = [
                    {title: 'Post One', body: 'This is post one'},
                    {title: 'Post Two', body: 'This is post two'}
                ];

                function createPost(post) {
                    setTimeout(function() {                          // setTimeout takes a callback.
                        posts.push(post);                            // pushes post onto the posts array.
                    }, 2000);                                        // but this will happen after 2 seconds.
                }

                function getPost() {
                    setTimeout(function() {
                        let output = "";                             // create a variable for our output.
                        posts.forEach(function(post) {               // looping through our posts (which takes in a callback) and for each iteration...
                            output += `<li>${post.title}</li>`       // append on to output (i.e. +=) the template literal with the posts title.
                        });
                        return console.log(output);                  // then return the output to the console.
                    }, 1000);
                }

                getPost();                                                           //=> <li>Post One</li><li>Post Two</li>

                createPost({title: 'Post Three', body: 'This is post three'});       // Here we add a 'Post Three' to createPost.

                getPost();                                                           //=> <li>Post One</li><li>Post Two</li>    
                                                                                     // Note here that "Post Three" is NOT there!  Why?          
               
/*
    -- The reason why "Post Three" is not there is because of the setTimeout.
        -- The server took 2 seconds to create the post and 1 second to get the post.
    -- when we added the "Post Three", we did so in synchronous way.

    -- To achieve what we want in an asynchronous way, we want to create a callback
*/


                const blog = [
                    {title: 'Blog One', body: 'This is blog one'},
                    {title: 'Blog Two', body: 'This is blog two'}
                ];

                function createBlog(post, callback) {             // by passing in a callback (note: you can call it whatever you want)...
                    setTimeout(function() {                      
                        blog.push(post);
                        callback();                               // ... we then insert the callback function.
                    }, 2000);                                       
                }

                function getBlogs() {
                    setTimeout(function() {
                        let output = "";                             
                        blog.forEach(function(post) {              
                            output += `<li>${post.title}</li>`       
                        });
                        return console.log(output);                  
                    }, 1000);
                }                                                   

                createBlog({title: 'Blog Three', body: 'This is blog three'}, getBlogs);      // So when createBlog takes in "Blog Three", we ALSO have
                                                                                              // the callback "getBlogs". So when createBlog is called
                                                                                              // it will also call "getBlogs" before (within) the  
                                                                                              // 2 second server time.
                                                                              

/*
    EXAMPLE 4: Homework
    ===================
*/

                function doHomeworkDemo(subject) {
                    console.log(`I'm doing my ${subject} homework.`);
                }
                doHomeworkDemo('science');                   //=> I'm doing my science homework.

/*
    -- In the example above, you see a normal function process.
        1. We have a function that, when called, will return the statement 'I'm doing my ______ homework.'
        2. When we call this function, and pass the argument 'science', the result is 'I'm doing my science homework'.

    -- However, when we add the CALLBACK as a second parameter, we get something different. 
*/

                function doHomeWork(subject, callback) {                   
                    console.log(`I'm doing my ${subject} homework.`);          
                    callback();
                }

                doHomeWork('math', function() {
                    console.log('finished my homework!');
                });
/*
    
    -- When you run the code above, you will get two responses:
                //=> I'm doing my math homework.
                //=> finished my homework!

    -- The process goes like this:
        1. We call the function doHomeWork() and pass the arguments 'math' and also a function.
        2. The function doHomwWork() runs and executes the console.log with the parameter 'math' passed in.
        3. At this point "I'm doing my math homework." is printed to the console.
        4. Now a callback "makes sure certain code doesnt execute until other code has already finished."
           In this case, the first pass where "I'm doing my math homework." is done...
           Now, when 'callback()' is invoked inside the function, the next bit of code can be executed.
        5. Once the callback is executed, the function's second paramter (a function itself) and prints "finished my homework!"
*/


/*
resources
http://www.lihaoyi.com/post/WhatsFunctionalProgrammingAllAbout.html
https://opensource.com/article/17/6/functional-javascript
https://blog.codeanalogies.com/2019/04/21/state-in-javascript-explained-by-cooking-a-simple-meal/
*/