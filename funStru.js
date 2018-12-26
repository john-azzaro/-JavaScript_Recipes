"use strict";

// OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Outline of interesting scripting structures and problem solving methodologies from research, discussions, etc.
// SUMMARY //////////////////////////////////////////////////////////////////////////////////////////////////
// What is the problem?:  
//    1. There are many ways to solve a problem in JavaScript, but very few resources that give basic strucutural examples for beginners.

// What is the BEST solution? 
//     1. Currently, the best solution seems to be that which reduces functions to a single responsibility to make your code more versatile.

// What are the special components of these solutions?:  
//     1. First and foremost, the general structure of a function itself, including ...

// What needs work?
//     1. more interesting ways to think about scripting strucuture 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////





///// ANATOMY OF A FUNCTION //////////////////////////////////////

// WHAT IS A FUNCTION?:
// A function is a repeatable (i.e. can be called multiple times) and determinate (i.e. predictable) process or behavior.

// WHAT COMPRISES A FUNCTION?:


                function add(num1, num2) {                  
                    return num1 + num2;                           
                }
                console.log(add(2,3));     // 5


//              1. "function" referes to the JavaScript keyword about to be described.
//              2. "add" is the name of the function we can invoke elsewhere in the code.
//              3. "(num1, num2)" is comprised of a call signature (i.e. () ) and two parameters (i.e. num1, num2).
//              4. "{ ... }" brackets are the main block of the function to be executed.
//              5. "console.log(add(2,3))" is the line that invokes the function, the numbers in the callsignature inserted into num1 and num2.

// Function 



























// useful problem solving strategies

// 1. Always have a plan
// 2. Restate the problem
// 3. Divide the Problem
// 5. Start with what you know
// 6. Reduce the Problem
// 7. Look for Analogies
// 8. Experiment
// 9. Dont get frustrated
// 10.





// multiply and divide and number, using another function in operation

function minus(divide) {
    return divide - 1;
}

function multiplyDivide2(number, numberToMultiply, numberToDivide) {
    const start = number;
    const multiply = start * numberToMultiply;
    const divide = multiply / numberToDivide;
    const minused = minus(divide)
    return minused;
}

console.log(multiplyDivide2(2,5,2));





// multiplyt and divide a number via chaining variables.


function multiplyDivide(number, numberToMultiply, numberToDivide) {
    const start = number;
    const multiply = start * numberToMultiply;
    const divide = multiply / numberToDivide;
    return divide;
}

console.log(multiplyDivide(2,5,2));





// Example that demonstrates the interconnectivity of a function
// first pay attention tot he arguments in the call signtature.  These are "slots".  In this case, number = 6, numberToAdd = 4, and numberToSubtract = 2.
//also, pay attention to how the variables are chained together and work off the previous one.

function addSubtract(number, numberToAdd, numberToSubtract) {
    let start = number;
        console.log(`first, we start with the number ${start}`);
    let add = start + numberToAdd;
        console.log(`second, when we add ${start} to ${numberToAdd} we get ${add}`);
    let subtract = add - numberToSubtract;
        console.log(`and last, when we subtract ${numberToSubtract} from ${add}, we get ${subtract}`);
}

console.log(addSubtract(6,4,2))








// Objective: Take a string, replace a word in that string, reverse that string using seperated functions

function flip(string) {
    return string.split('').reverse().join('');
}

function print(string) {
    console.log(string);
}

function replace(string) {
     return string.replace("this","that");
 }

function replaceFlipPrint(string) {
    print(flip(replace(string)));
}

function variablesReplaceFlipPrint(string) {
    let replaced = replace(string);
    let flipped = flip(replaced);
    print(flipped); 
}

variablesReplaceFlipPrint("this is a tester string first");
replaceFlipPrint("this is a tester string second");






// Objective: Take a string, replace a word in that string, reverse that string using a single condensed function.

function replaceFlipPrint(string) {
    let replace = string.replace("this","that");
    let flip = replace.split('').reverse().join('');
    console.log(flip);
}

console.log(replaceFlipPrint("this is a tester"));






// Objective: Take a string, replace a word in that string, reverse that string using a single SIMPLIFIED condensed function.

function replaceFlipPrint2(string) {
    console.log(string.replace("this","that").split('').reverse().join(''));
}

console.log(replaceFlipPrint2("This is a tester 2"))


