// array spread operator


numbers = [1,2,3,4,5];
multiplier = [6,7,8,9];

// includes the mulitplier as a single array added to numbers
console.log(numbers.push(multiplier));


// includes the multiplier numbers with the numbers
console.log(numbers.push(...multiplier));



