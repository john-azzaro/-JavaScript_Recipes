"use strict";
// template for recipes

// OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
//    1. Central collection point to put snippets, concepts, and ideas 
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



// Now we can write that as a switch statement. Since we're checking a range, we will perform the operation in 
// each case to check if each expression is evaluating to true then break out of the statement once the 
// requirements for true have been satisfied.
// https://www.digitalocean.com/community/tutorials/how-to-use-the-switch-statement-in-javascript


function whatGradeIsIt(num) {
    const grade = num;
    switch (true) {
        // If score is 90 or greater
        case grade >= 90:
            console.log("A");
            break;
        // If score is 80 or greater
        case grade >= 80:
            console.log("B");
            break;
        // If score is 70 or greater
        case grade >= 70:
            console.log("C");
            break;
        // If score is 60 or greater
        case grade >= 60:
            console.log("D");
            break;
        // Anything 59 or below is failing
        default:
            console.log("F");
    }
}

console.log(whatGradeIsIt(99));
