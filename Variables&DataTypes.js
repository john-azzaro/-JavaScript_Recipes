"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Variables 
//     2. Variable Structure
//     3. Variable Commands
//     4. Data Types
//     5. Dynamic vs. Static Lang. types
//     6. Null vs. Undefined
//     7. Strict mode
//     8. Pass-by Value or Reference
//     9. -- Pass-by Value
//    10. -- Pass-by Reference
//    11. What is NaN
//    12. Checking for NaN
//

// NOTES ///////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on  on variables and data types taken from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        and Answer format for improved readability.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
1. What is a variable?
/////////////////////
    - a variable is a name attached to a variable.
    - a variable stores and keeps track of information within a program.
    - a variable manages the state of a program.
        -- i.e. let clickCount = 2.
    - a variable uses the equal sign (=) to assign a value to a variable.
        -- i.e let name = 'john'
*/
    
/*
2. What is the basic structure of a variable?
////////////////////////////////////////////
    JavaScript Keyword      Variable Name     Assinment Operator        Value
    __________________      _____________     __________________      ________
         let                    name                  =                'john'
*/

/*
3. What are the THREE commands used to create variable?
//////////////////////////////////////////////////////
    - var    -- value can be changed.
    - let    -- value can be changed.
    - const  -- value CANNOT be changed.

    For example: 
    */
        var redFruit = 'apple';
            console.log(redFruit)     //-> apple

        let yellowFruit = 'banana';
            console.log(yellowFruit)  //-> banana

        const greenFruit = 'kiwi'
            console.log(greenFruit)   //-> kiwi

    
    
/* 
4. What is a Data Type?
What are the different types in JavaScript?
//////////////////////////////////////////
    - A data type is a kind of value that is assigned to a variable.
    - there are 6 (or really 7 if you count functions) data types    */

//    1. string     -     A string is a series of characters within single or double quotes.
                          console.log(typeof('Hello'))    
                          //-> "string"

//    2. number     -     A number is used to represent numbers, both integers an floating point decimals numbers.
                          console.log(typeof(23))         
                          //-> "number"

//    3. Boolean    -     A Boolean evaluates either true or false.
                          console.log(typeof(true))       
                          //-> "boolean"

//    4. Undedined  -     Special value that declares variable before assigning a value to them.
                          console.log(typeof(undefined))       
                          //-> "undefined"

//    5. Null       -     Null is a special value used to indicate that the variable has no value.
                          console.log(typeof(null))      
                          //-> "object" 
                          //    BUT this is incorrect but the problem has existed for so long that it would be
                          //    problematic to fix it so its stayed like that.  It should be "null"

//    6. Object     -    Objects are complex data types that combine primitive datat types like numbers, strings, booleans, null, undefined.
                         console.log(typeof({}))      
                         //-> "object"              

                        
                    
/* 
5. What is the difference between a dynamically typed language like JavaScript and a staticly typed language like Java?
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    -- In Java code, we would define a string like this:   

            String a = 'cat';  

       In a statically typed language like Java we are saying that this varibale 'a' holes strings and ONLY strings.  
       So in Java you have to specify what EXACT types each variable will hold.
    
    -- In JavaScript, the typeof variables are determined DYNAMICALLY at the runtime.  So if you have this:
          
            let a = 'cat';
    
        This will evaluate as 'string'.  
        But if we then CHANGE the value from string to a number (i.e. 'point' the name to the value to a number), it will
        evaluate as a 'number'.  It DYNAMICALLY changes at runtime.
*/


/* 
6. Null and Undefined seem to mean the same thing, that there is no value.  However, there is a subtle difference
between the two.  What are the subtle differences?
/////////////////////////////////////////////////

    SHORT ANSWER: JavaScript will use Undefined by default for uninitialized variables.  Null is set by humans.

    -- Undefined is used by JavaScript to be NO VALUE.
    -- Undefined is used for uninitialized variables (i.e. let a;) without a value.
    -- Undefined is used for unknown variables, unknown properties, 
    -- Undefined is a core JavaScript function that informs you it is either an uninitialized variable, a parameter
       that is missing from the function parameter list, or an unknown property of an object.

    -- Null is used by programmers to indicate NO VALUE.
    -- Null will never be used by JavaScript for you... it will always use undefined.
    -- Only a programmer will ever set a variable to Null.
*/


/* 
7. What does 'use strict;' do?
/////////////////////////////
    -- strict mode allows you to place a program or a function in a strict operating context.
    -- strcit mode makes debugging easier, errors will be easier to find.
    -- It is a string because when it was first implemented only new browsers supported it, so a string
       was used and when a new browser reads the string, it knows to turn itself into strict mode operating context.    
*/


/* 
8. Does JavaScript pass parameters by value or reference?
////////////////////////////////////////////////////////

In the example below, we have a variable (a) and function with (a) as the parameter.
The question here is whether you are pasing the variable (a) by its value OR reference?

The Answer:
    -- Passing PRIMITIVE types such as strings, numbers, booleans are passed by VALUE. 
    -- Objects are passed by REFERENCE.
*/



/*
9. What is pass-by value?
////////////////////////
    -- pass-by value means that if you change the value in the function, it will NOT effect the outer scope.
*/  
            var a = 1;
            function foo(a) {    
                a = 2;
            }
            console.log(foo(a))   // 1
            console.log(a)
/*
    -- for primitive types, they are passed in by value... in this case they are passing in a copy of a.
       Anything you do to (a) INSIDE the body of the function 
*/


/*
10. What is pass-by reference?
/////////////////////////////
     -- pass-b reference means you are passing something that POINTS to something else (vs a copy of the object).
     -- since JavaScript passes an object by reference, when you change a property of that object from within the 
        function, the change will be REFLECTED in the outer scopes.
*/

            var b = {};
            function bar(b) {    
                b.moo = false;
            }
            console.log(bar(b))     // { moo: true}  a key of moo with a value of false.
            console.log(b)
/*
     -- so when you pass in an object into a function, you are not passing in a reference, you are passing in a copy,
        you are passing in something that POINTS to the (b) object.
     -- When you chnage a property of that object in the function you are changing a property of that (b) object in
        the outer scope.
     -- you cant change what a points to, only a PROPERTY of (b). 
*/

/* 
What is NaN?
///////////////////////////////////////
    -- NaN stands for "not a number" and its used to define a number that's not really a number, like a bad calculation.
    -- NaN compared to any other value is FALSE.
    -- Confusingly, NaN compared to NaN (i.e. NaN == NaN) is also FALSE.
*/
             console.log(typeof(NaN))      
             //-> "number"    

             console.log("abc"/4);
             //-> "NaN"


/* 
How do you check for NaN?
////////////////////////
      -- There is an inbuilt function called "isNaN"
            
            // console.log(isNaN(NaN))      
            //-> true  

      -- However, there are some drawbacks, specifically if you pass "A" (i.e. isNaN("A")) you will get true.
*/
               
