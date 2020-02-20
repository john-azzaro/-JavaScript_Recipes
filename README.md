# JavaScript Recipes

## What's JavaScript Recipes all about?
<dl>
<dd>

**JavaScript Recipes** is a collection of outlines, stuides, models, prototypes, resource lists, and reference documents that examine the many tools and features of my continuing study of the JavaScript language. JavaScript Recipes cover many things, from basic topics such as JavaScript variables, loops, and functions all the way to object oriented programming (OOP) and functional programming paradigms. 

*Please note that JavaScript Recipes is a work in progress since these are distallations of notes and observations, but I'm positive you'll find this collection pretty useful for study and refresh.*

</dd>
</dl>

<br>

## What topics does JavaScript Recipes currently cover?
<dl>
<dd>

Below you'll find the the current list of general topics in this handy collection of JavaScript recipes. Note that each of these general topics have multiple studies and extended studies, so be sure to browse through each folder for the subject you are interested in!

* [JavaScript Outlines](#JavaScript-Outlines)
* [JavaScript Libraries](#JavaScript-Libraries)
* [Coding Studies](#Coding-Studies)
* [Methods Extended Study](#Methods-Extended-Study)

</dd>
</dl>

<br>

## How can JavaScript Recipes help me?

<dl>
<dd>

### Notes are good, Q&A notes are better!

 Learning any subject, especially JavaScript, can be a daunting task. Understanding a multitude of tools, concepts, syntax, structures, and paradigms (just to name a few) which are required to gain a solid understanding of JavaScript can be overwhelming at times. To keep track of these various elements, taking can be an effective way to document all of your research and help avoid spending time going back over material in search of answers previously found. While standard note taking is good, I believe that if notes were composed in a versatile format such as Question/Answer format, anyone can benefit from the hours of hard work you put into them. 

### Science seems to back up Question/Answer format for learning. 

Taking notes in Question/Answer format can help with memory retention *(e.g. do you remember the four key concepts of Object oriented programming?)*, revisons *(i.e. when you learn something new about the subject, you can add that to your answers)*, mind mapping *(how does this fit into the grander scheme of things?)*, and even gets you into the practice of objective technical writing. 

That's where *JavaScript Recipes* comes in.


### JavaScript Recipes is a handy collection of Q&A's!
**The purpose of JavaScript Recipes is to serve as a collection of JavaScript outlines, studies, models, prototypes, reference documents, cheat sheets, etc. in the form of Q&A's to help learners learn and the learned stay refreshed.** 


### So what's so special about these question/answer recipes? 

A *recipe* is defined as a set of instructions for making something. When you make a cake, you follow a recipe to get the right ingredients, the cooking time, etc. Same thing applies to programming! Each *recipe* is a simple question with a variety of answers and practical examples to help you learn and retain that knowledge for future use. Each category folder contains a growing collection *recipes* that examine a particular part of JavaScript, such as outlines of particular subjects in JavaScript like functions in *JavaScript Outlines*. For each of those subjects (e.g. functions, arrays, fibonacci series solutions, concatentation methods, etc.), a variety of answers are available depending on the question, but can include short answers, extended answers, examples, prototypes, etc. to help you learn and retain!

### But please excuse the untidiness...

Please note that the outlines, studies, and extended studies are roughly organized and often repeat and overlap in content and context or are sometimes incomplete. Again, these are transcribed from personal notes and often one question or outline is a condensed version of a few pages of notes and research. I've made it a long term project to add more questions and tidy up so please keep that in mind. In the end, the main objective of this repository is to provide at least a decent resource for others to learn from my own experience.

</dd>
</dl>


<br>

## JavaScript Outlines
* In [JavaScript Outlines](https://github.com/john-azzaro/JavaScript_Recipes/tree/master/JavaScript%20Outlines "JavaScript outlines"), you'll find a wide range of topics organized in question-and-answer format (good for study and memory retention). 



Each question asks about a given topic for a specific category, like "*What is a variable*". In any cases, there is a "short answer" Topics include: *variables, datatypes, functions, control flow, objects, arrays, jQuery, loops, application logic, api's, ajax, etc.* 

**Example:** *JavaScript_Recipes > JavaScript Outlines > [**controlFlow.js**](https://github.com/john-azzaro/JavaScript_Recipes/blob/master/JavaScript%20Outlines/controlFlow.js "control flow outline")*:
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

## JavaScript Libraries
* In [JavaScript Libraries](https://github.com/john-azzaro/JavaScript_Recipes/tree/master/JavaScript%20Libraries "JavaScript Libraries"), you'll find outlines of a growing number of JavaScript libraries organized in question-and-answer format (good for study and memory retention). 

**Example:** *JavaScript_Recipes > JavaScript Libraries > jQuery > [**jQuery.js**](https://github.com/john-azzaro/JavaScript_Recipes/blob/master/JavaScript%20Libraries/jQuery/jQuery.js "jQuery.js")*:

```JavaScript
/*
7. How do you use event listeners with jQuery?
//////////////////////////////////////////////
    • An Event Listener listens for a specific event to happen (i.e. submit, click, etc.) and does 
      something (i.e. callback function).
    • In order to update the DOM, you need to 'listen' for specific events happening.
        • For example:
             • An app LISTENS when the user submits a form.
             • An app LISTENS for when the user inputs a search term.
             • An app LISTENS for when the user clicks on an element in the page to launch an animation.
    • So an EVENT LISTENER has 2 parts:
        1. Specify what event to listen for.
        2. provide a CALLBACK FUNCTION that runs when the event occurs. 

    • Use the ".on" method with the event and the callback to implement an event listener.
        • In the example below, the user listens on main (see event delegation) and, on "click"
          (of the only button in this study) runs a callback function that increments the counter
          by one and displays the updated clickCount.
   */
            function handleClicks() {
                let clickCount = 0;                                          // Stores click count.
                $('.click-counter').text(clickCount);                        // show current click count.
                $('main').on('click', '#clicker', function(event) {          // On click...
                    clickCount += 1;                                         // ... increment by 1...
                    $('.click-counter').text(clickCount);                    // ... show new click count.
                });
            }

            function setUpEventHandlers() {
                handleClicks();
            }

            function initialize() {
                setUpEventHandlers();
            }

            $(initialize);
```


<br>

## Coding Studies
* In [Coding Studies](https://github.com/john-azzaro/JavaScript_Recipes/tree/master/Coding%20Studies "Coding Studies"), you'll find walk-throughs and solutions to complex computer science, programming, algorithm and data structure problems for study and reference. Topics include: *runtime complexity, finding vowels, anagrams, etc*.

**Example:** *JavaScript_Recipes > Coding Studies > [**reverseString.js**](https://github.com/john-azzaro/JavaScript_Recipes/blob/master/Coding%20Studies/reverseString.js "reverse string")*:

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

## Methods Extended Study
* In [Methods Extended Study](https://github.com/john-azzaro/JavaScript_Recipes/tree/master/Methods%20Extended%20Studies "Methods Extended Study"), you'll find extended studies on a variety of methods such as arrays, Math, number, operators, strings, etc. that include additional explanations, break-downs, and use-cases. Although some of the content overlaps with JavaScript Outlines, these studies allow for more detail than in the general outline. 

**Example:** *JavaScript_Recipes > Methods Extended Studies > Array Methods Extended Study > [**entries.js**](https://github.com/john-azzaro/JavaScript_Recipes/blob/master/Methods%20Extended%20Studies/Array%20Methods%20Extended%20Study/entries.js "entries array method")*:

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
    //      EXAMPLE 2: entires using for-loop
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


    // EXAMPLE 2: entires using for-loop

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
