/// max characters /////////////
/* 
given a string, return the character that is most commonly used in the string.
    example: maxChar("abcccccccd") === "c"
    example: macChar("12311111") === "1"

NOTE: This technique that we're goign to use to solve can be used in many other string related questions.

common variations of this question:
    What is the most common character in the string?
    Does string A have the same characters as string B (is it an anagram)?
    Does the given string have any repeated characters in it?

Anything that revolves around counting number of charcters or comparing the number of charcters can be solved with the following solution.

What is the startegy?

we are goign to take a string and convert it into an object.

                {
                    H: 1,
                    e: 3,
                    l: 2,
                    o: 1,
"hello there" -->   "": 1,
                    t: 1,
                    h: 1,
                    r: 1,
                    !: 1
                }

the keys of the object are the charcters from the string
the values are the number of times that the character has been found

In the case of "Hello There", we have 1 capital H, 3 lower case e's, etc.
This type of map makes many different questions very straight forward.

So in the case of the question "what is the most common character in the string", now that we have the object above, we can walk
throught the objectand find the property with the highest number assigned to it (which in this case is "e").

In the case of the question "Does string A have the same characters as string B (is it an anagram)", we could build up an object
that looks like this for both string A and string B and then compare the two making sure that both objects have the same number of 
properties inside of it and the same values.

In the case of the question "Does the given string have any repeated charcters in it?", its easy because if there is any value inside 
of the object with a value greater than 1, we can see from the key/value pairs that yes there are.



So setting up an object like that above is a strong tool for problem solving with any type of question around for producing some counts or
verification of a word.


*/

// 1. take a new string:

const string = "Hello There!";

// 2. Then we need to iterate through the string and add that character to a new object.
//    To do this, we need to create a new object that we will call chars.

const chars = {};

// At this point there are a few ways we can take these charcters and add them to the object.
// First way is to split the string into an array and then use forEach helper to loop over all the characters.
// Second is to use a for...of loop to loop through all of the characters inside there and do the same thing.

// 3. using the for...of method.
// First we'll iterate through the variable "string" and then for every character there we will either ass the character
// as a property and assign it and assign it a value of 1 or if we;ve already seen that character before we will add 1 to it.


for (let char of string) {
    if(!chars[char]) {
        chars[char] = 1;
    } else {
        chars[char]++;
    }
    }
chars;




/* 
////////////////////////////
Walkthough---
////////////////////////////

for (let char of string) {
// for every character (char) that we find in string...
    if(!chars[char]) {
// char[char] will return a reference to that particular character or at leasdt it value.
// if it is the first tim (which this line reference), we want to set that value as 1.
// the line above says that "if nothing exists here now, set chars[char] to 1 "
        chars[char] = 1;
    } else {
// otherwise (else), assume that there is a number already there and increment by 1.
        chars[char]++;
    }
}
// then print chars object.
chars;

*/


// //// alternate version ///////////////

// for (let char of string) {
//     chars[char] = chars[char] + 1 || 1;









// //// First solution ////////////
// function maxChar(string) {

// }