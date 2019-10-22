# JavaScript Recipes

<br>

## What is JavaScript Recipes?
<dl>
<dd>

**JavaScript Recipes** is a collection of JavaScript outlines, studies, models, prototypes, reference documents, cheat sheets, etc. in one convenient place! 

Why do I call these documents "recipes"? A *recipe* is defined as a set of instructions for making something. When you make a cake, you follow a recipe to get the right ingredients, the cooking time, etc. Same thing applies to programming! Each folder contains *recipes* examine a particular part of JavaScript, such as outlines of particular subjects in JavaScript like functions in *JavaScript Outlines*. Each and every document examines one subject (i.e. functions, arrays, fibonacci series solutions, concatentation methods, etc.) in either a step-by-step process with multiple solutions or Question-and-Answer formats. Hope you find these recipes  

</dd>
</dl>

<br>

## What are some of the categories in JavaScript Recipes?
<dl>
<dd>

* In **JavaScript Outlines**, you'll find a wide range of topics organized in question-and-answer format (good for study and memory retention). Topics include: *variables, datatypes, functions, control flow, objects, arrays, jQuery, loops, application logic, api's, ajax, etc.* 

Outline Example: *JavaScript_Recipes > JavaScript Outlines > **controlFlow.js***:
```JavaScript
    /*
    3. What is a switch statement?
    //////////////////////////////
        • A SWITCH statement is a conditional statement that tests whether something is true or false. 
        • a switch statement contains a collection of case blocks.
        • when a switch statement runs, ONLY ONE will get hit and have thier code executed.
            
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
 
* In **Coding Studies**, you'll find walk-throughs and solutions to complex computer science, programming, algorithm and data structure problems for study and reference. Topics include: *runtime complexity, finding vowels, anagrams, etc*.

Outline Example: *JavaScript_Recipes > JavaScript Outlines > **arrays.js***:
```JavaScript
    // OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
    //    Given a string, return a new string with a reversed order of characters.
    //      -- Examples: reverse('hello') => 'olleh'
    //
    // SUMMARY //////////////////////////////////////////////////////////////////////////////////////////////////
    // What is the problem?:  
    //    You need to take a string and reverse it. 
    //
    // What is the BEST solution? 
    //     1. Solution 2 (and by extension solution 1) is the most preferable way since its short, simple, and concise.
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
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

* In **Array Methods Extended Study**, you'll find individual studies on array methods that include explainations, break-downs, use-cases, etc. Additionally, there are more examples take fromexperience and research that might come in handy for beginners as well. Topics include: 

</dd>
</dl>
