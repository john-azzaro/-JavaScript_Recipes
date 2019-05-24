"usestrict";
// OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
//     1. dividing an array into chunks of a certain size.
// SUMMARY //////////////////////////////////////////////////////////////////////////////////////////////////
// What is the problem?:  
//    1. Given an array and chunck size, divide the array into many subarrays where each subarray is of length size.
//         -- example:
//               chunk([1,2,3,4],2)          --> [[1,2][3,4]]
//               chunk([1,2,3,4,5], 2)       --> [[1,2],[3,4],[5]]
//               chunk([1,2,3,4,5,6,7,8], 3) --> [[1,2,3],[4,5,6],[7,8]]
//               chunk([1,2,3,4,5], 4)       --> [[1,2,3,4],[5]]
//               chunk([1,2,3,4,5], 10)      --> [[1,2,3,4,5]]

// What is the BEST solution? 
//     1. solution 1 for now.

// What are the special components of these solutions?:  
//     1. for ...of loop
//     2. .slice() method

// What needs work?
//     1. the result of the chunked arrays seems to be a bit off compared to the examples, need to look into it.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Basic overview of the problem
// You are given this:   
//    
//             chunk([1,2,3,4],2)   -->   [[1,2][3,4]] 
//     
//    Suppose we are asked to call chunk with an array of 4 numbers (i.e. [1,2,3,4] and a spcific chunk length of 2 (passed in as the chunk size),
//    we'll end up with a big array with 2 smaller arrays inside it, spcifically [[1,2][3,4]].





///// SOLUTION 1 ///////////////////////////////////////////////////////////////////////////

function chunk(array, size) {
    const chunked = [];

    for (let element of array) {
        const last = chunked[chunked.length - 1];
        if (!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push([element])
        }
    }
return chunked;
}

console.log("solution 1")
console.log(chunk([1,2,3,4], 2))

/* 
// SOLUTION 1 ///////////////////////////////////////////////////////////////

// To solve the problem, we need to lay out our plan:
// 1. Create an empty array to hold chunks of data.
// 2. For each element in the 'unchunked' array...
// 3. retrieve the last element in 'chunked'.
// 4. If last element does not exist, or if its length is equal to chunk size...
// 5. Push a new chunk into 'chunked' with the current element.
// 6. Else add the current element into the chunk.

function chunk(array, size) {
       // new array that holds all the differen chunks of data
    const chunked = [];
       // next we setup a for...of loop to iterate through the array.
    for (let element of array) {
            //to get the last element in the chunked array, we create a temporary variable called "last" (i.e. last element in array).
            // to get this we say "chunked at chunk.length minus 1".
        const last = chunked[chunked.length - 1];
            // if the last element doesnt exist OR the length is equal to the chunk size (in this case 2), then push element into chunked.
        if (!last || last.length === size) {
            chunked.push([element]);
            // otherwise push into the temporary variable "last" (which will then feed into chunk if it can).
        } else {
            last.push([element])
        }
    }
    // then we return the variable "chunked"
return chunked;
}

console.log(chunk([1,2,3,4], 2))

*/




///// SOLUTION 2 ///////////////////////////////////////////////////////////////////////////


function chunk2(array, size) {
    const chunked = [];
    const index = 0;
    while(index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}

console.log("solution 2")
console.log(chunk([1,2,3,4], 2))



/* 
// solving with .slice()
// using the standard slice method is just applying the method and, in this case, stating the index 0 - 3 (note 3 is not included).

const letters = ["a","b","c","d","e"];
letters.slice(0,3)   // ["a","b","c"]

// so the solution to solution 2 is as follows:
// 1. Create empty 'chunked' array.
// 2. Create "index start at 0".
// 3. while index is less than array.length
// 4. push a slice of length 'size' from 'array' into 'chunked'.
// 5. add 'size' to 'index'.


function chunk2(array, size) {
    const chunked = [];
        // this is the index variable
    const index = 0;
        // then we setup our while loop which will run as long as the index is less than the orginal array.length.
    while(index < array.length) {
            // array.slice produces an array that contains some number of elements out of the orginal array
            // the slice that is porduced goes straight into chunked using the push method.
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}

console.log("solution 2")
console.log(chunk([1,2,3,4], 2))

*/