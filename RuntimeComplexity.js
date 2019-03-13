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
//     2. non-linear runtime - 
//     3. Quaradic runtime - 

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

//// NON-LINEAR RUNTIME ////////////////////////
/* 
with the for-loop, we had a numbe r(n) and then two nested for-loops.
the key thing to see here is that there is one for loop nested inside the other.
so as we increase the value n, w ehad to do signifigantly more things each time as it was increased by 1.
- so when n was equal to 2, we had 4 things to do (produce 4 characters).
- when we do n = 3, we had nine things to do (and so on).

main thing-- As 'n' increased by one, we have to do much more stuff (n*n) things... this would be N^2, or QUADRATIC RUNTIME.

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


/* 
///// COMMON RUNTIMES ////////////


    Constant Time        -    1        -     No mateer how many elements we are working with, the alo/operation/whatever will always take 
                                             the same amount of time.  So no matter what our input set is (i.e. no matter what input we give to 
                                             the algorithm), it will take the exact amoutn of time to execute the algorithm.  An interviewer might
                                             want you to solve a problem in constant time.

    Logarithmic Time     -    log(n)   -     You have to do this if doubling the number of elements you are iterating over doesnt double the 
                                             amount of work.  Always assume that searching operation are log(n).  Log stands for logorithm, which is 
                                             the math term of taking the logarithm of a number we have.  we have logarithmic time if we doubel the number
                                             the number of elements but doesnt exactly double the amount of work we have to do.  This is important when we
                                             start looking at search algorithms, like searching through a sorted array of data we can assume runs with 
                                             logorithmic time.

    Linear Time          -      n      -     Iterating through all the elements in a collection of data.  If you see a loop spanning from '0' to 
                                             'array.length', you probably have 'n', or linear time.  This is one of the more common run times and
                                             it seems like a lot of the interview questions have this.  

    Quasilinear Time     -  n * log(n) -     You have this if doubling the number of elements you are iterating over doesnt double the amount of 
                                             work.  Alsways assume that any sorting operation is a n*log(n).  This type of runtime complexity is what
                                             we would see if you start to increase the output set to our algorithm but increasing that input set by 1.
                                             so increase the amount of time it took to execture the algorithm by one plus a little bit.
                


*/






