///// THE PROBLEM ///////////////////////////////////////////////////
// Question: Given a string, return a new string with a reverded order of characters.
// Examples: reverse('hello') => 'olleh'

// think in terms of steps.



///// USE CASES //////////////////////////////////////////////////////
// One of the most frequently asked questions on technical interview round questions.
// You might be asked to write down different ways to reverse a string, or reverse a string without using built-in methods, or use recursion.
//




///// SOLUTIONS ///////////////////////////////////////////////////////


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



///// SOLUTIONS WITH COMMENTS ////////////////////////////////////////////////////////////////////////////////////////


///// Example 1 (comments):

                function reverse1(string) {
                    // Step 1: Use the split() method to return a new array, which results in  ["h", "e", "l", "l", "o"].
                    const array =  string.split('');
                    // Step 2: Use the reverse() method to reverse the new created array, which results in ["o", "l", "l", "e", "h"].
                    array.reverse();
                    // Step 3: Use the join() method to join all elements of the array into a string, which results in "olleh".
                    return array.join('')
                }



///// Example 2 (comments):

                function reverse2(string) {
                    // STEP 1: Take the argument (i.e. string) and simply chain the methods you want.
                    return string.split('').reverse().join('');
                }



///// Example 3 (comments):

                function reverse3(string) {
                    //  STEP 1: Create an empty string that will host the new created string.
                        let newString = '';
                        for (let i = string.length - 1; i >= 0; i-- ) {
                            newString += string[i];
                        }
                        return newString;
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







                    function reverse4(string) {
    ///// STEP 1: Create a temporay variable called reverse and assign it an empty string.  
    /////         This is the string that will be assembled over time as we iterate through the string.
                        let reversed = '';
    ///// STEP 2: Using a for loop, we take each character out of the original string and stick it in a new one, one at a time.
    /////         This is saying: 
    /////         1. "for",
    /////         2.  Inside parentheses, create a temporary variable (i.e. "let character") that is redeclared every time through the loop.
    /////         3. "if"
    /////         4.  The iterable object we want to iterate through (i.e. "string").                                  
                    for (let character of string) {      
                    reversed = character + reversed;
                    }
                    return reversed;
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
console.log(reverseString1("hello 1"));
console.log(reverseString2("hello 2"));
console.log(reverseString3("hello 3"));
console.log(reverseString4("hello 4"));
console.log(reverseString5("hello 5"));
console.log(reverseString6("hello 6"));
console.log(reverseString7("hello 7"));


