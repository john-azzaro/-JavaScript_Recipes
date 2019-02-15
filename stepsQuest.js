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


/////// SOLUTION 2 PRIMER (recursive) //////////
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

// MAKE SURE TO CHANGE ARGUMENTS WHEN WE CALL FUNCTION AGAIN ///////////
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
    // then call our function again but chnage the argument to n MINUS 1 (i.e. the the argument has been changed).
    printNumber(n - 1);
}

printNumber(10);

// THINGS TO KEEP IN MIND ABOUT RECUSION //////////////
// 1. figure out the bare minium pieces of information to represetn your problem (i.e. the current counter which is n - 1).
// 2. give reasonable defaults to the bare minimum pieces of info (i.e. we provided the number 10 and we want to subtract 1 from that number).
// 3. check the base case.  is there any work to do? if not, return.
// 4. if we do NOT meet the base case, we do some work (i.e. console.log(n)).  Then we call the function again, making sure the arguments have 
//    changed in some fashion (otherwise we end up in an inifinte recursive issue and it crashes the browser).



// ON REASONABLE DEFAULTS /////////////
// if there are any optional inputs, like passing decriment with a default of 1 (i.e. dec = 1) give some reasonable default input to them.
// in this case, the dec is 1 and we use dec in our counter.

function printNumber2(n, dec = 1) {
    if (n === 0) {
        return;
    }
    console.log(n);
    printNumber(n - dec);
}

printNumber2(10);




///// SOLUTION 2 /////////////////////////////////////

// if (row === n), then we have hit the end of our problem.
// if the 'stair' string has a length === n, then we are at the then of a row.
// if the length of the stair string is less than or equal to the row number we're working on, we add a '#', otherwise add a space.

function steps2(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }
    else if (n === stair.length) {
        console.log(stair);
        steps2(n, row + 1);
        return;
    }
    else if (stair.length <= row) {
        stair += '#'
    }
    else {
        stair += '';
    }
    steps2(n, row, stair);
}





// FIRST PASS //

// the first time we call steps, we have n (i.e. 1,2,3,4 or whatever) but for now its 0, we have a row of 0, and a stair of empty string.
function stepsDemo(n, row = 0, stair = '') {
    // then we ask "is n equal to row?".  in this case no its not because n is equal to some number we put in.  but remember this is the BASE.   
    if (n === row) {
        return;
    }
    // then we ask "is n equal to stair.length".  no its not, because as of now stair is equal to empty string (last parameter in the arguments)
    else if (n === stair.length) {
        console.log(stair);
        steps2(n, row + 1);
        return;
    }
   // then we ask "is stair.length less than or equal to row".  At this point, it IS (row is still 0 and stair is still an empty string)!  
    else if (stair.length <= row) {
        // because it is, we add a '#'
        stair += '#'
    }
    else {
        stair += '';
    }
    // then we call steps again but this time n (of whatever it is), a row still = 0, but now a stair with a '#' instead of being empty.
    steps2(n, row, stair);
}

// so the result so far is a '#'.



// SECOND PASS //

// then we call steps again but this time n (of whatever it is), a row still = 0, but now a stair with a '#' instead of being empty.
function stepsDEMO(n, row = 0, stair = '') {
    // This does not apply, move on...
    if (n === row) {
        return;
    }
    // This does not apply, move on...
    else if (n === stair.length) {
        console.log(stair);
        stepsDemo(n, row + 1);
        return;
    }
    // Now when we get here, stair has a length of 1, which is NOT less than or equal to row (which is still 0)
    else if (stair.length <= row) {
        stair += '#'
    }
    // since all of the above do not apply, we add a space to stair!
    else {
        stair += '';
    }
    // then we call steps again.
    stepsDemo(n, row, stair);
}

// the result on this second pass is a '# ' (and a space!).

// THIRD PASS //
// so at this point we have '# ' (with a space).
function stepsDemo(n, row = 0, stair = '') {
    // not relevant...
    if (n === row) {
        return;
    }
    // not relevant...
    else if (n === stair.length) {
        console.log(stair);
        steps2(n, row + 1);
        return;
    }
    // here, stair.length is equal to 2 (so NOT relevant since 2 is NOT less than or equal to row), so we push down to the ending else...
    else if (stair.length <= row) {
        stair += '#'
    }
    // we add on an additional space...
    else {
        stair += '';
    }
    // call stepsDemo again...
    stepsDemo(n, row, stair);
}

// the result of this third pass is a '#  ' (this time with 2 spaces!).


// FOURTH PASS //
// now suppose that n is equal to 3...
function stepsDemo(n, row = 0, stair = '') {
    // does not apply...
    if (n === row) {
        return;
    }
    // This DOES apply since n (which we say is 3) is equal to stair.length (i.e. the pound with two spaces).
    else if (n === stair.length) {
        // we log out stair (i.e. new line)...
        console.log(stair);
        // cwe then return from this function (do no other work), call the function with the n being 3 (i.e. what we stipulate) and add a row!
        steps2(n, row + 1);
        return;
    }
    else if (stair.length <= row) {
        stair += '#'
    }
    else {
        stair += '';
    }
    stepsDemo(n, row, stair);
}






