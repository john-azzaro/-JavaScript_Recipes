"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Control Flow and Conditional Statements
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is Control Flow?
//     2. What is an if...else conditional statement?
//     3. What is a switch...case conditional statement?
//     4. What is a ternary operator?
//     5. What are loops and what kind of loops can we use?
//     6. What is a for-loop?
//     7. What is a while loop?
//     8. What is a do...while loop?
//     9. What is an infinite loop?
//    10. What is a for...in loop?
//    11. What is a for...of loop?
//    12. What are the uses of the keywords break and continue in loops?
//    13. What is try/catch/finally?
//
//
// NOTES ///////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful information about control flow and conditional statements from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity. I've put the document in Question
//        and Answer format for improved readability.
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
1. What is control flow?
////////////////////////
   -- control flow allows your code to take certain actions based on certain scenarios.
   -- control flow allows you to dictate how your code runs under different conditions or until a certain condition is met.
   -- control flow can be achieved in 2 ways:
        -- conditional (if, else-if, else).
        -- try/catch/finally.
*/


/*
2. What is an if...else conditional statement?
//////////////////////////////////////////////
   -- A conditional uses a command and executes whatever is in the curly braces if the expression evaluates true.  
   -- `if` always comes first in an if...else conditional statement.
   -- `else if` is used if there is more than one condition in the if...else condtional statement.
   -- `else` comes at the end if none of the previous blocks of code are executed.

   -- Below is an example of a if..else conditional statement:

                if (condition) {                     // if the FIRST condition evaluates true...
                     statement;                      //... return this statement.
                } else if (anotherCondition) {       // if the SECOND condition evaluates true...
                     statement;                      //... return this statement.
                } else if (anotherCondition) {       // if the THIRD condition evaluates true...
                     statement;                      //... return this statement.
                } else {                             // if NONE of the conditions above evaluate true...
                     statement;                      //... return this statement.
                }
                
    -- In a functional example:
*/       
                function guessPrimaryColor(str) {
                    let color = str;
                    if (color === 'red') {
                        console.log(`correct! One of the primary colors is red!`);
                    } else if (color === 'blue') {
                        console.log(`correct! One of the primary colors is blue!`);
                    } else if (color === 'green') {
                        console.log(`correct! One of the primary colors is green`);
                    } else {
                        console.log(`sorry, that's not a primary color.  Try again!`)
                    }
                }

                guessPrimaryColor("red");      //-> correct! One of the primary colors is red!
                guessPrimaryColor("blue");     //-> correct! One of the primary colors is blue!
                guessPrimaryColor("green");    //-> correct! One of the primary colors is green
                guessPrimaryColor("yellow");   //-> sorry, that's not a primary color.  Try again!

/*   
     -- in another example using more complex conditional logic:
*/
                function greeting(num) {
                     let hour = num;                             // we turn our input into a variable...
                     if (hour >= 6 && hour < 12) {               // if the hour is less than or equal to 6 AND less than 12...
                        console.log(`Good morning!`);            // return statement.
                     } else if (hour >= 12 && hour < 18) {
                        console.log(`Good afternoon!`);
                     } else if (hour >= 18 && hour < 24) {
                        console.log(`Good evening!`);
                     } else {
                        console.log(`Go to bed`);
                     }
                }
                greeting(6);
                greeting(16);
                greeting(22);
                greeting(2);


/*
3. What is a switch...case statement?
/////////////////////////////////////
    -- A SWITCH statement os a conditional statement that tests whether something is true or false. 
    -- a switch statement contains a collection of case blocks.
    -- when a switch statement runs, ONLY ONE will get hit and have thier code executed.
        
    -- a switch statment works like this:
                - a switch statement starts with the statement itself (i.e. switch ).
                - the statement is followed by parentheses.  HOWEVER, instead of a conditional statement (if..then) we add a VARIABLE.
                - this variable will be compared to each case statement in the code block.
                - inside the body of the switch statement, we have one or more CASE STATEMENTS.
                - each case statement will be compared to the variable at the beginning of the case statement.
                
*/
                function role(str) {
                        let user = str;                               // the input is assigned to the `user` variable that we will use from now on.
                            switch (user) {                           // we start the switch statement with keyword and the variable to compare.
                            case "guest":                             // the first case we compare is `admin` to the value of `user`...
                                console.log(`Guest User`);            // ... if `admin` equals the value of `user` execute this code ONLY...
                                break;                                // ... and if this case was TRUE, then we BREAK out of the switch statement.
                            case "moderator":
                                console.log(`Moderator!`);
                                break;
                            default:
                                console.log(`Unknown User!`);
                        } 
                    }
                    
                    console.log(role("guest"));
                    console.log(role("moderator"));
                    console.log(role("Tom"));



/*
4. What is a ternary operator?
//////////////////////////////
    -- A TERNARY OPERATOR is short-cut conditional statement.
    -- A ternary operator is the only JavaScript operator that takes three operands. 
    -- In the example below, we want to determine whether a person can drink (or not).
    -- Also note that although you dont need the parentheses fro the logical expression, it does help in visual identification.

            let canIDrink            -- is the keyword and variable name.
            (age >= 21)              -- This is the logical expression, specifically IF age is greater or equal to 21...
                 ?                   -- If this condition is true...
            'Yes, you can drink'     -- Return this.
                 :                   -- If the condition is false...
            'No, you cannot drink'   -- The value returned if the condition is false.
*/

                let age = 21;
                let canIDrink = (age >= 21) ? 'Yes, you can drink' : 'No, you cannot drink';    
                console.log(canIDrink);   //-> Yes, you can drink
/* 
    -- Additionally, a ternary operator is right-associative, so conditions can be chained together.
    -- Note that the format can be a single line or multiple lines depending on your format preference.
*/
                let direction = 'right'
                let myDirection = (direction == 'left') ? 'wrong direction' : (direction == 'right') ? 'right!' : 'where are you going?';
                console.log(myDirection);

                //or//

                // let myNumber = 4;
                // let result = (myNumber == 1) ? "a" 
                //         : (myNumber == 2) ? "b" 
                //         : (myNumber == 3) ? "c" 
                //         : (myNumber == 4) ? "d" 
                //         : "e"; 
                //         console.log(result));


/*
5. What are loops and what kind of loops can we use?
////////////////////////////////////////////////////
        - loops allow you to iterate (repeat) a set of instructions a set number of times OR until a specific condition is true.
        - loops are a generic way for repeating code with control over how many times the code repeats.
        - There are THREE kinds of loops you can create in JavaScript:

                -- for loops
                -- while loops
                -- do...while loops

        - each of these loops allow you to specify the code we want to repeat a number fo times and a way to stop 
          the repitition when a condition is met.

        - there are also TWO kinds of loops we can use to iterate over the properties of an object or elements in an array.

                -- for...in loops
                -- for...of loops
*/


/*
6. What is a for-loop?
/////////////////////
   -- A for loop repeats an action a number of times
   -- A for loop allows you to repeat a set of instructions a set number of times UNTIL the expression you specify returns false.
   -- A standard for loop code would look like this:

                initialization         condition       final expression
                             \           |            /
                    for ( let  i = 1; i <= countTo; i++ ) {...}     
                                                            \
                                                             block of code that runs through every iteration in the loop

   -- from the example above, you have 3 statements:
            1. initialization.
            2. continued condition being true.
            3. final expression

    -- INITIALIZATION 
        -- initialization is where the initial expression where we start the loop.
        -- so you declare your LOOP VARIABLE with `let` and name it i (short for index) and set it to what you need.
        -- if you want to increment, you start at the lowest number (i.e. 1 or 0).
        -- if you want to decrement, you start with the value or the variable count you have in a seperate variable.
        -- in the example above, we have initialized the variable to 1.
        -- at the end, use a semi-colon to terminate the statement.

    -- CONDITIONAL 
        -- conditional compares i to something else.
                -- the loop will run as long as this condition is TRUE.
                -- for example:
                        -- i < 5            //-> 1,2,3,4     - as long as the loop is LESS than 5, the loop will execute.
                        -- i <= 5           //-> 1,2,3,4,5   - as long as the loop is less than or equal to 5, the loop will execute.
                        -- countTo = 4     
                            i <= countTo     //-> 1,2,3,4,5   - as long as the loop is less than or equal to countTo (4), the loop will execute.
                        
                        -- Remember, terminate the statement with a semi-colon.
                
     -- FINAL EXPRESSION 
                     - (aka increment or decrement expression) adds (or subtracts) what you specify as the loop goes through.                                  
*/


         ///// STANDARD FOR LOOP UP (INCREMENTING) //////////////////////////////////////////////

                function countUp() {
                        const countTo = 10;
                        for (let i = 0; i <= countTo; i++) {
                        console.log(i);
                        }
                }
                console.log("FOR loop -- incrementing UP")
                console.log(countUp());
    
    
        ///// STANDARD FOR LOOP DOWN (DECREMENTING) ///////////////////////////////////////////

                function countDown() {
                        const countFrom = 10;
                        for (let i = countFrom; i >= 0; i-- ) {       // note that the decrement inverts the initialization and conditional.
                        console.log(i);
                        }
                }
                console.log("FOR loop -- decrementing DOWN")
                console.log(countDown());


        ///// STANDARD INCREMENTING LOOP (LABEL EVEN OR ODD) ////////////////////////////////

                function countUpEvensAndOdds() {
                        const theCount = 10;
                        for (let i = 1; i <= theCount; i++) {
                             if (i % 2 === 0) {
                                console.log(`the number ${i} is even`);
                             } else {
                                console.log(`the number ${i} is odd`);
                             }
                        }
                }
                console.log("FOR loop -- incrementing up counting evens and odds")
                console.log(countUpEvensAndOdds());

                                
        ///// STANDARD INCREMENTING LOOP (PRINT ONLY ODDS) ////////////////////////////////

                function printOddsOnly() {
                        const pod = 10;
                        for (let i = 1; i <= pod; i++) {
                            if (i % 2 !== 0) {
                                console.log(`the number ${i} is odd`);
                            } 
                        }
                }
                console.log("FOR loop -- incrementing up counting odds only")
                console.log(printOddsOnly());



/*
7. What is a while loop?
////////////////////////
    -- while loops are used to run a block of code a set number of times as long as some logical condition is true.
    -- the key difference between a for loop and a while loop is that for loops is that the loop variable (i.e. i = 0) is part of the loop itself.
    -- in while loops, that variable has to be decalred EXTERNALLY.
*/

        function whileLoop() {
            let i = 0;             //-> the variable in the while loop is declared EXTERNALLY.
            while (i <= 5) {       //-> the condition goes in the parentheses...
                console.log(i);    //-> all statements go in the code block...
                i++;               //-> finally, at the end of the block we need to increment i.
            }
        }
        console.log("this is a while loop:")
        console.log(whileLoop());  //-> 0,1,2,3,4,5



/*
8. What is a do...while loop?
//////////////////////////
    -- do...while loops are similar to while loops but are slightly different.
    -- a do...while loop variable must be declared externally like a while loop. 
*/

        function doWhileLoop() {
            let i = 0;
            do {
                console.log(i);
                i++;
            } while (i <= 5);
        }
        console.log(`this is a do..while loop:`)
        console.log(doWhileLoop());


/*
9. What is an infinite loop?
////////////////////////////
    -- an infinite loop execture indefinitly.
    -- an infinite loop is executed by simply forgetting to add the i++ incrementation.

        function infiniteLoop() {
            let i = 0;             
            while (i <= 5) {       
                console.log(i);       // note the omission of the i++ at the end of the while code block. This will crash your editor.              
            }
        }

*/


/*
10. What is a for...in loop?
///////////////////////////
    -- a for...in iterates over the properties of an object.
    -- a for...in loop can also be used to iterate over an array, but it is not an ideal way.
    -- we start out with an object (person) with two properties (name and age).
  
    -- we start out with an object (person) with two properties (name and age).
*/
                var myObject = { "key1" : "value1", 
                                 "key2" : "value2", 
                                 "key3" : "value3" }
/*
    -- if we want to display all the properties of this object, we use the for..in loop.
    -- a for...in loop we dont have the classic three part design (i.e. (initial expression; condition; increment) ).
    -- instead we only have TWO parts:

                properties    (in)   object
                        \           /        
                for (let key in person) 

    -- essentially, we are looping through the properties (i.e. key) in the object (person).    
    -- below, we loop through the properties of 'forInObject' 
*/      
                for (let key in myObject) {     
                        console.log(key);           
                }                                //-> key1 
                                                 //   key2 
                                                 //   key3
/*
    -- to display the values of an object, we can use either:
        --  dot notation (i.e. person.name)
              /or/
        --  bracket notation (person['name'])

    -- remember that if you dont know ahead of time what property we want to access, use bracket notation with is calculated at runtime.
    -- also remember to add quotes
*/
                for (let key in myObject) {     
                        console.log(myObject[key]);           
                }                                       //-> value1 
                                                        //   value2
                                                        //   value3
/*
     -- and then if we want to print out the key AND value, all we need to do is specify that in the console.log.
*/
                for (let key in myObject) {     
                        console.log(key, myObject[key]);           
                }                                             //-> key1 value1 
                                                              //   key2 value2
                                                              //   key3 value3
/*
    -- now suppose you wanted to use a for...in loop to iterate over an ARRAY.
    -- to do this, instead of using 'key' you would use 'index':
    -- HOWEVER, using a for...of loop is more ideal for iterating over arrays.
*/

                let colors = ['red', 'green', 'blue'];

                for (let index in colors) {
                        console.log(index, colors[index]);
                }                                              //-> 0 red
                                                               //   1 green
                                                               //   2 blue




/*
11. What is a for...of loop?
////////////////////////////      
    -- for...of loops are used to iterate over the items in an array
    -- for...of loops are introduced in ecma6 and function just like the for...in loop.
    -- with the for...of loop, we dont have to deal with the index (from the example above) or access the element at the given index.
    -- in the example below, color (our loop variable) will hold one of the items in the array.
*/
                for (let color of colors) {
                        console.log(color);
                }                                             //-> red
                                                              //   green
                                                              //   blue

                

/*
12. What are the uses of the keywords break and continue in loops?
//////////////////////////////////////////////////////////////////
    -- the keywords break and continue can change how the loop behaves.
    -- for example, suppose we want to jump out of a loop when a condition is true (i.e. i === 5).
        -- in this case, we would use a `break`
*/
                function breakOut() { 
                        let i = 0;                          // the initial value of i is equal to 0.
                        while (i <= 10) {                   // the loop runs as long as i is less than or equal to 10...
                        if (i === 5) {                      // HOWEVER, if i = 5... 
                                break;                      // BREAK out of the loop.
                        }
                        console.log(i);                     // print i and increment as long as i <= 10 AND as long as i is NOT equal to 10.
                        i++;     
                        }
                }
                console.log(`below is an example of break`);      
                console.log(breakOut());                             //-> 0
                                                                        //   1
                                                                        //   2
                                                                        //   3
                                                                        //   4
/* 
        - with the keyword `continue`m we can jump back to the beginning of the loop when a certain condition is true.

        - below, when we are going through the while loop.
                - IF the number is an odd number (i.e. 2,4,6,8) with the code i % 2 === 0, the loop will increment.  
                - HOWEVER! When we insert `continue` as the last bit of our code, we jump back to the beginning of the while loop.
                 - by doing this, we DO NOT print the odd numbers... only the even ones.
                 - so after the 2 is skipped, the next step of the iteration occurs (i.e. 3) and the if statement does not execute because 3 is not odd.
*/
                function continueOn() { 
                        let i = 0;                          // the initial value of i is equal to 0.
                        while (i <= 10) {                   // the loop runs as long as i is less than or equal to 10...
                           if (i % 2 === 0) {               // when it shows an odd numnber (i.e. 2,4,6,8)
                                i++;                        
                                continue;
                           }     
                        console.log(i);                     // print i and increment as long as i <= 10 AND as long as i is NOT equal to 10.
                        i++;     
                        }
                }
                console.log(`below is an example of continue`);      
                console.log(continueOn());                              //-> 1
                                                                        //   3
                                                                        //   5
                                                                        //   7
                                                                        //   9
                                        
                                                                    
/*
13. What is try/catch/finally?
//////////////////////////////
    -- the try/catch/finally statement is JavaScripts exception handling mechanism.
    -- try/catch/finally is used to catch errors in our programs.

    -- the 'try' clause defines the block of code whose exceptions are to be handled.
        -- simply put, 'try' is the block of behavior to be tested.
    -- the 'catch' clause is a block of statements invoked when the exception has occured anywhere in the 'try' block.
        -- simply put, the 'catch' is the block that runs if the 'try' block fails.
        -- 'catch' is also always folloed by an identifier in parentheses (i.e. e).
            -- it is like a function parameter when the exception is caught the value associated with it it is assigned to the 
               parameter.
    -- the 'finally' block contains cleanup code that is guarenteed to be executed regardless of what happens in the 'try' block.
        -- this is optional... the block will run whether the block runs or not.

*/
       function fail() {
           try {                                   // try anything in this block...
                console.log('this works');
           } catch (error) {                       // if there are any errors, handle them in 'catch'...
                console.log('theres a mistake')
           }
       }
       console.log(fail());                        // if you try this, the code works and catch block was never called.

/*
    -- But what if we alter the code in the try block so that it DOES NOT work.
*/

        function fail2() {
            try {                                       // try anything in this block...
                consol.log('this works');               // console.log is misspelled...
            } catch (error) {                           // catch runs...
                console.log('theres a mistake')         // prints 'there is a mistake'...
                console.dir(error);                     // when you call console.dir with the error object, this prints the stack trace.
            }
        }
        console.log(fail2());                         




/*
Resources
//////////
-- JavaScript - the Definitve guide.
*/