"use strict";



/*
// Q's:
// 1. passing arguments/data to and from functions.

// 2. what kind of arguments can be passed to a function.
    any type of variable structure can be passed
    
// 3. functional programming? where do i go from here?


*/






///// EXAMPLE 1 /////////////////////////////

function replaceIt(string) {
    return string.replace("this", "that");
}

function capitalizeIt(string) {
    return string.toUpperCase();
}

function printIt(string) {
    return console.log(string)
}

function repAndCap(string) {
    printIt(capitalizeIt(replaceIt(string)));
}

console.log(repAndCap("this is a test"))





//// EXAMPLE 2 /////////////////////////

// A
// "hfhjf"

// cant put conditions on a switch

function theGrade(num) {              
    let input = num;                  
    let storedGrade = "F";            
    if (input >= 90) {
        storedGrade = "A"
    } else {
        storedGrade = "Below A"
    }
    console.log(`you scored ${input} which ranks ${storedGrade}`);
    return storedGrade;
    
}

function gradeQuote(num) {
    if (num === "A") {
        console.log("You got an A (score greate than 90)!")
    } else {
        console.log("you got below an A, which is still great!")
    } 
}

gradeQuote(theGrade(90))
gradeQuote(theGrade(85))





// function whatGradeIsIt(num) {
//     const grade = num;
//     switch (true) {
//         case grade >= 90:
//             console.log("A");
//             break;
//         case grade >= 80:
//             console.log("B");
//             break;
//          case grade >= 70:
//             console.log("C");
//             break;
//         case grade >= 60:
//             console.log("D");
//             break;
//         default:
//             console.log("F");
//             break;
//     }
// }

// console.log(whatGradeIsIt(93))






















// if (grade === A) {
//     console.log("You got an A (score greate than 90)!")
// } else {
//     console.log("you got below an A, which is still great!")
// } 
// return grade;  


// function gradeQuote(num) {
//     if (num === A) {
//         console.log("You got an A (score greate than 90)!")
//     } else {
//         console.log("you got below an A, which is still great!")
//     } 
// }

// console.log(theGrade(93))














































// Now we can write that as a switch statement. Since we're checking a range, we will perform the operation in 
// each case to check if each expression is evaluating to true then break out of the statement once the 
// requirements for true have been satisfied.
// https://www.digitalocean.com/community/tutorials/how-to-use-the-switch-statement-in-javascript
// https://medium.freecodecamp.org/functional-programming-principles-in-javascript-1b8fc6c3563f
