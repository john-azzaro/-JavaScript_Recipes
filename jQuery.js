"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     jQuery
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is the DOM?
//     2. What is DOM Traversal and Manipulation?
//     3. What is jQuery?
//     4. What is the jQuery syntax and how do you select elements in the DOM?
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
    -- DOM is short for 'Document Object Model'.
    -- DOM is the CURRENT REPRESENTATION of the CURRENT STATE of the HTML content on the page.
    -- DOM specifies how JavaScript can access and update the content of a web page.
    -- DOM is a cross-platform and language independent model for representing and interacting with elements in HTML documents.
    -- DOM is NOT part of HTML and it is NOT part of JavaScript... it is a seperate set of rules.
    -- DOM CANNOT work without a DOCUMENT.
    -- DOM is NOT to be confused with the HTML file of the page.
        -- the HTML file will show what the page will look like INITIALLY.
        -- However, as JavaScript begins to take over elements can be added or removed regardless of whether they were orginally
           in the HTML document.
    -- When you create a web page and load it in a web browser the DOM is ENABLED.

    How does the DOM work?
    ======================
    -- DOM is a collection of NODES.
        -- Everything in the HTML document is a NODE.
    -- Think of the DOCUMENT as a NODE TREE.
        -- the tree describes the relationship between its members like parent, child, sibling, etc.

                             <title>
                            /
                      <head> - <meta>
                     /      
                <html>
                     \
                      <body> - <main>
                           \
                            <nav>

    -- The DOCUMENT begins by opening the HTML tag 
        -- This would be a PARENT which all the other elements are contained within.
        -- HTML tag has no parent or siblings.
    -- One level deeper, we have two elements: head and body.
        -- the head and the body are siblings.
        -- the head and the body also contain children.

    -- Within the concept of nodes, consider how a basic element is a collection of nodes:

                attribute node                   text node
                        \                         /
                <p class='paragraph'>This is the text inside the element</p>
                |_________________________________________________________|
                                        element node
*/



/*
2. What is DOM 'Traversal' and 'Manipulation'
///////////////////////////////////////////// 
    -- The goal of DOM traversal and manipulation is to:
        1. FIND a particular element in the DOM (i.e. 'TRAVERSE' the DOM).
        2. UPDATE that particular element (i.e. 'MANIPULATE' the element).

    -- DOM traversal and manipulation can be done with:
        1. jQuery
            -- jQuery provides methods to manipulate the DOM in a very efficient way.
            -- with jQuery, no major code needed to modify element attributes or extract HTML from a paragraph or division.
            -- jQuery can do everything JavaScript can do but with a much easier syntax and more power. 
        2.  Plain JavaScript.
            -- Hoever, because of cross compatibility issues, using jQuery is preferable.
*/



   // =========================================================================================
   // IMPORTANT: EVERYTHING FROM HERE ON WILL USE JQUERY FOR DOM TRAVERSAL AND MANIPULATION
   // =========================================================================================



/*
3. What is jQuery?
///////////////////
    -- jQuery is a fast, small, and feature rich JavaScript library.
        -- Remember, a JavaScript library which means it combines a big list of functions and methods built using JavaScript code.
    -- Makes HTML document traversal and manipulation, event handling, animation, and Ajax simple to use.
    -- jQuery makes our coding experience easier and our code more user friendly.
    -- The jQuery API works across MANY browsers.
 
    How do you use jQuery in your project?
    ======================================
    -- to use jQuery in your project, you can either:
        1. Download the jQuery library to your computer (inefficent).
        2. Include jQuery from a CDN (Content Delivery Network) in your meta from Google.
            -- the benefit of using something like a google hosted library is everyone probably already has it on thier computer already.
            -- Thus, the user will have faster loading times.

    -- To Include jQuery from a CDN, you simply have to insert the link below into your HTML meta.

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


    Where do I include jQuery and documents that depend on it (i.e. jquery.js)
    ==========================================================================
    -- REMEMBER: You MUST include the jQuery library FIRST.
        -- The browser reads the HTML file from TOP to BOTTOM.
        -- This is why in the HTML document, our .js files are at the BOTTOM of the body element.
        -- Why? If the javascript file (i.e. jQuery.js) depends on jQuery, it need the jQuery library to come before so it can read it.

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
4. What is the jQuery syntax and how do you select elements in the DOM?
///////////////////////////////////////////////////////////////////////
    -- jQuery can select ANY element in the DOM (Document object Model).
        -- This means ANY element, such as:
            -- ALL HTML tags (i.e. main, section, div, h1, p, ul, li, etc.).
            -- ALL ID's (i.e. id='button').
            -- ALL Classes (i.e. class='js-hidden').
        -- jQuery can also select:
            -- multiple elements
            -- pseudo classes
            -- specific string fo text attributes
            -- etc.

    -- jQuery uses essentially the same syntax as CSS when selecting elements.
    -- To select elements in the DOM using jQuery, you need to use SELECTORS.

    What is the jQuery syntax?
    ==========================
    -- The jQuery syntax has a few basic components:

        1. jQuery Object 
            -- This is the cash ($) symbol (followed by parentheses) that comes at the beginning to ACCESS (or CALL) jQuery.
        2. Selector      
            -- This is INSIDE the parentheses following the jQuery Object that GRABS (or SELECTS) HTML elements, ID's, classes, etc.
        3. jQuery method 
            -- This the method added to the end of the jQuery object that executes a desired 


                jQuery OBJECT    jQuery METHOD
                        \           |
                        $('p').addClass('hidden')
                            |                \
                        selector          
*/









