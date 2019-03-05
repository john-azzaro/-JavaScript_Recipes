"use strict";
// OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
//     1. How to decide what solution is better than the other

// SUMMARY //////////////////////////////////////////////////////////////////////////////////////////////////
// What is the problem?:  
//    1. How to identify the runtime complexity of a given problem

// What is the BEST solution? 
//     1. 

// What are the special components of these solutions?:  
//     1. linear runtime - 

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

                function revStrIter(str) {                    // for this problem, we would have some input string...
                    let reversed = '';
                    for (let character of str) {           // then execute our algorithm or solution here (i.e. the for-loop).
                        reversed = character + reversed;      // -- here we iterated through each character of that string exactly one time
                    }                                         // -- each additional character = 1 step through 1 loop.  This would be 'N', or linear runtime.
                    return reversed;
                }

                console.log(revStrIter("this is a reversed iterative string"))
/*
      - so in the example above, it would be fair to say that as we started to add one additional character to the input of the algorithm, 
        like the the actual input string (i.e. "this is a reversed iterative string"), we had to do one additional step of work. So for each
        one character one additional step.  

      - What this means is that we had  a very LINEAR RUNTIME.
      - we would refer to this as a LINEAR RUNTIME because there is a direct one-to-one relationship between the number of input elements
        that we got into our algorithm and the amount of work we had to use to process it.

      - a lot of the examples so far have been linear runtime but also some that had different runtimes, that is, some that were NOT linear.

      - the pyramid question is a good example for something that is NOT linear.
*/

function steps(n) {
    for (let row = 0; row < n; row++) {
        let stair = "";

        for (let column = 0; column < n; column++) {
            if (column <= row) {
                stair += '#';
            } else {
                stair += " ";
            }
        }
        console.log(stair);
    }
}

console.log(steps(12));










    function revStr(str) {
        return str.split("").reverse().join("")
    }
    console.log(revStr("this is string"));