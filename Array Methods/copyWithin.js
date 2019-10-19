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
//      •   The first argument is the TARGET, which is where the method will overwrite.
//          •   If you have array.copyWithin(1, 0):
//              BEFORE: ["alpha", "beta", "charlie", "delta", "echo", "frank"]
//              AFTER:  ['alpha', 'alpha', 'beta', 'charlie', 'delta', 'echo' ]
//                                  ^^^
//          •   If you have array.copyWithin(2, 0):
//              BEFORE: ["alpha", "beta", "charlie", "delta", "echo", "frank"]
//              AFTER:  [ 'alpha', 'beta', 'alpha', 'beta', 'charlie', 'delta' ]
//                                           ^^^
//          •   If you have array.copyWithin(3, 0):
//              BEFORE: ["alpha", "beta", "charlie", "delta", "echo", "frank"]//
//              AFTER:  [ 'alpha', 'beta', 'charlie', 'alpha', 'beta', 'charlie' ]
//                                                      ^^^
//
//
//
//
//
//
//
//

// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: 
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//      
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EXAMPLE 1: using copyWithin to overwrite from the the second array item (i.e. 1) position.

const array = ["alpha", "beta", "charlie", "delta", "echo", "frank"];

function copyWithinIt() {
    return array.copyWithin(3, 0)
}

console.log(copyWithinIt());




/* 
So what's happening here? 




*/