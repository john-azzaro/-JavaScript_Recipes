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
    -- if you use `const` to instantiate the variable, know that you CANNOT reassign 
       data types to something else (i.e. number to data type).
        -- however, it is possible to MODIFY the content of the array (i.e. change a number 
           to another number), add or remove existing elements.
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
    -- Item index are ZERO-INDEXED, meaning the count starts at 0 and continues on for as many 
       items as there are in the array.
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
    -- an array method traverses and manipulates the array and the items.
    -- since an array is an object, we can use both bracket AND dot-notation.
*/



/*
6. How do you add elements to an array?
///////////////////////////////////////
    -- in an array, you can add elements to the:
        -- beginning (.unshift)
        -- middle (.)
        -- end (.push)
*/

/*
   How do you add elements to the BEGINNING?
   =========================================
    -- to add elements to the beginning of an array, you use the .unshift method.
*/  
            const addToBeginning = ['apple', 'banana', 'carrot']; 

            console.log(`==> add elements to beginning with .unshift`);

            console.log(addToBeginning);        //-> [ 'apple', 'banana', 'carrot' ]
            addToBeginning.unshift('avocado');
            console.log(addToBeginning);        //-> [ 'avocado', 'apple', 'banana', 'carrot' ]


/*
   How do you add elements to the MIDDLE?
   ======================================
    -- to add elements to the middle of an array, you use the .splice method.
    -- using .splice, first consider the array you are inserting your element into:

                                    0         1         2
                                    |         |         |
            const addToMiddle = ['apple', 'banana', 'carrot']; 


    -- there are 3 elements in the array.  
    -- Now suppose we want to insert the element 'kiwi' and 'orange' between 'banana' and 'carrot'.
    -- we use dot-notation first with the name of the array, then .splice, then a few critical parameters:

        -- parameter 1 = index of where we want to begin new element insertion.
        -- parameter 2 = delete count of what you want to remove.  We dont want to delete 
                         anything, so we use 0.
        -- parameter 3 = element(s) you want to add.  You can add as many elements after if you want.


                insertion start       first element to insert at index of 2
                              \         |
            addToMiddle.splice(2, 0, 'kiwi', 'orange');
                                   \               \  
                              delete count        second element to insert at index of 3


        -- in the .splice method above, we are saying that we want to insert at index of 2 (i.e. the element 
           you insert will be where the element 'carrot' currently is (i.e. 'carrot' = index of 2), while not 
           removing anything (i.e. 0), the elements 'kiwi' and 'orange'.
*/  

            const addToMiddle = ['apple', 'banana', 'carrot']; 

            console.log(`==> add elements to middle with .splice`);

            console.log(addToMiddle);                      //-> [ 'apple', 'banana', 'carrot' ]
            addToMiddle.splice(2, 0, 'kiwi', 'orange');
            console.log(addToMiddle);                      //-> [ 'apple', 'banana', 'kiwi', 'orange', 'carrot' ]


/*
   How do you add elements to the END?
   ===================================
    -- to add elements to the end of an array, you use the .push method.
*/  
            const addToEnd = ['apple', 'banana', 'carrot']; 

            console.log(`==> add elements to end with .push`);

            console.log(addToEnd);    //-> [ 'apple', 'banana', 'carrot' ]
            addToEnd.push('date');
            console.log(addToEnd);    //-> [ 'apple', 'banana', 'carrot', 'date' ]









