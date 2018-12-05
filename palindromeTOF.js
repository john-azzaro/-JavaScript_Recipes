
///// palindrome True or false /////////////////////////////////////////


//-- Question: Given a string, return true if the string is a palindrome or false if it is not.
//-- Palindromes are strings that form the same word if it is reversed.
//-- Example: abba === true
//            abcd === false


///// Solutions ///////////////////////////////////////////////////////

        function palindrome(string) {
            const reversed = string.split('').reverse().join('');
            return string === reversed;
        }


        function plaindrome2(string) {

        }


///// Solutions with comments /////////////////////////////////////////

        

        function palindrome(string) {
                // we create a variable that just much the same thing that the reverse string problem does, specfically:
                // string.split('') gives you an array...
                // .reverse() reversed the order of the string...
                // .join('') joins everything back together again.
            const reversed = string.split('').reverse().join('');
                // Now you need a direct comparison between the reverse of the string and the return result.  If the two are equal, great!  if not, then false. 
            return string === reversed;
        }



        function plaindrome2(string) {
                // in this soltion, we're going to use the .every() array helper.
                // we'll take our string, turn it into an array and then use the .every() helper on it.
                // the .every() function is used to do a boolean check on every element within an array.
                // So in this example: 
                    /* 
                        1. we have an array containing values 0, 10, and 14
                        [o, 10, 14]
                        2. we want to ask the question "if every single value in there was greater than 5"
                            the code would look like this:
                                array.every((val) => val > 5)
                                    first, we take the array and we would call the .every() function on it.
                                    second, we would pass in a function to invoke for every element within the array.
                        3. So the first time this function is executed, we pas in the first element as val (i.e. 0).
                            In this case, 0 is not greater than 5, so it would return FALSE.
                            When the .every() function runs, it checks to see if the return value of .every() function.
                            If any function returns false then the overall expression will return false as well.
                            But if the inner function (i.e. the > sign) returns true for every element, then the entire function is true.
                        
                            SO TO SUM UP: Every is aplty named and its essentially executing a check or some type of comparison for every
                            element in the array.

                            To check if we are working with a palindrome

                
                
                    */
            
                }

    console.log(palindrome("abba"));     // true
    console.log(palindrome("wakka"));    // false