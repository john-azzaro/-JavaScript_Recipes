"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     jQuery
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is the DOM?
//        + How does the DOM work?
//     2. What is DOM Traversal and Manipulation?
//     3. How do you select elements in the DOM using plain JavaScript?
//        + What is the "document" and how is it referenced in selecting elements in the DOM using plain JavaScript?
//     4. What is jQuery?
//        + How do you use jQuery in your projects?
//        + Where do I include jQuery and documents that depend on it (i.e. jquery.js)?
//        + How does jQuery work?
//     5. What is the jQuery syntax and how do you select elements in the DOM?
//        + What is the jQuery syntax?
//     6. What is are jQuery references and what do they do?
//     7. What is an Event Listener?
//     8. What is a DOM Event Object?
//     9. How does event.currentTarget work?
//    10. Why and how do you prevent default element behaviors?
//    11. What is Event Delegation?
//
// NOTES ////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. This .js document uses jqueryCSS.CSS and jquery.html for demonstrations below.
//     2. Useful overview of information on jQuery taken from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        and Answer format for improved readability.
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////




/*
1. What is the DOM?
///////////////////
    • DOM is short for 'Document Object Model'.
    • DOM is the CURRENT REPRESENTATION of the CURRENT STATE of the HTML content on the page.
    • DOM specifies how JavaScript can access and update the content of a web page.
    • DOM is a cross-platform and language independent model for representing and interacting with elements in HTML documents.
    • DOM is NOT part of HTML and it is NOT part of JavaScript... it is a seperate set of rules.
    • DOM CANNOT work without a DOCUMENT.
    • DOM is NOT to be confused with the HTML file of the page.
        • the HTML file will show what the page will look like INITIALLY.
        • However, as JavaScript begins to take over elements can be added or removed regardless of whether they were orginally
           in the HTML document.
    • When you create a web page and load it in a web browser the DOM is ENABLED.

    How does the DOM work?
    ======================
    • DOM is a collection of NODES.
        • Everything in the HTML document is a NODE.
    • Think of the DOCUMENT as a NODE TREE.
        • the tree describes the relationship between its members like parent, child, sibling, etc.

                             <title>
                            /
                      <head> - <meta>
                     /      
                <html>
                     \
                      <body> - <main>
                           \
                            <nav>

    • The DOCUMENT begins by opening the HTML tag 
        • This would be a PARENT which all the other elements are contained within.
        • HTML tag has no parent or siblings.
    • One level deeper, we have two elements: head and body.
        • the head and the body are siblings.
        • the head and the body also contain children.

    • Within the concept of nodes, consider how a basic element is a collection of nodes:

                attribute node                   text node
                        \                         /
                <p class='paragraph'>This is the text inside the element</p>
                |_________________________________________________________|
                                        element node
*/



/*
2. What is DOM 'Traversal' and 'Manipulation'
///////////////////////////////////////////// 
    • The goal of DOM traversal and manipulation is to:
        1. FIND a particular element in the DOM (i.e. 'TRAVERSE' the DOM).
        2. UPDATE that particular element (i.e. 'MANIPULATE' the element).

    • DOM traversal and manipulation can be done with:
        1. jQuery
            • jQuery provides methods to manipulate the DOM in a very efficient way.
            • with jQuery, no major code needed to modify element attributes or extract HTML from a paragraph or division.
            • jQuery can do everything JavaScript can do but with a much easier syntax and more power. 
        2.  Plain JavaScript.
            • Hoever, because of cross compatibility issues, using jQuery is preferable.

    • What is most important to learn is event-driven DOM manipulation.
        • Simply put, we will write a set of instructions that tell the computer to LISTEN when specific EVENTS occur, 
           then do SOMETHING in response.
*/


/*
3. How do you select elements in the DOM using plain JavaScript?
////////////////////////////////////////////////////////////////
    • to select elements in the DOM using plain JavaScript
    • However, jQuery is much easier syntax and more powerful so alhtough this is useful to know, we'll use jQuery more often.
    
    What is the "document" and how is it referenced in selecting elements in the DOM using plain JavaScript?
    ========================================================================================================
    • the document (discussed in how the DOM works) is the current representation of the HTML document.
    • to alter the elements in the DOM, we need a way to select specific elements in the document.
    • although jquery offers a more streamline way to traverse and manipulate the DOM, you can also do so with plain JavaScript.
    
    • So if you type 'document' into the console of your web browser, you will get a bunch of HTML.
        • but make no mistake, this is an object.
    • with this DOCUMENT, you can use SELECTORS to select different elements in the DOM.

 
    Selector                                        What it does                                    Return example (in chrome devtools)
    __________________                              __________________________________________      ______________________________________________________
    document.getElementsByTagName("h1");            Selects elements by tag name of h1.             //=> HTMLCollection [h6.first]
    document.getElementsByClassName("first");       Selects elements with the class "first".        //=> HTMLCollection [p.third]
    document.getElementsById("second");             Selects elements with id of "form".             //=> <p id="second">This is the second sentence.</p>

    document.querySelector("li");                   Selects the FIRST element of "li" in doc.       //=> <li class="listItem">this is a list item</li>
    document.querySelectorAll("li");                Selects ALL elements of "li".                   //=> NodeList(7) [li.listItem, li.listItem, li.listItem, li, li, li, li]

    getAttribute("");
    setAttribute("");


    • Additionally, we can attach methods which do various things.

        • Use className to assign a class to a selected element:
    
            document.getElementByClassName("p").className = "red";       //=> text will turn red for p elements
                                                                         //   <p class="red">some text here</p> 
        
        • Use classList to add, remove, and toggle classes:

            document.getElementByClassName("p").classList.add("cssStyle1");        //=> will add cssStyle1 from CSS document to p element 
            document.getElementByClassName("p").classList.remove("cssStyle1");     //=> will remove cssStyle1 from CSS document to p element 
            document.getElementByClassName("p").classList.toggle("cssStyle1");     //=> will toggle cssStyle1 from CSS document to p element true or false.

    • There are many more methods we can use, but again we will focus on jQuery for DOM traversal and manipulation.
*/ 
                                       









   // =========================================================================================
   // IMPORTANT: EVERYTHING FROM HERE ON WILL USE JQUERY FOR DOM TRAVERSAL AND MANIPULATION
   // =========================================================================================



/*
4. What is jQuery?
///////////////////
    • jQuery is a fast, small, and feature rich JavaScript library.
        • Remember, a JavaScript library which means it combines a big list of functions and methods built using JavaScript code.
    • jQuery has massive cross-browser compatibility, and you can expect to have it run everywhere.
    • jQuery uses CSS3 selectors (i.e. class="title").
    • jQuery leads to other frameworks like React.
    • Makes HTML document traversal and manipulation, event handling, animation, and Ajax simple to use.
    • jQuery makes our coding experience easier and our code more user friendly.
    • The jQuery API works across MANY browsers.
 



    How do you use jQuery in your project?
    ======================================
    • to use jQuery in your project, you can either:
        1. Download the jQuery library to your computer (inefficent).
        2. Include jQuery from a CDN (Content Delivery Network) in your meta from Google.
            • the benefit of using something like a google hosted library is everyone probably already has it on thier computer already.
            • Thus, the user will have faster loading times.

    • To Include jQuery from a CDN, you simply have to insert the link below into your HTML meta.

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


    Where do I include jQuery and documents that depend on it (i.e. jquery.js)
    ==========================================================================
    • REMEMBER: You MUST include the jQuery library FIRST.
        • The browser reads the HTML file from TOP to BOTTOM.
        • This is why in the HTML document, our .js files are at the BOTTOM of the body element.
        • Why? If the javascript file (i.e. jQuery.js) depends on jQuery, it need the jQuery library to come before so it can read it.

                <meta>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>     <= jQuery library FIRST
                </meta>
                <body>
                    <nav></nav>                                                                                  
                    <main></main>                                                                                 
                    <footer></footer>                                                                             
                <script src="jQuery.js"></script>                 <= .js files at the bottom of the body of HTML
                </body>           
*/

/*
    How does jQuery work?
    =====================
    • jQuery has a very clever central concept: method chaining
    • A jQuery object (i.e. $('p')) is an array of DOM nodes (i.e. .addClass('')) and functions which can modify them.
    • jQuery objects usally return the object itself.

    TAKE THE FOLLOWING jQuery OBJECT: 
        
                STEP 1                 STEP 3
                  \                      |
            $('p.example').hide().addClass('hello').fadeIn('slow')
                              |                        \
                            STEP 2                    STEP 4

            STEP 1: Find all paragraphs which have the class attribute of 'example' can constrcut a jQuery object to contain them.
            STEP 2: Take those paragraphs ans hide them all immediately.
            STEP 3: Add a class of 'hello' to each of them.
            STEP 4: Perform a short animation  which reveals all the paragraphs slowly.

*/



/*
5. What is the jQuery syntax and how do you select elements in the DOM?
///////////////////////////////////////////////////////////////////////
    • jQuery can select ANY element in the DOM (Document object Model).
        • This means ANY element, such as:
            • ALL HTML tags (i.e. main, section, div, h1, p, ul, li, etc.).
            • ALL ID's (i.e. id='box' which would be $('#box').
            • ALL Classes (i.e. class='js-hidden').
        • jQuery can also select:
            • multiple elements
            • pseudo classes
            • specific string fo text attributes
            • etc.

    • jQuery uses essentially the same syntax as CSS when selecting elements.
    • To select elements in the DOM using jQuery, you need to use SELECTORS.


    What is the jQuery syntax?
    ==========================
    • The jQuery syntax has a few basic components:

        1.  Object
            • The jQuery Object is a cash ($) symbol followed by parentheses to ACCESS (or CALL) jQuery.
        2. Selector      
            • This is INSIDE the parentheses following the jQuery Object that GRABS (or SELECTS) HTML elements, ID's, classes, etc.
            • REMEMBER: Use quotes for every element you select and if you have multiple elements, seperate with a comma.
        3. Action (method)
            • This is the method added to the end of the jQuery object that executes a desired effect.
        4. Method Parameters
            • this could be paramters, functions, etc.


                    OBJECT       ACTION (method)
                        \           |
                        $('p').addClass('hidden');
                           |                \
                        SELECTOR             PARAMATERS (for method)  
*/ 




/*
6.What is are jQuery references and what do they do?
////////////////////////////////////////////////////
    • 
    • There are MANY more jQuery reference that you can use to traverse and manipulate the DOM.
    • Below are a few examples of jQuery references taken from: https://www.w3schools.com/jquery/jquery_ref_selectors.asp.

    • jQuery references can be categorized into:
        • Selectors ==> used to select different elements on the HTML document.
        • Events ==> methods that trigger or attach functions to an event handler for a selected element.
        • Effects ==> creates animation effects.
        • HTML/CSS methods ==> used to manipulate HTML and CSS.
        • Traversing ==>

    • Examples of jQuery selectors:
        Selector             Example                Selects
           - *                  $("*")                 Selects ALL elements.   
           - #id                $("#bottom")           Selects the element with the ID 'bottom'.
           - .class             $(".title")            Selects All elements with the class 'main' (i.e. class='title').
           - .class,.class      $(".title,.footer")    Selects ALL elements with the class 'title' and 'footer'.
           - element            $("p")                 Selects ALL paragraph elements.
           - el1,el2,el3        $("h1","h2","p")       Selects ALL h1, h2, and paragraph elements.
           - :first (or last)   $("p:first")           Selects the FIRST paragraph elements.    
           - :even (or odd)     $("p:even")            Selects ALL even elements   
           - parent > child     $("div > p")           Selects ALL paragraph elements that are the direct child of <div> elements.

    • Example of jQuery Event Methods:
        Method               Example                                                    Action
           - click()            $('main).on('click', #next, function(event) {...});        - Attaches event handler to an element.
                                    -or-                                                  - on() has 3 parameters: action, selected element
                               $('main').click(function(event) {...});                      function.
                                                                                          - Watching 'main', on click of the next button,
                                                                                            execute function.
                                                                                            
    • Example of jQuery Effect Methods:
        Method              Example                                                      Action
         - fadeIn()             $('p').fadeIn()                                           - fadeIn has 3 parameters: speed, easing, callback
                                    -or-                                                 - speed is in milliseconds: default () is 400, slow, fast
                               $('main').on('click', #doThis, function(event) {          - easing can be swing (slow, fast, slow) or linear (constant speed).
                                   $('p').fadeIn();                                      - callback is executed after the current effect is finished
                               });
                                           
    • Examples of jQuery HTML/CSS Methods:
         Method              Example                                                      Action   
           - css()              $("p").css('property', 'value');                           - the paragraph element color will amend the value of the property.
           - addClass()         $("p").addClass('.hidden');                                - the paragraph element will add class hidden and disappear.
           - removeClass()      $("p").removeClass('.hidden');                             - the paragrpah element will remove hidden and reappear.
           - append()           $("p").append(generateHTML());                             - will append the paragraph element with the content of
                                                                                            generateHTML() function by adding it to the end of the elements.

    • Examples of jQuery Traversing Methods:
         Method              Example                                                      Action   
           - add()              $("p").add(generateListItem());                            - List item from generateListItem() added to p element.
           - find()             $("p").find('.list')                                       - Finds elements with .list class in it within p element.
                                $("p").find('.list').addClass('complete');                     - Finds .list and adds the class of 'complete' to it.
           - parent()           $("p").parent('.list').removeClass('unfinished');          - targets the first parent element of a jQuery Object the
                                                                                            passes the filter condition.  In this case, the level above.

    • Example of jQuery AJAX Methods:
         Method              Action                   
           - $.ajax()           Perfoms an AJAX (Asynchronous JavaScript and XML) request.  See API section.



    What do practical examples of jQuery references look like?
    ==========================================================
    • NOTE: Examples displayed on jquery.html.
    • NOTE: The examples below use Event Listeners, which come after the bascis but this si the best way to demonstrate
             the functionality for now.
*/            



    // Example of jQuery HTML/CSS Methods:

            function  htmlCssTester() {
                $('.js-color-it-red').css('color', 'red');       // find all elements with the class 'js-color-it', and changes color red.
             }
            htmlCssTester();

             function htmlCssTester2() {
                 $('.js-cross-it-out').css('text-decoration', 'line-through');     //find the selector, and alter the css to line-through.
             }
             htmlCssTester2(); 
             
             function htmlCssTester3() {
                 $('.js-uncover-it').removeClass('hidden');     // find the selector, remove the css class 'hidden'.
             }
             htmlCssTester3();


    // Example of jQuery Event Methods using show/hide text buttons :

             function handleShowText() {
                 $('main').on('click', '#appear', function(event) {
                    $('.magic-text').removeClass('hidden').fadeIn();
                 });
             }

             function handleRemoveText() {
                 $('main').on('click', '#disappear', function(event) {
                    $('.magic-text').addClass('hidden');
                 });
             }

             function setUpEventHandlers() {
                 handleShowText();
                 handleRemoveText();
             }

             function initialize() {
                 setUpEventHandlers();
             }

             $(initialize);


    // Example of jQuery effect methods for fade-in/fade-out of a red colored square

             function handleFadeIn() {
                 $('main').on('click', '#fade-in', function(event) {
                    $('.block').fadeIn(1000);
                 });
             }

             function handleFadeOut() {
                 $('main').on('click', '#fade-out', function(event) {
                    $('.block').fadeOut(1000);
                 });
             }
           
             function handleFadeToggle() {
                 $('main').on('click', '#fade-toggle', function(event) {
                    $('.block').fadeToggle(1000);
                 });
             }

            function setUpEventHandlers2(){
                handleFadeIn();
                handleFadeOut();
                handleFadeToggle();
            }

             function initialize2() {
                setUpEventHandlers2();
             }

            $(initialize2);


            
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

 
/*
8. What is a DOM Event Object?
//////////////////////////////
    • A callback function in an event listener gets access to an object representing the triggering event.
    • This contains information about what you typed in text, what you typed, or what bitton you pressed.
    • in fact, every peice of information of how you preformed an action is contained wihtin the event object.
*/

            $(function() {
                $('button').mousedown(function(event) {
                    $('.output').text(`The Button Click: ${event.which}`)        // event.which contains information about which button was 
                });                                                              // pressed in a mousedown event and the key property.

                $('button').keydown(function(event) {
                    $('.output').text(`The Key Pressed: ${event.key}`)
               });
            });


/*
9. How does event.currentTarget work?
/////////////////////////////////////
    • One of the most powerful properties of an object is event.current target.
    • event.currentTarget contains information about which DOM element the user has interacted with.
    • event.currentTarget refers to the element.

   • So what happens in the code below?
            1. When you click one of the squares (containing fee, fie, foe, fum), the text inside the elements gets displayed in the h4 element.
            2. The JavaScript code executes as follows:
                a. wait until the page loads.
                b. listen for when the user clicks on one of the li elements.
                c. when one of those is clicked, a function is run.
*/

            function clickEm() {
                $("ul, li").on('click', function(event) {
                    event.stopPropagation();
                    $("h4").text("the element the user selected is: " + $(event.currentTarget).text());
                });
            }
 
            $(clickEm);                                                                                      

/*
    What is event.stopPropagation?
    ==============================
    • When you inser event.stopPropagation, you are telling the browser to stop the event from bubbling up the DOM.
    • in the example above, it runs the innermost element (i.e. the li that you click) but it WONT run again.
*/



/*
10. Why and how do you prevent default element behaviors?
////////////////////////////////////////////////////////
    • event.preventDefault is used to stop default submission behavior for forms.
    • event.preventDefault can also be used to stop the default behavior of anchor tags.
    • By default, when the browser sees that a user submits a form, it tries to submit the form to the server.

*/

function forForm() {
    $('.js-form').submit(function(event) {                                            // on submit...
        event.preventDefault();                                                       // ... prevent default submission behavior.
        const userTextElement = $(event.currentTarget).find('#user-text');            // variable assigned user tect input...
        $('.display-user-text').text(`user text is: ${userTextElement.val()}`);       // ...show text in paragraph element...
        userTextElement.val("");                                                      // ... clear out variable value for next input.
    });
}
$(forForm);



/*
11. What is Event Delegation?
/////////////////////////////
    • Event delegation allows you to attach a single event listener to a parent element that will fire for all descendants
       matching a selector, whether those descendants exist now or will be added in the future.
    • If you need to use jQuery to watch for events on dynamically generated elements (i.e. elements added after JavaScript has
       been loaded), do use .click().
    • Instead, use an element that will always be there, like $('main').on('click') where 'main' which will always be there.
*/




















/*
UltWbDsg&DevCoBld23Prjts
ModJavThComCorBld10Prjts
*/








