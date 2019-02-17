"use strict";
// OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Outline of interesting scripting structures and problem solving methodologies from research, discussions, etc.
// SUMMARY //////////////////////////////////////////////////////////////////////////////////////////////////
// What is the problem?:  
//    1. There are many ways to solve a problem in JavaScript, but very few resources that give basic strucutural examples for beginners.

// What is the BEST solution? 
//     1. On strucutre, the best solution seems to be that which reduces functions to a single responsibility to make your code more versatile.
//     2. On problem solving techniques, looking into it.

// What are the special components of these solutions?:  
//     1. Ways to define a structure (i.e. declaration, expression, and es6 fat arrow function)

// What needs work?
//     1. FAQ section (questions and answers I think of or come across whihc I'll just add to the list and organize later)
//     2. More interesting ways to think about scripting structure 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////




// HOW TO THINK ABOUT JAVASCRIPT?:
//    1. A function is a repeatable (i.e. can be called multiple times) and determinate (i.e. predictable) process or behavior.
//    2. Javascript is a functional language meaning that functions are the primary modular units of execution. so functions are 
//     obviously very important in Javascript. 
//    3. Functions in JavaScript are what we call first-class entities.
//    4. We treat functions as values.
//      




// WHAT ARE THE BASICS OF A FUNCTION?:
//              In the example function below we are creating a function that simply adds two numbers together. 
//              Inside the call signature, we have two parameters, num1 and num2.  These are the two numbers that we add together.
//              Inside the block of the function, we have a simple goal... to return the value of num1 plus num2. 

                    function addExample(num1, num2) {
                        return num1 + num2;
                    }
                    console.log(addExample(1,1));

//              1. "function" referes to the JavaScript keyword about to be described.
//              2. "add" is the name of the function we can invoke elsewhere in the code.
//              3. "(num1, num2)" is comprised of a call signature (i.e. () ) and two parameters (i.e. num1, num2).
//              4. "{ ... }" brackets are the main block of the function to be executed.
//              5. "console.log(add(2,3))" is the line that invokes the function, the numbers in the callsignature inserted into num1 and num2.

// good resources: https://blogg.bekk.no/function-creation-in-detail-9d5e754afce4




// IMPORTANT INFO ON FUNCTION NAMES:
//   1. ALWAYS use camelcasing which is where we capitalize the second word in each function name (i.e. thisNameIsGood).
//   2. DONT use reserved word slike let, const, or return.
//   3. ONLY use uppercase, lowercase, or underscore at the beginning of a function name.  $() is also acceptable.
//   4. ALWAYS use meaningful names that describe what the function does.




// IMPORTANT INFO ON CALL SIGNATURES AND PARAMETERS/ARGUMENTS:
//   1. When talking about functions, the terms parameters and arguments are often interchangeably used as if it were one and the 
//      same thing but there is a very subtle difference.  
//           A. Parameters are variables listed as a part of the function definition.
//           B. Arguments are values passed to the function when it is invoked.  
//      Its important to know the difference because JavaScript does not throw an error if the number of arguments passed during a function 
//      invocation are different than the number of parameters listed during function definition. This should make it clear that parameters 
//      and arguments should be treated as two different entities.


// good resource: https://codeburst.io/parameters-arguments-in-javascript-eb1d8bd0ef04
//                https://blogg.bekk.no/function-parameters-in-detail-b0f0d971bec3




///// HOW CAN YOU DEFINE A FUNCTION?:

    // Function Declaration: 1. Hoisted with contents (hoisting is how the browser parses Javascript, reads through once then executes second pass).
    //                       2. Function declarations are hoisted to the top of the top-level or if you have a function declaration inside 
    //                            a function, to the top of that function. 
    //                       3. With function declarations, you can use them above where they are declared.

                    function addDeclaration(num1, num2) {
                        return num1 + num2;
                    }
                    console.log(addDeclaration(2,2))     // 4

    // Function Expression: 1. Not hoisted with contents, but the reference to it may be hoisted if we assign it as a variable.
    //                      2. Functions defined as arguments to functions are expressions.

                    const addExpression = function(num1, num2) {
                        return num1 + num2;
                    }
                    console.log(addExpression(3,3));    // 6

    // ES6 Fat Arrow Function:

                    const addFatArrow = (num1, num2) => num1 + num2;
                    console.log(addFatArrow(4,4))       // 8   




///// HOW CAN YOU STRUCTURE A FUNCTION?: ////////////////////////////////////////////////

// CHAIN OF VARIABLES EXAMPLE:
// first pay attention to the arguments in the call signtature.  These are "slots".  In this case, number = 6, numberToAdd = 4, and numberToSubtract = 2.
//also, pay attention to how the variables are chained together and work off the previous one.

function addSubtract(number, numberToAdd, numberToSubtract) {
    let start = number;
        console.log(`First, we start with the number ${start}, which is the first slot of the call signature`);
    let add = start + numberToAdd;
        console.log(`Second, when we add ${start} to ${numberToAdd} (the second slot in the call signature), which gives us ${add}`);
    let subtract = add - numberToSubtract;
        console.log(`Last, when we subtract ${numberToSubtract} (the third slot in the call signature) from ${add}, where we get ${subtract}`);
}

console.log(addSubtract(6,4,2))        //  first, we start with the number 6
                                       //  second, when we add 6 to 4 we get 10
                                       //  and last, when we subtract 2 from 10, we get 8
                                       //  undefined






// CHAIN OF VARIABLES v2 EXAMPLE:
// the start being the initial number (i.e. the first "slot" in the call signature.
// the second variable "mulitply" takes the initial number and multiplies that by the second "slot" in the call signature.
// the third variable takes the second variable (i.e. multiply) and divides it by the third "slot" in the call signature.
// last, we return divide.

function multiplyDivide(number, numberToMultiply, numberToDivide) {
    const start = number;
    const multiply = start * numberToMultiply;
    const divide = multiply / numberToDivide;
    return divide;
}

console.log(multiplyDivide(2,5,2));    // 5






// CHAIN OF VARIABLES W/ ANOTHER FUNCTION:
// The FIRST variable (i.e. started) uses the first "slot" (i.e. number) which we assign the value of 1.
// The SECOND variable (i.e. multiplied) passes the value of the variable "started" and multiplies it by the second slot (i.e. numberToMultiply) with the value 5.
// The THIRD variable (i.e. divided) takes multiplied and divides by the third slot (i.e. numberToDivide).
// The FOURTH variable uses an outside function to perform the last task which is to subtract 1 from the result of divide.
//     -- To outside function is passed the result of divided as a parameter, which we can use to subtract from 1.
// Lastly, when we return subtracted at the end of the function we draw on the subtract function

function subtract(divide) {
    return divide - 1;
}

function multiplyDivide2(number, numberToMultiply, numberToDivide) {
    const started = number;
    const multiplied = started * numberToMultiply;
    const divided = multiplied / numberToDivide;
    const subtracted = subtract(divided)
    return subtracted;
}

console.log(multiplyDivide2(2,5,2));






// 
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

console.log("// RFP RESULT:")
replaceFlipPrint("this is a tester string for replaceFlipPrint");




/// EXAMPLE 2 /////////////////

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





function flip(string) {
    return string.split('').reverse().join('');
}

function print(string) {
    console.log(string);
}

function replace(string) {
    return string.replace("this","that");
 }

function variablesReplaceFlipPrint(string) {
    // let replaced = replace(string);     // replaced is not used in this example
    let flipped = flip(string);
    print(flipped); 
}

console.log("// VRP RESULT:")
variablesReplaceFlipPrint("this is a tester string for variablesReplaceFlipString");













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





// scratch

// function collectData() {
//     const numbers = [1,2,3,4,5];
//     const string = "This is a mighty string";
//     const putEmTogether = [...numbers] + [...string];
//     console.log(putEmTogether);
// }

// console.log(collectData());

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

