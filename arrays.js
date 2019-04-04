"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Arrays
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is an Array? 
//     2. How do you create an array?
//     3. How do you access items in an array?
//     4. How do you find the length of an array?
//
// NOTES ////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on arrays taken from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        and Answer format for improved readability.
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
1. What is an Array?
/////////////////
    -- Arrays are used to store lists of items in JavaScript
    -- Arrays are collections of things, like items or even other lists.
    -- Arrays could be dealing with collections of emails, statistics, server logs, etc.
    -- you can perform many options on arrays such as .pop, .slice, etc. 
*/


/*
2. How do you create an array?
///////////////////////////
    -- To create an array, simply declare a variable and assign empty brackets to it. (i.e. []).
    -- Arrays can be created with 0 or more elements.    
    -- Items in the array are seperated by commas (i.e. ,).
*/
    // How to create an empty array:
    //===============================

            let myFirstArray = []                      
            console.log(myFirstArray);                 //-> []

    // How to create an array with items inside it:
    //=============================================

            let myFirstFullArray = ['a', 'b', 'c'];    
            console.log(myFirstFullArray);             //-> [ 'a', 'b', 'c' ]

    // How to create an array with different data types in it:
    //========================================================

    //                             string              array                    function
    //                                  \                 |                         |
            let myFirstComplexArray = ['Hello', 25, ['foo', 'bar'], true, function() {console.log('howdy')}];
    //                                           |                   |
    //                                        number              boolean



/*
3. How do you access items in an array?
///////////////////////////////////////
    -- To access items in array, you need to acess by INDEX.
    -- The index of an item is its position in an array.
    -- Item index are ZERO INDEXED, meaning the count starts at 0 and continues on for as many items as there are in the array.
*/
    //            Index number:     0         1        2        3        4                
    //                              |         |        |        |        |
            const howManyItems = ['item1', 'item2', 'item3', 'item4', 'item5'];

/*
    -- to access items in an array, you simply call the name of the array and the item index number.
        -- remember, the first item in the array is item 0 in the array.
*/
            console.log(howManyItems[0]);      //-> item1
            console.log(howManyItems[4]);      //-> item5



/*
4. How do you find the length of an array?
//////////////////////////////////////////
    -- to find the length of an array, you simply attach the .length method to the array name you want.
*/
            const longArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
            
            console.log(longArray.length);      //-> 10



/*
5. What is an array method?
///////////////////////////
    -- an array method
*/