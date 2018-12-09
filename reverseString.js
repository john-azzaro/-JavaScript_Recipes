///// THE PROBLEM ///////////////////////////////////////////////////
//-- Question: Given a string, return a new string with a reverded order of characters.
//-- Examples: reverse('hello') => 'olleh'





///// USE CASES //////////////////////////////////////////////////////
//-- One of the most frequently asked questions on technical interview round questions.
//-- You might be asked to write down different ways to reverse a string, or reverse a string without using built-in methods, or use recursion.





///// SOLUTIONS ///////////////////////////////////////////////////////


///// Solution 1: BUILT-IN METHODS: 
               
                function reverseString1(string) {
                    const array =  string.split('');
                    array.reverse();
                    return array.join('')
                }



///// Solution 2: CHAINING METHODS TOGETHER: 
                
                function reverseString2(string) {
                    return string.split('').reverse().join('');
                }



///// Solution 3: DECREMENTING LOOP: 

                function reverseString3(string) {
                    let newString = '';
                    for (let i = string.length - 1; i >= 0; i-- ) {
                        newString += string[i];
                    }
                    return newString;
                }



///// Solution 4:   

                function reverseString4(string) {
                    let reversed = '';                   
                    for (let character of string) {      
                        reversed = character + reversed;
                    }
                    return reversed;
                }



///// Solution 5:

                function reverseString5(string) {
                    return string.split('').reduce((reversed, character) => {
                        return character + reversed;
                    }, '');
                }



///// Solution 6:

                function reverseString6(string) {
                    return string.split('').reduce((reversed, character) => character + reversed, '');
                }



// ///// Solution 7:


//                 function reverseString7(string) {
//                     return [...string].reverse().join('');
//                 }








//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///// SOLUTIONS STEP-BY-STEP  ////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///// Solution 1: BUILT-IN METHODS (:

                function reverse1(string) {
                        // Step 1: Use the split() method to return a new array, which results in  ["h", "e", "l", "l", "o"].
                    const array =  string.split('');
                        // Step 2: Use the reverse() method to reverse the new created array, which results in ["o", "l", "l", "e", "h"].
                    array.reverse();
                        // Step 3: Use the join() method to join all elements of the array into a string, which results in "olleh".
                    return array.join('')
                }



///// Solution 2 (comments):

                function reverse2(string) {
                        // STEP 1: Take the argument (i.e. string) and simply chain the methods you want.
                    return string.split('').reverse().join('');
                }



///// Solution 3 (comments):

                function reverse3(string) {
                        // STEP 1: Create an empty string that will host the new created string.
                    let newString = '';
                        // Step 2. Create the FOR loop
                            // The starting point of the loop will be (str.length - 1) which corresponds to the last character of the string, "o".
                            // As long as i is greater than or equals 0, the loop will go on.  
                            // We decrement i after each iteration .       
                            /* Here, hello's length equals 5.
                                For each iteration: i = str.length - 1 and newString = newString + str[i]
                                    First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
                                    Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
                                    Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
                                    Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
                                    Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
                            End of the FOR Loop*/
                    for (let i = string.length - 1; i >= 0; i-- ) {
                        newString + string[i];
                    }
                        // Step 3. Return the reversed string
                    return newString;
                }



////// Solution 4 (comments):

                function reverse4(string) {
                        // STEP 1: Create a temporay variable called reverse and assign it an empty string.  
                        // (This is the string that will be assembled over time as we iterate through the string).
                    let reversed = '';
                        // STEP 2: Using a for loop, we take each character out of the original string and stick it in a new one, one at a time.
                        // This is saying: 
                        // 1. "for"...
                        // 2.  Inside parentheses, create a temporary variable (i.e. "let character") that is redeclared every time through the loop.
                        // 3. "of"...
                        // 4.  The iterable object we want to iterate through (i.e. "string") passed in as an argument.                                  
                    for (let character of string) {  
                        // STEP 3: In the body of the loop, we add "character" added on to the start of the string reversed.
                    reversed = character + reversed;
                    }
                        // STEP 4: After the entire for loop, we return "reversed".
                    return reversed;
}



///// SOLUTION 5 /////////////////////////////////////////////////////

function reverse5(string) {
    return [...string].reverse().join('');
}



///// SOLUTION 6 /////////////////////////////////////////////////////

function reverse6(string) {
    return string.split('').reduce(function (reversed, character) {
        return character + reversed;
    }, '');
}



///// SOLUTION 7 /////////////////////////////////////////////////////

function reverse7(string) {
        // STEP 1: Turn the string into an array (by calling split function on it).
        // STEP 2: Then use Reduce Helper.
        //         Reduce takes all the different values within an array and condense them down to a single string value.
        //         Reduce takes two seperate arguments, the arrow function and starting intial value for our function which is an empty string.
        // STEP 3: Reduce will cycle through each number in the array (like a for loop).
        // STEP 4: 
    return string.split('').reduce((reversed, character) => character + reversed, '');
}



// Reduce helper
// STEP 1: string.split turns this into an array,
// STEP 2: Then we set up the reduce helper function,
//         Note on reduce: Reduce is used to take all the different values within an array and condense it down to one singular value.
//         So what we're doing here is taking all the values in the array "string.split('')" and then condense (.reduce) to a single string value.
// STEP 3: 





///// Output //////////////////////////////////////////////////////////
console.log(reverseString1("hello 1"));
console.log(reverseString2("hello 2"));
console.log(reverseString3("hello 3"));
console.log(reverseString4("hello 4"));
console.log(reverseString5("hello 5"));
console.log(reverseString6("hello 6"));
console.log(reverseString7("hello 7"));


