"usestrict";
// OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
//     1. 
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
//     1. 

// What are the special components of these solutions?:  
//     1. 

// What needs work?
//     1. 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Basic overview of the problem
// You are given this:   
//    
//             chunk([1,2,3,4],2)   -->   [[1,2][3,4]] 
//     
//    Suppose we are asked to call chunk with an array of 4 numbers (i.e. [1,2,3,4] and a spcific chunk length of 2 (passed in as the chunk size),
//    we'll end up with a big array with 2 smaller arrays inside it, spcifically [[1,2][3,4]].




// SOLUTION 1 ///////////////////////////////////////////////////////////////

// To solve the problem, we need to lay out our plan:
// 1. Create an empty array to hold chunks of data.
// 2. For each element in the 'unchunked' array...
// 3. retrieve the last element in 'chunked'.
// 4. If last element does not exist, or if its length is equal to chunk size...
// 5. Push a new chunk into 'chunked' with the current element.
// 6. Else add the current element into the chunk.




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

console.log(chunk([1,2,3,4], 2))