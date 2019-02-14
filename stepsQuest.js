'use strict';

// OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
//     1. 
// SUMMARY //////////////////////////////////////////////////////////////////////////////////////////////////
// What is the problem?:  
//    1. write a function that accepts a positive number N. the function should console log a step shape with N levels using the # character.
//       make sure that the step has spaces on the right side.
//       example:
//                 steps(2)
//                     '# '
//                     '##'

//                 steps(4)
//                     '#   '
//                     '##  '
//                     '### '
//                     '####'       
//             
//       * so in the example above, when we pass an argument (integer), we'll see two lines
//       * in the example with 4 steps, also note the spaces between the pound and the quote.

// What is the BEST solution? 
//     1. 

// What are the special components of these solutions?:  
//     1. for loop (nested)
//     2. (small note) incrementing string by +=

// What needs work?
//     1. 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


///// SOLUTION 1   ////////////////
/* 
    1. from 0 to n,
        2. create an empty string, 'stair'.
        3. from 0 to n,
            4. IF the current column is equal to or less than the current row...
                5. add a '#' to 'stair'.
            6. ELSE, add a space to "stair".
        7. console.log 'stair.'

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


/////// SOLUTION 2 (recursive) //////////
// REFRESHER ON RECURSION: With recursion, we start off with a function of some type, in this case "printNumber"
// Now lets imagine that we want to make a recursive function called printNumber and that we should be able to pass this function
// a number and it will print from that number down to zero (i.e. printNumber(10).


// So the first thing we always do with a recursive solution is to identify a "base".
// a base case is a case in which we decide there is no more work for us to do and its time to return and stop the recursion process.
// so without thinking about the term base case or anything like that, think back to the description 

function printNumber() {

}

printNumber(10);


