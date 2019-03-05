"use strict";
// OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
//     1. How to decide what solution is better than the other

// SUMMARY //////////////////////////////////////////////////////////////////////////////////////////////////
// What is the problem?:  
//    1. 

// What is the BEST solution? 
//     1. 

// What are the special components of these solutions?:  
//     1. 

// What needs work?
//     1. 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
Runtime Complexity
    - Runtime complexity is a term we use to describe how performant an alogrithm is.
    - In other words, runtime complexity describes the performance of an algorithm.

How do you use runtime complexity?
    - we use runtime complexity to compare different solutions to a given problem or different algorithms for solving a given problem 
      in an interview.
    - so in the context of an interview, you will most likely be asked very frquently "what the runtime complexity of a given solution" is.

    - usually, an interviewer will ask you a question and you willk solve it on a computer or whiteboard.
    - then they will turn to you and ask what the runtime comlexity of the solution is.

The Goal of runtime complexity
    - the goal is to have the ability to identify  given runtime complexity.

What are talking baout when we ask about Runtime complexity?
    - we're asking a very discrete question, which is how much more processing power do we need to run a given algorithm or a given solution
      if we increase the number of inputs into our algorithm.

      so take for example the string reverse.
        - we'll look at the iterative example and the  
*/

                function revStrIter(str) {
                    let reversed = '';
                    for (let character of string) {
                        reversed = character + reversed;
                    }
                    return reversed;
                }
/*
    - for this problem, we would have some input string

*/









    function revStr(str) {
        return str.split("").reverse().join("")
    }
    console.log(revStr("this is string"));