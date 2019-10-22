'use strict';
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method:  .copyWithin()
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     array.copyWithin(target, start, end);
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      •   .copyWithin copies an array of elements to another position in the array, overwriting existing values.
//      •   .copyWithin returns a NEW array containing the selected elements.
//      •   .copyWithin takes INTEGERS (i.e. 1, 34, ...) as arguments.
//      •   Target is required. Start and end are optional.
//
//      •   Think of copyWithin as "copying" the array "within" the array.
//      •   This is a more advanced form of the .slice, but unlike slice (which does not overwrite the original array),
//          copyWithin DOES overwrite the existing array.
//
//      •   The first argument is the TARGET, which is where the method will overwrite.
//          •   If you have array.copyWithin(1, 0), the copied section will start at 1 (position 2 in the array) with
//              an array that starts at 0 (the very beginning of the array).
//
//              BEFORE: ["alpha", "beta", "charlie", "delta", "echo", "frank"]
//              AFTER:  ['alpha', 'alpha', 'beta', 'charlie', 'delta', 'echo' ]
//                                  ^^^
//          •   If you have array.copyWithin(2, 0):
//              BEFORE: ["alpha", "beta", "charlie", "delta", "echo", "frank"]
//              AFTER:  [ 'alpha', 'beta', 'alpha', 'beta', 'charlie', 'delta' ]
//                                           ^^^
//          •   If you have array.copyWithin(3, 0):
//              BEFORE: ["alpha", "beta", "charlie", "delta", "echo", "frank"]
//              AFTER:  [ 'alpha', 'beta', 'charlie', 'alpha', 'beta', 'charlie' ]
//                                                      ^^^
//      •   The SECOND argument is the START point, which is where the overwrite will start from.   
//          •   If you have array.copyWithin(2, 1):
//              BEFORE: ["alpha", "beta", "charlie", "delta", "echo", "frank"]
//              AFTER:  [ 'alpha', 'beta', 'beta', 'charlie', 'delta', 'echo' ]
//                                          ^^^
//      •   The THIRD argument is the END point, which is where the slice will end.
//          •   If you have array.copyWithin(2, 1, 2):
//              BEFORE: ["alpha", "beta", "charlie", "delta", "echo", "frank"]
//              AFTER:  [ 'alpha', 'beta', 'beta', 'delta', 'echo', 'frank' ]
//                                  ^^^------^^^
//
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: using copyWithin.
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//      https://www.w3schools.com/jsref/jsref_copywithin.asp  -- concise explaination
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EXAMPLE 1: using copyWithin.

const array = ["alpha", "beta", "charlie", "delta", "echo", "frank"];

function copyWithinIt() {
    return array.copyWithin(2, 1, 2)
}

console.log(copyWithinIt());


