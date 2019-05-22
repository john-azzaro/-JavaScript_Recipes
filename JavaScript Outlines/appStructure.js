'use strict';
// OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
//    1. Provide a showcase of different ways to structure an app using jQuery and other technologies.
// SUMMARY //////////////////////////////////////////////////////////////////////////////////////////////////
// What is the problem?:  
//    1. There is a critical lack of application structure examples to learn from, so this document attempts to 
//       provide a few interesting working patterns to build from.

// What is the BEST solution? 
//     1. So far the best solution is to make sure that every function has a single concern and that all necessarily flow 
//        from each other.

// What are the special components of these solutions?:  
//     1. jQuery

// What needs work?
//     1. Currently, this is just a catch-all for interesting application structure examples from mentor meetings, research, discussions, etc.
//        When the document is more rounded out, I'll organize it better.



// Basic Structure from concept to code ////////////////////////////////////////
/*
    1. Initialization 
    2. Initialize the application
        2A. run setup event handlers
        2B. run display main page
    4. display main page
        4A. run display header
        4B. run display section
        4C. run display footer
    5. display header, section, and footer.
    6. generate header, section, and footer.

*/

// INITIAL CODING ///////////////////////////////////////////////////////////////
// In the HTML document, be sure to first write out the strucutre of your app first so that when the time
// comes, you will be able to insert the sections into your generate functions.


// IN HTML //////////////////////////////////////////////////////////////////////
// important to just note that the main section delegates the document.
/* 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" href="index.css">
</head>
<body>
     <main class="grid" aria-live="assertive"></main> 
    
     <script src="index.js"></script>
</body>
</html>
*/


// IN JS ///////////////////////////////////////////////////////////////////////////
/*

function generateSectionTwo() {
    return `
        <section class="section-two">This is the content in the second section element</section>
    `
}

function generateSectionOne() {
    return `
        <section class="section-one">This is the content in the first section element</section>
    `
}

function displaySectionTwo(container) {
    $(container).append(generateSectionTwo());
}

function displaySectionOne(container) {
    $(container).append(generateSectionOne());
}

function displayMainPage() {
    const main = $('main);
    main.empty();
    displaySectionOne(main);
    displaySectionTwo(main);
}

function setUpEventHandlers() {
    // for any buttons you have.
}

function initialize() {
    setupEventHandlers();
    displayMainPage();
}

$(initialize);








*/

















