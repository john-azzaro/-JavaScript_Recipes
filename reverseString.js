///// THE PROBLEM ///////////////////////////////////////////////////
// Question: Given a string, return a new string with a reverded order of characters.
// Examples: reverse('hello') => 'olleh'

// think interms of steps.



///// USE CASES //////////////////////////////////////////////////////
/// ...



///// SOLUTION 1 /////////////////////////////////////////////////////
//
/* 
1. take string.
2. wehat do i need to do to get to the end.

last, i need it to be reversed.



*/

function reverse1(string) {
    const array =  string.split('');
    array.reverse();
    return array.join('')
}



///// SOLUTION 2 /////////////////////////////////////////////////////
function reverse2(string) {
    return string.split('').reverse().join('');
}



///// SOLUTION 3 /////////////////////////////////////////////////////
    // for (let{variable of declaration} character{temporary variable that is redeclared EVERY time through the loop} of string{iterable object we want to iterate through})
    // so we'll iterate through every character of string one by one and set each character equal to thie temporary variable "character".
    // we then take that character and add it on to the start of the string reversed 
    // then after the entire for loop, we reutrn reversed

function reverse3(string) {
    let newString = '';
    for (let i = string.length - 1; i >= 0; i-- ) {
        newString += string[i];
    }
    return newString;
}



///// SOLUTION 4 /////////////////////////////////////////////////////
function reverse4(string) {
    let reversed = '';                   // string that will be assembled over time
    for (let character of string) {      
        reversed = character + reversed;
    }
    return reversed;
}




///// SOLUTION 5 /////////////////////////////////////////////////////
function reverse5(string) {
    return [...string].reverse().join('');
}



///// SOLUTION 6 /////////////////////////////////////////////////////
function reverse6(string) {
    return string.split('').reduce((reversed, character) => {
        return character + reversed;
    }, '');
}



///// SOLUTION 7 /////////////////////////////////////////////////////
// Reduce helper
// STEP 1: string.split turns this into an array,
// STEP 2: Then we set up the reduce helper function,
//         Note on reduce: Reduce is used to take all the different values within an array and condense it down to one singular value.
//         So what we're doing here is taking all the values in the array "string.split('')" and then condense (.reduce) to a single string value.
// STEP 3: 
function reverse7(string) {
    return string.split('').reduce((reversed, character) => character + reversed, '');
}


///// Output //////////////////////////////////////////////////////////
console.log(reverse1("hello"));
console.log(reverse2("hello"));
console.log(reverse3("hello"));
console.log(reverse4("hello"));
console.log(reverse5("hello"));
console.log(reverse6("hello"));
console.log(reverse7("hello"));

