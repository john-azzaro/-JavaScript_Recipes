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
// REFRESHER ON RECURSION: 

// USING RECURSION IN A FUNCTION ////////
//With recursion, we start off with a function of some type, in this case "printNumber"
// Now lets imagine that we want to make a recursive function called printNumber and that we should be able to pass this function
// a number and it will print from that number down to zero (i.e. printNumber(10).

// IDENTIFYING THE BASE /////////////////
// So the first thing we always do with a recursive solution is to identify a "base".
// a base case is a case in which we decide there is no more work for us to do and its time to return and stop the recursion process.
// so without thinking about the term base case or anything like that, think back to the description 
// so when we evoke the function printNumber, we want to go from whatever number is passed (i.e. 10) and then go all the way down to zero
// and then at zero we stop and we do no more work.

// so to think of a base case situation, if the number that is being passed to the function (i.e. what argument we are passing is) is equal to zero, 
// that means there is nothing else we need to do, we have hit the base case and we want to STOP RECURSION.

// SETTING UP OUR FUNCTION /////////////
// so lets pass in the number "n"
// in the first "if" statement, IF n is equal to 0, then we simply RETURN... we want to do NO MORE WORK during the recursion process.
// nailing your base case like this is absolutely critical during the recursion process.
// its important to think about your base case in general.
// some people try to do the base case at the end and it will end up in an infinite recursive solution that difficult to debug.

// AFTER THE FIRST IF STATMENT /////////
// so after we do the initial if statement, we do some amount of work and then call the function again.
// in this case, the work that we want to do is to print out the current number.
// THEN, we call the function again.

// When we call the function again, it is critical to make sure that we have changed the arguments is some fashion.
// so if we call printNumber again with n, we are going to enter an infinite loop because we have not chnaged the arguments and the exact same code 
// path will occur

function printNumber(n) {
    // if we meet the base case (i.e. if n is equal to zero, do no more work in the recursive process)
    if (n === 0) {
        return;
    }
    // the work we want to do is print out the current number.
    console.log(n);
    // then call our function again.
}

printNumber(10);


