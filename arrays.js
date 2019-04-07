"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Arrays
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is an Array? 
//     2. How do you create an array?
//     3. How do you access items in an array?
//     4. How do you find the length of an array?
//     5. What is an array method?
//     6. How do you add elements to the beginning, middle, and end of an array?
//     7. How do you remove the first item in an array?
//     8. How do you create a new array from an exiting one?
//     9. How do you find primitive elements (i.e. strings, numbers, booleans, etc.) in an array?
//    10. How do you find reference-type elements (i.e. objects, functions, etc.) in an array?
//    11. How do you remove an element from an array?
//    12. How do you empty an array?
//    13. How do you combine and slice an array?
//    14. How do you use the spread operator?
//    15. How do you iterate over an array?
//    16. How do you join an array?
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
6. How do you add elements to the beginning, middle, and end of an array?
////////////////////////////////////////////////////////////////////////
    -- in an array, you can add elements to the:
        -- beginning (.unshift)
        -- middle    (.slice)
        -- end       (.push)
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


/*
7. How do you remove the first item in an array?
////////////////////////////////////////////////
    -- to remove the last item in an array, you use the .shift method.
*/
            const removeFirstItem = ['axe', 'bat', 'cutlass'];

            console.log(`==> Remove first element from array with .shift`);

            console.log(removeFirstItem);       //-> [ 'axe', 'bat', 'cutlass' ]
            removeFirstItem.shift();
            console.log(removeFirstItem);       //-> [ 'bat', 'cutlass' ]

 

/*
8. How do you create a new array from an exiting one?
/////////////////////////////////////////////////////
    -- to remove the last item in an array, you use the .slice method.
    -- here, .slice uses TWO paramters:
            -- new array start (i.e. index of 2 = charlie)
            -- new array end (i.e. index of 5 = foxtrot).
                -- note that foxtrot is NOT included in the new array since it is where the new array officially ends.
*/
            const createNewArray = ['alpha', 'beta', 'charlie', 'delta', 'echo', 'foxtrot'];

            console.log(`==> Create a new array from an existing one with .slice`);

            console.log(createNewArray);                          //-> [ 'alpha', 'beta', 'charlie', 'delta', 'echo', 'foxtrot' ]
            const newCreatedArray = createNewArray.slice(2,5);
            console.log(newCreatedArray);                         //-> [ 'charlie', 'delta', 'echo' ]




/*
9. How do you find primitive elements in an array?
/////////////////////////////////////////////////
    -- finding elements in an array depends on whether you are looking for primitive (i.e. strings, numbers, booleans, etc.)
       or reference types (functions, objects, arrays).


    How do you find primitve elements?
    ==================================
    -- for primitives, we use the .indexOf() method and pass the element we are looking for in the parentheses.
        -- if you pass in an element that IS in the array, you will get the index location.
        -- if you pass in an element that is NOT in the array, you will get a -1 (which is saying it does not exist).  
*/
            const findPrimNumbers = [1,2,3,4,5];

            console.log(findPrimNumbers.indexOf('a'));    //-> -1   Since 'a' is not in the array, it returns a -1.
            console.log(findPrimNumbers.indexOf(4));      //-> 3    4 is in the array and its index location is 3.
            console.log(findPrimNumbers.indexOf("4"));    //-> -1   "4" is a string so its not in the array, so it return -1.


/*
    How do you find the last index of a given element?
    ==================================================
        -- if you want to find the last instance of a given element.
*/
            const findLastInstance = [1,2,3,4,5,3,6];   // note 3 is repeated near the end of the array.

            console.log(findLastInstance.lastIndexOf(3));   //-> 5


 /*
    How do you determine if an element exists in an array?
    =======================================================
        -- to find out whether or not an element exists in a given array, you look for the element with .indexOf and then
           use conditional logic to determine is it is NOT equal to -1 (i.e. the value that is returned if the element is NOT there).
*/
            const doesItExist = [1,2,3,4,5,6,7,8,9,10];

            console.log(doesItExist.indexOf(5) !== -1);    //-> true      Is 5 in the array?  Yes it is!
            console.log(doesItExist.indexOf(15) !== -1);   //-> false     Is 15 in the array?  No, it is NOT.
/*
        -- However, there is a better way to do this:
*/
            console.log(doesItExist.includes(5));           //-> true
/*
        -- You can also pass in a second parameter that will specify where the search begins.
*/
            const existSearch = [1,2,3,4,5,6,7,8,9,10];

            console.log(existSearch.includes(1, 2));    //-> false   This is because although 1 is in the array, we start at index 
                                                        //           of 2 (i.e. 3).
            console.log(existSearch.includes(3, 2));    //-> true    This is because while looking for #3 in the array, we start at 
                                                        //           index of 2 (i.e. 3).


/*
10. How do you find reference-type elements in an array?
////////////////////////////////////////////////////////
    -- finding primitives is different than finding reference types.
    -- we use .find(), which returns the FIRST object that matches our search criteria.


    How do you find a reference type and return a specific element?
    ===============================================================
*/
            const section = [
                { id: 1, name: 'a'},
                { id: 2, name: 'b'}
            ];

                      
            let found = section.find(function(section) {        
                return section.name === 'a';
            });

            console.log(found);      //-> { id: 1, name: 'a' }
/*
   -- here we call the find method with a function (i.e. predicate or callback) as an argument.
        -- its called a 'callback' because the function is called back as part of finding an element in the array.
   -- we use the argument as a predicate to determine whether the given element exists in an array or not.
   -- the function takes 'section' in the array as a parameter (can be called 'element' but better to be specific).
   -- in the body of the function, we want to see if the section name is equal to 'a'.
   -- if there is an element that meets that criteria, print.
   -- if there are no elements that meet the criteria in the cody body, it returns undefined.
*/

/*
    How do you find a reference type and return the index location?
    ==============================================================
    -- .findIndex returns the element's index.
*/
            let foundIndex = section.findIndex(function(section) {        
                return section.name === 'a';
            });

            console.log(foundIndex);      //-> 0       This is because 0 is the index location.
/*
    --  you can also use the es6 fat arrow function to make the code cleaner.
    -- in this example, we would say "find the section that goes to (i.e. =>) section name that matches 'a'".
*/
            let foundIndexArrow = section.find(section => section.name === 'a');

            console.log(foundIndexArrow);      //-> 0      
            
/*
11. How do you remove an element from an array?
///////////////////////////////////////////////
    - to remove an element in an array, you can use:
        -- beginning  
        -- middle
        -- end          (.pop)
*/


/*
    How to remove an element from the BEGINNING of an array?
    ==================================================
*/
            let removeBeginning = [1,2,3,4,5,6,7,8,9];

            const beginning = removeBeginning.shift();      
            console.log(beginning);                         //=> 1
            console.log(removeBeginning);                   //=> [ 2, 3, 4, 5, 6, 7, 8, 9 ]      (note the first element is gone)


/*
    How to remove an element from the MIDDLE of an array?
    ==================================================
        -- for removing middle, remember that with .slice you have 2 arguments.
            -- first argument = where to start.
            -- second argument = where to end.
        -- in this case, we just want 1 element, so 1. 
        -- but if we want to start at 3 (index of 2) and go to 5 (index of 6), we would simply specify .slice(2,6).
*/
            let removeMiddle = [1,2,3,4,5,6,7,8,9];

            const middle = removeMiddle.splice(2, 0);       // in this example we want to remove the element #3 (index of 2). 
            console.log(middle);                            //=> 3
            console.log(removeMiddle);                      //=> [ 1, 2, 4, 5, 6, 7, 8, 9 ]

/*
    How to remove an element from the END of an array?
    ==================================================
*/
            let removeEnd = [1,2,3,4,5,6,7,8,9];

            const ending = removeEnd.pop();
            console.log(ending);                   //=> 9
            console.log(removeEnd);                //=> [ 1, 2, 3, 4, 5, 6, 7, 8 ]   (note the last element is gone)


/*
12. How do you empty an array?
//////////////////////////////
    -- when we empty an array, we remove every single element in the array.
    -- There are three good methods to do this:
            1.  reassign the value as an empty array.
                -- when you reassign the value as an empty array, if you have another variable that points to the former 
                   version of the object (i.e. full of elements instead of empty), it will still be stored in memory.
                -- if there are no reference to the object, then it will be garbage collected to free up memory.
            2.  use .length to truncate the array (i.e. remove all elements).
            3.  use .splice and specify the start (i.e. 0) and the entire array (array.length).
            4.  use .pop
*/

            let emptyTheArray = [1,2,3,4,5,6,7,8,9];

            emptyTheArray = [];          // reassign the value of 'emptyTheArray' to an empty array.
            console.log(emptyTheArray);  //=> []

                //or//

            let emptyTheArray2 = [1,2,3,4,5,6,7,8,9];

            emptyTheArray2.length = 0;      // when you do this, it truncates the array, meaning it will remove all elements.
            console.log(emptyTheArray2);    //=> []

                //or//

            let emptyTheArray3 = [1,2,3,4,5,6,7,8,9];

            emptyTheArray3.splice(0, emptyTheArray3.length);      // .splice from start (index of 0, to the length of the array)
            console.log(emptyTheArray3);     //=> []

            

/*
13. How do you combine and slice an array?
//////////////////////////////////////////
    
    How to Combine two arrays together
    ==================================
    -- to combine two arrays together, you use .concat.
    -- to combine an array, make a new variable and call the first part of your array, then .concat, then pass second array 
       as your argument.
    -- whatever array you attach the .concat method to will be first, etc.
*/
            const combo1 = [1,2,3];
            const combo2 = ['a','b','c'];
            const combo3 = ["why though"] 

            const doubleCombo = combo1.concat(combo2, combo3);     
            console.log(doubleCombo);                               //=> [ 1, 2, 3, 'a', 'b', 'c', 'why though' ]
/*
    How do you slice an array?
    ==========================
    -- essentially this is simply making a new array by using .slice and two arguments, where it begins and where it ends.
    -- remember that the first argument is where the array starts, the second argument is where the array ends.
*/
            const sliceUp = ['aaa','bbb','CCC', 'DDD', 'eee', 'fff'];

            const newSlice = sliceUp.slice(2,4);
            console.log(newSlice);              //=> [ 'CCC', 'DDD' ]
/*
    How do you copy objects in an array?
    ===================================
    -- when you copy objects, it is not the objects that are copied but the REFERENCES, so the elements in input and output
      will point to the same object.
        -- in the example below, when you call the concat method, the object is not copied to the new array.
        -- only the REFERENCE is copied.
*/
            const copObj = [{ name: 'Joe'}];
            const copArr = [1,2,3,4,5,6,7,8];

            const ObjArrCombo = copObj.concat(copArr);
            console.log(ObjArrCombo);                   //=> [ { name: 'Joe' }, 1, 2, 3, 4, 5, 6, 7, 8 ]




/*
14. How do you use the spread operator?
///////////////////////////////////////
    -- with the introduction of es6, there is a much easier way to combine arrays than using the .concat method using spread operator
    -- the spread operator (i.e. ...)
    -- when you spread an array all of its elements are returned individually.
    -- so we declare a new array THEN inside the new array we are adding the individual elements of the first and second arrays.
*/
            const spread1 = [1,2,3,4];
            const spread2 = [5,6,7,8];

            const combinedSpread = [...spread1, ...spread2];  
            console.log(combinedSpread);                         //=> [ 1, 2, 3, 4, 5, 6, 7, 8 ]

/*
    -- you also have a great deal more flexibility with this spread method.
    -- for example, we could add another element in the middle of the previous arrays.
*/
            const combinedSpread2 = [...spread1, 'WOW', ...spread2];
            console.log(combinedSpread2);                          //=> [ 1, 2, 3, 4, 'WOW', 5, 6, 7, 8 ]


    
/*
15. How do you iterate over an array?
/////////////////////////////////////
    -- to iterate over an array (i.e. loop over the elements in an array), you can use:
            -- for...of loop
            -- .forEach with function
            -- .forEach with es6 fat-arrow function.
*/

            const iterate1 = [1,2,3,4,5];

            for (let number of iterate1) {
                console.log(number);              //=> 1  2  3  4  5
            }

            //or//

            const iterate2 = [1,2,3,4,5];

            iterate2.forEach(function(number) {
                console.log(number);               //=> 1  2  3  4  5
            });

            //or using es^ fat-arrow function//

            iterate2.forEach((number) => {
                console.log(number);               //=> 1  2  3  4  5
            });
/*
    -- additionally, suppose we want to return not only the number but the index as well
*/
            iterate2.forEach(function(number, index) {                           //=>  the index of 1 is 0
                console.log(`the index of ${number} is ${index}`);               //    the index of 2 is 1
            });                                                                  //    the index of 3 is 2
                                                                                 //    the index of 4 is 3
                                                                                 //    the index of 5 is 4
 
/*
16. How do you join an array?
    -- to join an array (i.e. put all the element in the array together,) we use the .join() method.
    -- the .join method can have two arguments.
            -- the first OPTIONAL argument can specify how you want to seperated them (i.e. with a comma).
            -- the second argument is an empty string.
*/
            const joinArray = [1,2,3,4,5];

            const joined = joinArray.join(',', " ");  // note the two arguments here, the first a comma, the second an empty string
            console.log(joined);                      //=> 1,2,3,4,5

            const joined2 = joinArray.join('');
            console.log(joined2);                     //=> 12345

/*
    -- you can also use .split to literally split apart a string in an array.
*/
            const stringArray = 'hello';

            const splitString = stringArray.split('');
            console.log(splitString);                     //=> [ 'h', 'e', 'l', 'l', 'o' ]

          