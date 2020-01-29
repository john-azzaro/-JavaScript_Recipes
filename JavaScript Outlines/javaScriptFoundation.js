'use strict';
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Foundations of JavaScript
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is a program?
//     2. What is JavaScript?
//     3. What is the history of JavaScript?
//
//
//
// NOTES ///////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on establishing the foundations of JavaScript from study, research, tutorials,
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        and Answer format for improved readability.
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
1. What is a program?
////////////////////
==SHORT ANSWER==
    •  A program is a set of instructions a computer carries out.
  
==EXTENDED ANSWER== 
    •  The skill of a programmer is finding a solution to a problem and implementing those solutions with a programming language
       so the computer can execute it.
    •  programming is like learning a language, where you need to learn new words, punctuation, and putting all these things 
       together to successfully communicate.
    •  Programming languages, like JavaScript, have thier own keywords an characters, as well as rules for putting them all together.
    •  This is called the 'syntax' of the programming language.
    •  A computer program (i.e. scripts) would be as simple as added a bit of javascript to your webpage.
    •  Programs work by manipulating values, like numbers or text.
    •  A program retains a values in a variable, which is and allows that value to be refered to by name.
*/

/*
2. What is JavaScript?
/////////////////////
==SHORT ANSWER==
  •   Javascript is a client-side langauge, meaning that it works inside a web browser.
        o    conversely, a server-side language would be node.js.

==EXTENDED ANSWER==
    •  JavaScript is the only language that can be used on all modern browsers.
    •  JavaScript is specified by ECMA and W3C specs.
    •  JavaScript relies on individual browsers to handle how to implement ECMA and W3C specifications. 
    •  JavaScript is used in two ways:
          o  First, modeling and manipulating data and proceses.
          o  Second, interacting with browser elements.
    •  The JavaScript interpreter performs automatic 'garbage colleciton' for memory management, meaning the program can create objects
       and the programmer does not need to worry about destruction or deallocation of those objects.  
          o  when the program has no way to refer to it (no longer reachable), the interpreter automatically reclaims the memory it occuiped.
*/

/*
3. What is the history of JavaScript?
/////////////////////////////////
==SHORT ANSWER==
    •	 Created in 1995 by Brandon Eich to make it easier to add interactive and dynamic element to websites, .
    
  Why JavaScript?
  ==============
    •	  Initially, websites just existed as pages of HTML, CSS, and some plugins in Java.
        o	  When JavaScript first became a thing, resources seemed to be very limited (take JS code and alter).
    •	  JavaScript was first created in 10 days in 1995 by Brandan Eich to make it easier to add interactive and dynamic elements to websites.
    •	  Orginally called "LiveScript", but was changed back to JavaScript as a marketing decision because Java was so popular at the time. 

  Improvements in Standardization
  ===============================
    •	  Over time, competing versions of JavaScript emerged, so it was taken to ECMA International so an official standard could be formed.
        o	  Initially, JavaScript was not properly standardized and browsers were problematic (IE, netscape) and all of them had different
            ways of dealing with the langauge.
    •	  When the web standardization movement came around (and html5 became accepted), browsers became standards-based and JavaScript 
        language development did not need to chase after the browser standards. 
    •	  jQuery initially became a way to level the playing field, but now browsers are good and standards have improved so much to
        the point where that you may not even need to use jQuery because you are adding extra code for an enviroment that doesnt exist
        anymore.
    •	  ECMA standardizations are now used to reference version (e.g. ES5, ES6, etc.) and now year-based version (e.g. ES2017, ES2018, etc.).
*/

/* 
What are some types of programmers?
////////////////////////////////////

  What is a front-end programmer?
  ================================
  •  A front-end programmer takes designs from designers and use HTML, CSS, and JavaScript to create a website.
  •	 Front-end programmers solve problems such as optimizing loading speeds, how the website fits on the screen 
     (i.e. responsive design), and translate design mockups and apply them to websites, and requests to API's.
     

  What is a back-end progammer?
  =============================
  •	 A back-end developer manages the interactions between clients and servers.
  •	 

*/

/*
Problem solving
////////////////
    •	 Problem solving is hard because learning programming syntax uses a different "mental muscle" or "mental hemesphere" than problem solving.
      •	 LEFT BRAIN activity involves programming syntax, readign programs, memorizing elements of an API which are analytical in nature.
      •	 RIGHT BRAIN activity involves using those left-brain analytical skills and applying them with right-brain creativity.
    •	 Problem solving is a CREATIVE activity
      •	 For example, problem solving would be like figuring out how to get something on a high shelf without a ladder.
    •	 Problem solving is the systemac approach to OVERCOMING an issue rather than AVOIDING it.
  
  What is problem solving?
  =======================
    •	 Problem solving is writing an orginal program that perfoms a particualr set of tasks and meets all stated constraints.

  What are constraints?
  ====================
    •	 Constraints include:
      •	 programming language.
      •	 performance.
      •	 memory footprint.


  Problem Solving Methdologies
  ============================
    •	 First, list the constraints of your problem.
      •	 e.g. Farmer can only take one item in the boat at one time.

    •	 Second, list the order of operations.
      •	 e.g. Carry the fox to the far side of the river.
      •	 e.g. Carry the hen to the far side of the river.
      •	 e.g. Carry the grain to the far side of the river.

    •	 Third, make those operations generic, or parameterized 
      •	 e.g. Row boat from the far side of the river.
              IF boat is empty, load item on boat.
              IF boat is NOT empty, unload item on shore. 

    •	 Remember to think about the problem in the most general terms.'
    •	 Think about all the possible sequences of moves in a problem.
    •	 Restate the problem in a formal manner.
    •	 When faced with an onerous problem, experiment with a reduced version of the problem, which provide invaluble insights.
    •	 recognize analogies to solve problems (e.g. A solution in the lotto app could apply to a current issue as well).


  Useful problem solving strategies
  =================================

    1. Always have a plan
      •	 A plan lets you set intermediate goals and achieve them.
      •	 Without a plan, you have only one goal... solve the whole problem which is difficult to do.

    2. Restate the problem
      •	 Restating the problem sometimes show the goal isnt what we originally thought it was.
      •	 Restatement can help you take a problem assigned to you to that person and confirm your understanding.
      •	 Restatement is also a necessary prereqisite for thing slike reducing and dividng a problem.

    3. Divide the Problem
      •	 Dividing a problem puts it into steps of phases that make the problem much easier.
      •	 Dividing a problem can often lower the difficulty a great deal.

    5. Start with what you know
      •	 Start with what you know and work out from there.
      •	 Starting with a partial solution may spark ideas about the rest of the problem.
      •	 Starting with what you builds confidence and momentum towards your goal.
      •	 Starting with what you know can apply to cases where you havent divided the problem

    6. Reduce the Problem
      •	 Reducing the problem means reducing the SCOPE of the problem by adding or removing constraints to produce a 
         problem that you know you can solve.
      •	 Reductions simplify the problem so you can handle it more easily.
      •	 Reductions help solve a problem when we cant figure out how to divide a problem into steps into steps.
      •	 Reducing a problem means we're not working on the FULL problem but problems that have enough in common to 
         with the full problem where we will make progress towards the ultimate solution.
      •	 Reduction allows us to pinpoint exactly where the remaining difficulty lies.

    7. Look for Analogies
      •	 An analogy is a similarity between a current problem and a problem already solved which can help solve
         current problem.
      •	 Analogies are not always direct and similarities in problems are not always full, but sometimes partial.
      •	 Reasoning by analogy is a difficult skill to develop because you cannot reason by analogy without a storehouse
         of previous solutions for reference.
      •	 This is where many programmers cut corners, finding code similar to what they need and modifying it.
          •	 this is a mistake because without developing your own solution, you wont understand and internalize it.
          •	 Second, this is a potnetial analogy for future reference so understanding the solution is critical. 

    8. Experiment
      •	 Experimenting is to try something and observe the results.
      •	 Experimenting is not the same as guessing and seeing if it works.
  




    1. Break problem into components.
    2. Write code to solve those components individually.
    3. Use the knowledge from writing the programs or lines of codes to solve the orginal program.
 */

// useful problem solving strategies

/*
Balance of active vs passive(conceptual) learning strategies
  •	 spend good time on conceptual learning, but never neglect practical application by coding
Applying spacing to learning
  •	 use effective memorization techniques or space the top out over a few days.
  •	 avoid cramming
teaching the concepts you learn
  •	 when you formulate an idea, you learn so much more.
  •	 you find grey areas while teaching
keep track of questions
  •	 keeping track of your "why's".
  •	 if you dont track what you dont know, you have gaps that can be frustrating.
pace yourself so you can recover
  •	

*/


/* 
Advice on learning to code
//////////////////////////
* You shouldnt take to classes from places like university or bootcamp or self-teaching expecting to learn all substantive programming.block
* Substantive programming come from learning on your own when you go back and compile and synthesize all the information from notes, tutorials, mentors, etc with commerical
  outlines into your own personal outline. This is where you being to learn and understand programming.
* But classes do have particular spins on programming that you can benefit from.
* Also, do your outlines as often as possible, it is a roadmap for yourself. So if you were doing your outlines every week, you start from there and then you iterate over it. In this way,
  you can put more time into memorization and building prototypes than blunt note taking.

*/





/* 
Computational Thinking
=-=-=-=-=-=-=-=-=-=-=-=-=- https://www.youtube.com/watch?v=azcrPFhaY9k
1. Programming isnt about languages.
  * coding has 8 universal main concepts:
    1. 


    * write out the concepts first, then convert to code.
    * most beginners think they dont understand what code to write... but the 
      the answer is that they dont understand the problem. they're trying to solve.
    * comments are code.

2. 


*/








/* 
Solving Programing problems - YT - How to solve problems fatser when programming
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


1. Try to think of example of the problem and what they might yield. 
    • What goes in and out, what if you use x, y, or z?
    • Doing this allows ou to gain insight into the problem.

    EXAMPLE: Write a function called oddOrEven that takes one number and returns whether it is even or odd?
    • This is essentially invoking the function at the END with the arguments FIRST!!!
    • MAIN THING: be able to plug in examples and try to start figuring out the dynamic of the problem

      oddOrEven(5);                  // "odd"
      oddOrEven(2);                  // "even"
      oddOrEven(06782543);           // "odd"
      oddOrEven('hello');            // error   (edgecase)

2. Visualization
    • Imagine what you have to do in orfder to reach the solution.  
    • use flow charts, diagrams, sketches, whiteboarding, etc. 
    • REMEMBER: this is not a detailed plan. 
    • This is the HARDEST PART OF PROGRAMMING.

3. Write pseudocode
    • rough draft of your code BEFORE you code
    • use common programming terminology and concepts (i.e. loops, conditionals, etc.)
    • pseudocode allows for isolation of steps, which can be troubleshot via internet or whatever.

  EXAMPLE:   function thisDoesSomething(takes-number) {
                // If number is divisible by 2, return even. 
                // If number is not, return odd.
             }

4. Debug from the top down
    • Test solution looking for error messages and unexpected results. 
    • check for spelling errors or mistaken characters. 
    • if none of the above, might be an error in logic. 

5. Refactor Refactor Refactor
    • Never go for the perfect solution each time. 
    • Work on it now and refactor later. 
    • A successful refactor shortens or optimizes the code, looking for ways to correct the golden 
      three: Readability, efficientcy, compatibility. 
    • these three need to be kept in balance. 
    • 

*/







/* 
Solving Programming Problems
-==-=-=-=-=-=-=-=-=-=-=-=-=-=-

    PHASE 1: UNDERSTAND THE PROBLEM:  
    
          1.1: READ THE PROBLEM AT LEAST 3 TIMES 
            • To understand a problem, read through it at least 3 times to make sure you catch all
              the special requirements and dont overlook something important.

          1.2: BREAK DOWN THE QUESTION
            • To get a better idea of the requirements of the problem/question, break down the 
              problem/question into smaller components that are expected (i.e. function names, etc).

          1.3: CREATE QUESTIONS ABOUT THE PROBLEM:
            • Create a small list of questions about the problem.
    1.3: EXPLAIN THE PROBLEM: 
            • Try explaining the problem to someone else (or even communicate it on paper).
        ----------------------------------------------------------------------------------------

    EXAMPLE PROBLEM:
    ================
    Create a simple function "selectEvenNumbers" that will take in an array of numbers 
    and return an array "evenNumbers" of only even numbers. If there are no even numbers, 
    return the empty array "evenNumbers".




        1.1: READ THE PROBLEM AT LEAST 3 TIMES
        ======================================

          Create a simple function "selectEvenNumbers" that will take in an array of numbers 
          and return an array "evenNumbers" of only even numbers. If there are no even numbers, 
          return the empty array "evenNumbers".

          Create a simple function "selectEvenNumbers" that will take in an array of numbers 
          and return an array "evenNumbers" of only even numbers. If there are no even numbers, 
          return the empty array "evenNumbers".

          Create a simple function "selectEvenNumbers" that will take in an array of numbers 
          and return an array "evenNumbers" of only even numbers. If there are no even numbers, 
          return the empty array "evenNumbers".

        


        1.2 BREAK DOWN THE QUESTION
        ============================
            1. Create a simple function "selectEvenNumbers...                            
            2. ...that will take in an array of numbers...                               
            3. ...and return an array "evenNumbers" of only even numbers.                
            4. If there are no even numbers, return the empty array "evenNumbers."       


          1. "Create a simple function "selectEvenNumbers..." 
                  • In this case, we'll just setup a simple function declaration named "selectEvenNumbers".
                        --------------------------------------
                          function selectEvenNumbers() {                          <== Created "selectEvenNumbers" function declaration.
                            // code goes here                 
                          }                                   
                        --------------------------------------

          2. "...that will take in an array of numbers..."
                  • This says that we need to PASS IN an array of numbers for the function to process.             
                        -------------------------------------------------
                          function selectEvenNumbers(arrayOfNumbers) {            <== Created "arrayOfNumbers" parameter.
                            // code goes here...                         
                          }                                              
                        -------------------------------------------------

          3. "...and return an array "evenNumbers" of only even numbers."
                  • So at this point, we actually get a hint of what to do next, which is how to store our even numbers in
                    an evenNumbers variable.
                        --------------------------------------------------
                          function selectEvenNumbers(arrayOfNumbers) { 
                            let evenNumbers = [];                                 <== Create a variable called "evenNumbers" to store any even numbers we find. 
                            
                            return evenNumbers;                                   <== Return evenNumbers.
                          }                
                        --------------------------------------------------

          4. "If there are no even numbers, return the empty array "evenNumbers."
                  • In this case, when we return evenNumbers and there are no even numbers in the data set, it
                    will return an empty array in any case!          



        CREATE QUESTIONS ABOUT THE PROBLEM
        ==================================                  
        At this point, think about what the problem is asking you. 
            • How can your program tell what an even number is?
            • 



                  
                  • How can a computer tell what an even number is?
                      • If you dont know, chances are the answer is on stack overflow or some other site.
                      • Best to get a few answers, write them down in case you need them later.
                        --------------------------------------
                          num % 2 === 0
                          if (n % 2) {...}
                        --------------------------------------
                  • How do you contain the even numbers?
                        --------------------------------------
                          
                        --------------------------------------
        
        
/* 
What is a browser and how does a webpage render?

•	A browser is a piece of software made up of several components responsible for specific pieces of work.

o	The browser is an orchestration of a bunch of little engines.
    	HTML, CSS, JS, HTTP, Events, and other engines that are manipulating the DOM, which is an in-memory representation of what your web page looks like.

o	A browser renders website by sending a request, getting and processing it, displaying it, and updating it.     
    	When you type in an address in your browser, the bowser uses an http engine to access the internet and make a request from the user to get the website.
    	The server accepts that request and sends back all the files the user requested.
    	Now that the bowser has all the files (e.g. HTML, CSS, JavaScript), those engines process those files to build up the DOM and displays it on the page.
    	When you interact with the page (i.e. event) will alter the DOM and update (i.e. re-renders) the display.

o	The browsers HTTP engine handles requests and Reponses.
    	The browser sends a request, the server sends a response if it is valid.

o	The browser only understands JavaScript as the scripting language here.
    	The bowser does not understand angular or react, it only understands JavaScript.

*/


/* 
How does a browser handle a JS file when it hits the JavaScript engine?

•	A browser handles JS by allocating chunks of memory, creating a global object, process it in 2 phases (creation and execution), assign values to variables, and set aside memory for calls.


o	The JavaScript engine is in control even before you feed it any JavaScript.
	JavaScript will reach the browser via the JS.  In fact, the JavaScript will reach the browser even if the there is no code in the JS file. This is because only the JavaScript engine reaches the DOM. The code that you write only goes as far as the JavaScript file. In a way, the engine rewrites the code. 
	The JavaScript engine creates the window object before any JS is fed to it.

The Process for executing JavaScript:

o	 First , a chunk of memory is created by the JavaScript engine to execute code in it.
	This is called an execution context and is known as global execution.
	However, the best way to think of this is as a chunk of memory.

o	 Second , the JavaScript engine creates an global object.
	This global object is created inside the execution context and creates a variable called this which is set to a window object. (this = obj    obj: window).
•	So if you type “this” in your browser, you will see the window object.
•	This is what will happen every time you feed a JavaScript file to a JavaScript engine.

o	 Third , if there is code to process, the JavaScript completes 2 phases in the first pass.
	The first phase is the creation phase.
•	In the creation phase, where the engine looks for variables and functions.
o	If the JavaScript engine passes a variable, it sets aside some memory and hoists the variable up-top to refer to later. Initially, a variable is set to undefined as all variables are.
o	If the JavaScript engine passes a function, it will grab the whole value and put that into memory.
	The second phase is the execution phase.
•	In the execution phase, the engine processes all the code.

Window.a = undefined;
Window.foo = function foo() {…};

o	 Fourth , on the second pass, the engine assigns values to variables.
	The variable that memory was set aside for is now assigned a value ( let foo = ‘Hi’ ) 
Window.a = ‘Hi’;
Window.foo = function foo() {…};


o	 Fifth , function calls set aside a piece of memory
	The chunk of memory is created using the execution context with the value of “foo”.
	Then, the JavaScript engine creates an object with the value of foo ( obj: foo ) and also a context for this called foo ( this = foo ).
	The engine will also reference the outer environment (i.e. scope), which is pointing to the global context in this case.



What is strict mode?

•	Strict mode allows you to place a program or a function in a strict operating context.
o	To enable strict mode, put 'use strict';  at the beginning of your JavaScript document.
	Strict mode makes debugging easier, errors will be easier to find. It is a string because when it was first implemented only new browsers supported it, so a string was used and when a new browser reads the string, it knows to turn itself into strict mode operating context.


“use strict”;






        ----------------------------------------------------------------------------------------

        




*/
