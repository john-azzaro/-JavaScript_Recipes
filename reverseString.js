///// THE PROBLEM ///////////////////////////////////////////////////
// Question: Given a string, return a new string with a reverded order of characters.
// Examples: reverse('hello') => 'olleh'

// think interms of steps.



///// USE CASES //////////////////////////////////////////////////////
// One of the most frequently asked questions on technical interview round questions.
// You might be asked to write down different ways to reverse a string, or reverse a string without using built-in methods, or use recursion.
//


///// EXAMPLE 1: BUILT-IN METHODS: 
               
                function reverseString1(string) {
                    const array =  string.split('');
                    array.reverse();
                    return array.join('')
                }



///// EXAMPLE 2: CHAINING METHODS TOGETHER: 
                
                function reverseString2(string) {
                    return string.split('').reverse().join('');
                }



///// EXAMPLE 3: DECREMENTING LOOP: 

                function reverseString3(string) {
                    let newString = '';
                    for (let i = string.length - 1; i >= 0; i-- ) {
                        newString += string[i];
                    }
                    return newString;
                }



///// EXAMPLE 4:   

                function reverseString4(string) {
                    let reversed = '';                   
                    for (let character of string) {      
                        reversed = character + reversed;
                    }
                    return reversed;
                }



///// EXAMPLE 5:

                function reverseString5(string) {
                    return [...string].reverse().join('');
                }



///// EXAMPLE 6:

                function reverseString6(string) {
                    return string.split('').reduce((reversed, character) => {
                        return character + reversed;
                    }, '');
                }



///// EXAMPLE 7:

                function reverseString7(string) {
                    return string.split('').reduce((reversed, character) => character + reversed, '');
                }



////// EXAMPLE 8:

                function reverseString8(string) {
                    if (string === "")
                    return "";
                    else
                    return reverseString(string.substr(1)) + string.charAt(0);
                }

                

/////// EXAMPLE 9:

                function reverseString9(string) {
                    return (string === '') ? '' : reverseString(string.substr(1)) + string.charAt(0);
                }


















///// SOLUTIONS WITH COMMENTS ////////////////////////////////////////////////////////////////////////////////////////


///// SOLUTION 1 /////////////////////////////////////////////////////
//
/* 
1. take string.
2. what do i need to do to get to the end.

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



////// SOLUTION 3 /////////////////////////////////////////////////////
    // 

function reverse3(string) {
//  STEP 1: Create an empty string that will host the new created string.
    let newString = '';
    for (let i = string.length - 1; i >= 0; i-- ) {
        newString += string[i];
    }
    return newString;
}



///// SOLUTION 4 /////////////////////////////////////////////////////
    // for (let{variable of declaration} character{temporary variable that is redeclared EVERY time through the loop} of string{iterable object we want to iterate through})
    // so we'll iterate through every character of string one by one and set each character equal to thie temporary variable "character".
    // we then take that character and add it on to the start of the string reversed 
    // then after the entire for loop, we reutrn reversed

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
console.log(reverseString1("hello"));
console.log(reverseString2("hello"));
console.log(reverseString3("hello"));
console.log(reverseString4("hello"));
console.log(reverseString5("hello"));
console.log(reverseString6("hello"));
console.log(reverseString7("hello"));
console.log(reverseString8("hello"));
console.log(reverseString9("hello"));
