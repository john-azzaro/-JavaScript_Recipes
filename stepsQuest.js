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

function printNumber() {

}


