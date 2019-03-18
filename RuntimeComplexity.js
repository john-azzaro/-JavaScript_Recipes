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
                                             so increase the amount of time it took to execture the algorithm by one plus a little bit.  SOOO one PLUS
                                             a little bit for every element we add to out input set.  This is common in sorting algorithms 
                
    Quadratic Time      -   2^n        -    Every eleent in a collection has to be compared to every other element.  This is the 'handshake' problem. 
                                            Like the steps example, as soon as we increase or add one element to our input to the algorithm,it started
                                            to take a lot more time to produce the result set.  The best way to identify a problem like this is to 
                                            picture the 'handshake' problem.  so imagine a group of people standing in a room,if you send an additonal
                                            person into the room and you introduced that new persont o everyone else in the room and you had them shake hands,
                                            that would be essentially an end squared complexity. Each additional element that we add to a given colleciton has
                                            to touch or somehow iterate over every element in the colleciton.

    Exponential Time    -   2^n        -    If you add a *single* element to a collection, the processing power required doubles.  You really want to 
                                            avoid this.  If you suggest an exponential time solution to a problem in an interview, its a big BAD deal.
                                            Important to recognize a solution as inefficient and suggest something more efficient.

*/

/*
///// ODDS AND ENDS AROUND RUNTIME COMPLEXITY ////////////

                        Big O Notation

                        O(n)   --> Linear
                        O(1)   --> Constant
                        O(n^2) --> Quadratic

Big 'O' Notation    -   Big O is another way of referencing runtime complexity.  So after you finish some algorithm, you might be asked what the runtim 
                        complexity of your solution (above).  They may also ask you what the big O of your solution is.  In both cases what they
                        are asking for is the efficientcy of your solution... what is the runtime of your algorithm.

                        Big O notation is a way of writing out this runtime complexity that is commonly seen in the academic world.
                            - So linear notation can be written as O(n) (i.e. O of n)... this indicated linear time.
                            - O(1) (O of 1) would be constant time.
                            - O(n^2) (i.e. O of n squared) would be quadratic.

                            essentially, when you see big O's with an equation in we're talking about run times.
                                
                        The term "Big O" means something different in the academic world but for an interview, runtime complexity and Big-O will
                        ALWAYS be "what is the efficientcy of your algorithm"

*/

/* 
////// IDENTIFYING RUNTIME COMPLEXITY /////////////////////

Note: note on reading: O(n*m) is "n times m complexity"


Iterating with a simple loop though a single colleciton                    -->    Probably O(n)
    - in other words, iterating through a simple for loop.
    - good example is the string reverse example earlier where
      we has a single for loop.  Chances are this is Linear runtime.


Iterating though half a collection                                         -->    Still O(n). ThereThere are no constants in runtime.
    - If we're only iterating through HALF a collection, like only 
      looking at half a string, does that mean n divided by 2?  No.
      Every time you have a for loop iterating over a closed set of 
      data, even if it stops early or stops at half the string, it is
      STILL LINEAR RUNTIME.


Iterating through two *different* collections with seperate for loops      -->    O(n + m)
    - take for example an algorithm that reverses two different strings
      in one function call.  This would be an example of iteration over
      two different collections of data into seperate for loops, 
      spcifically one for loop to reverse the first string and one for
      loop to reverse the other string.  Two seperate for loops.
      So when this happens we add an additonal term to our runtime 
      complexity(i.e. a runtime complexity of n plus m).  The n represents
      the performance impact of the first string and the m represents
      the performance impact of the second string.  We could be passed a 
      very short string as the frst argument for the dual reverse function 
      and then a very complex and long string as the second string.

      In general, anytime you are iterating two completely different sets 
      of data you'll frequently see the runtime complextiy split out to
      two seperate terms.


Two nested for loops iterating over the same collection                    -->    O(n^2)
    - closely related to the previous, if you see nested for loops 
      iterating over the same colleciton, chances are you have quadratic
      runtime or n squared complexity (i.e. n^2). -- see stair and pyramid 
      algo.


Two nested for loops iterating over different collections                  -->    O(n*m)
    - just like the previous again, if you have two nested for loops
      but each one is iterating over a different collection.  Again you 
      might have one collection that is very short and one that is long so
      it would no long be n^2 because we have two DIFFERENT collections
      of data and they might and they might have different lengths in 
      each of them.  This would be refelcted as n*m... not so much different
      then n^2 but here we say "there is this other set of data that is not
      related".


sorting?                                                                   -->    O(n*log(n))
    - commonly used, any time you see any requirement in assorting or a
    a problem for sorting any requirement whatsoever, you can essentially 
    assume it will be n log n runtime.  the best runtime complexity we have
    for sorting something is a log.  If the algo has to sort something, 
    chances are you'll see a term like this in there.


Searching a sorted Array                                                   -->    O(log(n))
    - if you have an array of numbers or a collection of anything that 
    is sorted in some fashion and you have to search through it, chnaces
    are you have a log n complexity from that operation.  so sorting or
    searching will likely have a log in it.


*/


/* 
///// SPACE COMPLEXITY ///////////////////////////////////

So runtime complexity is a reference to the performance of an algorithm in terms of processing power.

The SPACE COMPLEXITY of an algorithm is "how much more memory is required by doubling the problem set"?

Space complextiy is similar in performance but is a reference to how much RAM (or memory) or space an algorithm
need to compleet a given task.

In general you can apply a lot of the same rules of runtime complexity to space complexity.
For example:

In the string reverse example, for every character we added into our input we had one additional character that we needed\
to return in the output set of data.  The amoutn of memory that we spent was LINEAR because for every one additional character
we need one additional element in our string to be added.

Space and runtime complexity are not always going to be identical in many cases they might be different



*/




