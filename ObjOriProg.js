"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Object-oriented Programming
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is Object Oriented Programming (OOP)?
//     2. What are the four core concepts in OOP? 
//
// NOTES ///////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information about Object-oriented programming (OOP) taken from study, research,  
//        tutorials, mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the 
//        document in Question and Answer format for improved readability.
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
1. What is Object Oriented Programming (OOP)?
/////////////////////////////////////////////
    -- Object oriented programing (OOP) is a programming paradigm centered around objects rather than functions.
    -- Object oriented programming is not a programming language or tool.
    -- Languages such as C#, Java, Ruby, Python, and JavaScript, and more.
    -- Many frameworks are designed with object oriented programming concepts in mind (e.g. angular(.
*/

/*
2. What are the four core concepts of OOP?
//////////////////////////////////////////
        
        1. Encapsulation
        2. Abstraction
        3. Inheritance 
        4. Polymorphism

    -- Before object oriented programming there was something called "procedural programming" where data was stored in a
       bunch of variables and function that operate on the data, which was very simple and straight forward.
       -- but eventually these function will break and function will have duplicate lines of codes (i.e. spaghetti code).
    -- Which object-oriented programming (OOP), you combine a group of related variables and function into a unit.
        -- That unit is called an "Object".
        -- variables are called "properties".
        -- function are called "methods".       
    -- In object oriented programming, we group related variables and function on them into objects, which is called "ENCAPSULATION"
        -- for example:
*/
            let salary = 30000;
            let overetime = 10;
            let rate = 20;

            function getWage(salary, overtime, rate) {
                return salary + (overtime * rate);
            }
/*
    -- the example above is a "procedural" implementation

*/