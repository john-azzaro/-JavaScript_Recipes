"use strict";

// OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Document clever uses of logic in javascript code
// SUMMARY //////////////////////////////////////////////////////////////////////////////////////////////////
// What is the problem?:  
//    1. Unfortunatley, there are very few resources on efficient and concise logical structure.  

// What is the BEST solution? 
//     1. 

// What are the special components of these solutions?:  
//     1. 

// What needs work?
//     1. 


// Resource links
// https://medium.freecodecamp.org/a-definitive-guide-to-conditional-logic-in-javascript-23fa234d2ca3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////



// ABOUT LOGICAL OPERATORS...
// 1. There are three essential logical operators: &&, ||, and !.
//    
//       && -- "and" evaluates as true if both values are true.
//              for example: 
//                           const foo = true
//                           const bar = false
//                           const ree = true
//                           
//                           foo && bar;     // false
//                           foo && ree;     // true
//
//       || -- "or" evaluates as true if one of the values evaluates as true.
//              for example:                             
//                           const foo = true
//                           const bar = false
//                           const ree = true
//
//                           foo || bar       // true
//                           foo || ree       // false
//
//       !  -- "exclamation" negates a boolean value.
//              for example:
//                           const foo = true
//     
//                           foo;             // true
//                           !foo;            // false
//
//   Notes on Logical operators and 
//  



// ABOUT TRUTH TABLES...
 
//   A  B       !A        A && B       A || B         A -> B       A === B
// ------------------------------------------------------------------------
//   T  T        F          T            T              T             T
//   T  F        F          F            T              F             F
//   F  T        T          T            T              T             F
//   F  F        T          F            F              T             T
// 