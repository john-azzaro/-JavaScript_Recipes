# JavaScript Recipes

<br>

## What is the purpose of JavaScript Recipes?
<dl>
<dd>

The purpose of **JavaScript Recipes** is to serve as a general collection of JavaScript outlines, studies, models, prototypes, reference documents, cheat sheets, etc. in one convenient place!
Much of the content in this repository is taken from personal notes and transcribed in the form of Q&A's which I'm hoping might help others in thier own study and research. 

Why are these documents called "recipes"? A *recipe* is defined as a set of instructions for making something. When you make a cake, you follow a recipe to get the right ingredients, the cooking time, etc. Same thing applies to programming! Each folder contains a growing collection *recipes* that examine a particular part of JavaScript, such as outlines of particular subjects in JavaScript like functions in *JavaScript Outlines*. Each and every document examines one subject (i.e. functions, arrays, fibonacci series solutions, concatentation methods, etc.) in either a step-by-step process with multiple solutions or Question-and-Answer formats. Hope you find these recipes  

*Please note that the outlines, studies, and extended studies are roughly organized and often repeat and overlap in content and context. Again, these are transcribed from personal notes and often one question or outline is a condensed version of a few pages of notes and research. In the end, the main objective of this repository is to provide at least a decent resource for others to learn and add to.*

General topics in this repository include:

* [JavaScript Outlines](#JavaScript-Outlines)
* [Coding Studies](#Coding-Studies)
* [Array Methods Extended Study](#Array-Methods-Extended-Study)

</dd>
</dl>

<br>

<dl>
<dd>

<br>

## JavaScript Outlines
* In [JavaScript Outlines](https://github.com/john-azzaro/JavaScript_Recipes/tree/master/JavaScript%20Outlines "JavaScript outlines"), you'll find a wide range of topics organized in question-and-answer format (good for study and memory retention). Topics include: *variables, datatypes, functions, control flow, objects, arrays, jQuery, loops, application logic, api's, ajax, etc.* 

Outline Example: *JavaScript_Recipes > JavaScript Outlines > [**controlFlow.js**](https://github.com/john-azzaro/JavaScript_Recipes/blob/master/JavaScript%20Outlines/controlFlow.js "control flow outline")*:
```JavaScript
    /*
    3. What is a switch statement?
    //////////////////////////////
        • A SWITCH statement is a conditional statement that tests whether something is true or false. 
        • A switch statement contains a collection of case blocks.
        • When a switch statement runs, ONLY ONE will get hit and have thier code executed.
            
        • A switch statment works like this:
            - a switch statement starts with the statement itself (i.e. switch ).
            - the statement is followed by parentheses. HOWEVER, instead of a conditional 
              statement (if..then) we add a VARIABLE.
            - this variable will be compared to each case statement in the code block.
            - inside the body of the switch statement, we have one or more CASE STATEMENTS.
            - each case statement will be compared to the variable at the beginning of the case statement. */
   
            function role(str) {
                    let user = str;                          // input assigned to `user`.
                        switch (user) {                      // switch statement variable to compare.
                        case "guest":                        // compare `admin` to the value of `user`.
                            console.log(`Guest User!`);      // if `admin` equals `user`, log message.
                            break;                           // if TRUE, BREAK out of the switch statement.
                        case "moderator":
                            console.log(`Moderator!`);
                            break;
                        default:
                            console.log(`Unknown User!`);
                    } 
                }
                        
                console.log(role("guest"));                  // Guest User!
                console.log(role("moderator"));              // Moderator!
                console.log(role("Tom"));                    // Unknown User!
```
 
<br>

## Coding Studies
* In [Coding Studies](https://github.com/john-azzaro/JavaScript_Recipes/tree/master/Coding%20Studies "Coding Studies"), you'll find walk-throughs and solutions to complex computer science, programming, algorithm and data structure problems for study and reference. Topics include: *runtime complexity, finding vowels, anagrams, etc*.

Outline Example: *JavaScript_Recipes > Coding Studies > [**reverseString.js**](https://github.com/john-azzaro/JavaScript_Recipes/blob/master/Coding%20Studies/reverseString.js "reverse string")*:

```JavaScript
    // OBJECTIVE //////////////////////////////////////////////////////////////////////////////////////////
    //    Given a string, return a new string with a reversed order of characters.
    //      -- Examples: reverse('hello') => 'olleh'
    //
    // SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////
    // What is the problem?:  
    //    You need to take a string and reverse it. 
    //
    // What is the BEST solution? 
    //     1. Solution 2 (and by extension solution 1) is the most preferable way since its short, 
    //        simple, and concise.
    //     2. Solution 5 uses the array spread operator which simplifies the process a great deal.
    //     3. Solutions 3 and 4 are more cumbersome but loops are helpful to use.
    //
    // What are the special components of these solutions?:  
    //     1. solutions 1 & 2 -- general scripting strategies (see **funstru** for structural examples).
    //     2. solutions 3 & 4 -- loops (loops over the block of code until a certain condition is true).
    //     3. solutions 5 -- uses array spread operator (i.e. pushes all items into an array).
    //     4. solution 6 -- uses .reduce() method (i.e. have a rray of amounts and want to add them all up).
    //     5. solution 7 -- same as solution 5, but uses es6 fat arrow function instead.
    //     6. solution 8 -- same as solution 6, but uses cleaner code.
    //
    // What needs work?
    //     1. Add commentary to solution 6 and 7.
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Solution 1: 
                
                function reverseString1(string) {
                    const array =  string.split('');
                    array.reverse();
                    return array.join('')
                    }
                    
    // Solution 1 (comments): 

                function reverseString11(string) {
                        // Step 1: Use the split() method to return a new array, 
                        // which results in  ["h", "e", "l", "l", "o"].
                    const array =  string.split('');
                        // Step 2: Use the reverse() method to reverse the new 
                        // created array, which results in ["o", "l", "l", "e", "h"].
                    array.reverse();
                        // Step 3: Use the join() method to join all elements of 
                        // the array into a string, which results in "olleh".
                    return array.join('')
                } 
```

<br>

## Array Methods Extended Study
In [Array Methods Extended Study](https://github.com/john-azzaro/JavaScript_Recipes/tree/master/Array%20Methods%20Extended%20Study "Array Methods Extended Study"), you'll find extended studies on array methods that include additional explanations, break-downs, use-cases, etc. that are briefly dicussed in the arrays.js outline. Although some of the content overlaps, this collection of extended studies gives a little bit more breathing room to include multiple examples. Topics include: *concat, find, every, entries, etc.*

Outline Example: *JavaScript_Recipes > Array Methods Extended Study > [**entries.js**](https://github.com/john-azzaro/JavaScript_Recipes/blob/master/Array%20Methods%20Extended%20Study/entries.js "entries array method")*:

```JavaScript
    // TOPIC ////////////////////////////////////////////////////////////////////////////////
    //
    //     Array Method: .entries()
    //
    // SYNTAX //////////////////////////////////////////////////////////////////////////////
    //
    //     array.entries()
    //
    // SUMMARY /////////////////////////////////////////////////////////////////////////////
    //
    //      • .entries() method returns an array iterator object with key/value pairs.
    //      • .entries() is an inbuilt function used to get a new array that contains 
    //        key/value paris for each index of an array.
    //
    // EXAMPLES ////////////////////////////////////////////////////////////////////////////
    //
    //      EXAMPLE 1: Create an entries iterator object using Object.entries
    //      EXAMPLE 2: entires iterator using for-loop
    //
    // RESOURCES ///////////////////////////////////////////////////////////////////////////
    //
    //      https://www.w3schools.com/jsref/jsref_entries.asp  -- entries w3school
    //
    ////////////////////////////////////////////////////////////////////////////////////////

    // EXAMPLE 1: Create an entries iterator object using Object.entries

    const array = ['alpha', 'beta', 'charlie', 'delta', 'echo', 'frank', 'gold'];

    function createEntriesIterator() {
        const myArray = Object.entries(array);
        return myArray;
    }
    console.log(createEntriesIterator());


    // EXAMPLE 2: entires iterator using for-loop

    const array2 = ["apple", "banana", "carrot", "dates", "eggs"];

    function createAnotherEntryIterator() {
        let iterator = array2.entries();
        for (let i of iterator) { 
        console.log(i); 
        } 
    }
    console.log(createAnotherEntryIterator());

```



</dd>
</dl>
