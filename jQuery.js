"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     jQuery
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is the DOM?
//
// NOTES ////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on jQuery taken from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        and Answer format for improved readability.
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
1. What is the DOM?
    -- DOM is short for 'Document Object Model'.
    -- DOM is the CURRENT REPRESENTATION of the CURRENT STATE of the HTML content on the page.
    -- DOM specifies how JavaScript can access and update the content of a web page.
    -- DOM is a cross-platform and language independent model for representing and interacting with elements in HTML documents.
    -- DOM is NOT part of HTML and it is NOT part of JavaScript... it is a seperate set of rules.
    -- DOM CANNOT work without a DOCUMENT.
    -- DOM is NOT to be confused with the HTML file of the page
        -- the HTML file will show what the page will look like INITIALLY.
        -- However, as JavaScript begins to take over elements can be added or removed regardless of whether they were orginally
           in the HTML document.
    -- When you create a web page and load it in a web browser the DOM is ENABLED.

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
    -- One level deepr, we have two elements: head and body.
        -- the head and the body are siblings.
        -- the head and the body also contain children.
        
    -- Within the concept of nodes, consider how a basic element is a collection of nodes:

                attribute node                   text node
                        \                         /
                <p class='paragraph'>This is the text inside the element</p>
                |_________________________________________________________|
                                        element node





*/  