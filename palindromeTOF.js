
// palindrome True or false
//-- Question: Given a string, return true if the string is a palindrome or false if it is not.
//-- Palindromes are strings that form the same word if it is reversed.
//-- Example: abba === true
//            abcd === false


///// Solutions ///////////////////////////////////////////////////////

function palindrome(string) {
    const reversed = string.split('').reverse().join('');
}

console.log()


function palindrome(string) {

        // we create a variable that just much the same thing that the reverse string problem does, specfically:
        // string.split('') gives you an array...
        // .reverse() reversed the order of the string...
        // .join('') joins everything back together again.
    const reversed = string.split('').reverse().join('');
        // Now you need a direct comparison between the reverse of the string and the return result.  If the two are equal, great!  if not, then false. 
    return string === reversed;
}

console.log(palindrome("abba"));
console.log(palindrome("wakka"));