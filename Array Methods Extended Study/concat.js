'use strict';
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: .concat()
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     array1.concat(array2, array3, array4, ..., arrayX);      
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • .concat() is used to join several arrays together.
//      • .concat() does not change existing arrays but rather returns a new array containing the joined arrays.  
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: Basic joining of two arrays using concat():
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//     
//      https://www.w3schools.com/jsref/jsref_concat_array.asp  --  w3schools outline of concat
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
// SAMPLE DATA

    let myFirstArray = ["a","b","c","d","e","f","g","h","i","j",];
    let mySecondArray = [1,2,3,4,5,6,7,8,9,10];




// EXAMPLE 1: Basic joining of two arrays using concat():

    function joinArrays(array1, array2) {
        return array1.concat(array2);
        
    }
    console.log(joinArrays(myFirstArray, mySecondArray));




// EXAMPLE 2: Another basic joining of two arrays using concat():

    function joinArrays2(array1, array2) {
        const arrayCombo = array1.concat(array2);
        return arrayCombo;
    }
    console.log(joinArrays2(myFirstArray, mySecondArray));