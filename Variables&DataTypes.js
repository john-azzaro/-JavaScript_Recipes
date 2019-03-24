"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Variables 
//     2. Data Types
//

// TOPIC NOTES ///////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on  on variables and data types taken from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 


What is a variable?
////////////////////
    - a variable is a name attached to a variable.
    - a variable stores and keeps track of information within a program.
    - a variable manages the state of a program.
        -- i.e. let clickCount = 2.
    - a variable uses the equal sign (=) to assign a value to a variable.
        -- i.e let name = 'john'
    

What is the basic structure of a variable?
//////////////////////////////////////////
    JavaScript Keyword      Variable Name     Assinment Operator        Value
    __________________      _____________     __________________      ________
         let                    name                  =                'john'


What are the THREE commands used to create variable?
////////////////////////////////////////////////////
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


What is a Data Type?
What are the different types in JavaScript?
////////////////////////////////////////////
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
What is the difference between a dynamically typed language like JavaScript and a staticly typed language like Java?
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
Null and Undefined seem to mean the same thing, that there is no value.  However, there is a subtle difference
between the two.  What are the subtle differences?
////////////////////////////////////////////////////////////////////////////////////////////////////////////////





*/





