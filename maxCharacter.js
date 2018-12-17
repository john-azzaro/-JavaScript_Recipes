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

function maxChar(string) {

}