"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Variables & Data Types
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is a Variables? 
//     2. What is the basic structure of a variable?
//     3. What are the THREE commands used to create variable?
//     4. What are the different types in JavaScript?
//     5. What is the difference between a dynamic language like JavaScript and a static language like Java?
//          + What is a static language?
//          + What is a dynamic language?
//     6. What is the difference between Null and Undefined?
//     7. What is strict mode and what does it do?
//     8. Does JavaScript pass parameters by value or reference?
//     9. What is pass-by value?
//    10. What is pass-by reference?
//    11. What is NaN?
//    12. How do you check for NaN?
//    13. What is Coercion?
//    14. What are special characters and escape notation?
//    15. What is a template literal?
//

// NOTES ///////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on variables and data types taken from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        and Answer format for improved readability.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
1. What is a variable?
/////////////////////
==SHORT ANSWER==
    • A variable is a name attached to a value.
    • A variable stores and keeps track of information within a program.

==EXTENDED ANSWERS==
    • A variable is 'declared' with a key word (i.e. var, let, const).
    • A variable manages the state of a program.                                  
        • e.g. let clickCount = 2 
            • the "state" of the program is "value" of the variable, specifically 2.
    • A variable uses the equal sign (=) to assign a value to a variable.
        • e.g. let name = 'john'
    • A variable WITHOUT a value is called an empty variable.
    • Javascript uses 'lexical scope'.
        • lexical scope means that as the compiler runs through your code, the location is "frozen" by the lexer
           during compilation time.  
        • Then, as the compiler encounters the variable , it asks scope to see if the variable already exists.
            • If yes, then ignore and move forward.
            • if no, then the lexer asks scope to declare (create) a new variable called that name for that scope.
    • Variables declared outside a function haved 'global variables'.
    • Variable declared inside a function have 'function scope'
*/



/*
2. What is the basic structure of a variable?
////////////////////////////////////////////
==SHORT ANSWER==
    • A Variable is comprised of a: keyword, name, assignment operator, and a value.

==EXTENDED ANSWERS==
    What does a basic variable look like?
    =====================================

        JavaScript Keyword      Variable Name     Assinment Operator        Value
        __________________      _____________     __________________      ________
            let                    name                   =                'john'


    What can you NOT do with variables?
    ====================================
    • You CANNOT use a reserved word (i.e. let let, var var, let return, etc.).
    • You CANNOT start with a number (i.e. 1name).
    • you CANNOT use a space or a hyphen (i.e. -).

    What should NOT you do with variables?
    ======================================
    • You SHOULD NOT declare multiple variables in the same .  
         • you can use a shorthand method for declaring multiple variables in one statement but it is NOT best practice.
         •  var person = "john", 
                 place = "park", 
                 thing = "watermellon";

    What SHOULD you do with variables?
    ==================================
        • You SHOULD use meaningful names.
        • You SHOULD use camel casing (i.e. thisIsAnExample).
        • You SHOULD either Uppercase, LowerCase, underscore, or cashsign for the first letter
*/



/*
3. What are the THREE commands used to create variable?
//////////////////////////////////////////////////////
==SHORT ANSWER==
    • The three commands to create a variable are: let, var, and const.

==EXTENDED ANSWER==
    • var    • value can be changed. 
              • HOWEVER, "var" has been depricated so use "let" instead.
    • let    • value can be changed.
    • const  • value CANNOT be changed (i.e. const interestRate = 0.3 •then•> interestRate = 1 //-> error )                
*/
        var redFruit = 'apple';       
            console.log(redFruit)     //-> apple

        let yellowFruit = 'banana';
            console.log(yellowFruit)  //-> banana

        const greenFruit = 'kiwi'
            console.log(greenFruit)   //-> kiwi

    
    
/* 
4. What are the different types in JavaScript?
//////////////////////////////////////////////
==SHROT ANSWER==
    The types of data that can be assigned to a variable include: strings, numbers, booleans, Objects, functions, Null, and undefined.

==EXTENDED ANSWER==
    • A data type is a kind of value that is assigned to a variable.
    • There are 6 data types.
    • Types can either be MUTABLE or IMMUTABLE.
        • MUTABLE means the type can change, like the values of an objects and arrays can be changed.
        • IMMUTABLE means that the type cannot change.  This applies to: Numbers, booleans, null, undefined.
        • In javascript, strings are immutable since you can index them at any index in the string.
*/

//    1. string     -     A string (literal) is a series of characters within single or double quotes.
                            console.log(typeof('Hello'));   //-> "string" 
                          

//    2. number     -     A number (numeric literal) is used to represent numbers, both integers an floating point decimals numbers. 
                            console.log(typeof(23));
                            console.log(typeof(1.345));         
                            //-> "number"
                            //->  number

//    3. Boolean    -     A Boolean (literal) evaluates either true or false.
                            console.log(typeof(true));       
                            //-> "boolean"

//    4. Undedined  -     Special value that declares variable before assigning a value to them.
                            console.log(typeof(undefined));       
                            //-> "undefined"

//    5. Null       -     Null is a special value used to indicate that the variable has no value.
                            console.log(typeof(null));      
                            //-> "object" 
                            //    BUT this is incorrect but the problem has existed for so long that it would be
                            //    problematic to fix it so its stayed like that.  It should be "null"

//    6. Object     -    Objects are complex data types that combine primitive datat types like numbers, strings, booleans, null, undefined.
                            console.log(typeof({}));      
                            //-> "object"              

                        
                    
/* 
5. What is the difference between a dynamically typed language like JavaScript and a staticly typed language like Java?
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
==SHORT ANSWER==
    • STATIC languages (like Java) CANNOT be changed but DYNAMIC languages (like JavaScript) can be changed.

==EXTENDED ANSWER==
    What is a static language?
    ==========================
    • In a STATIC language (like Java), the type of that variable is set and CANNOT be changed    

            String a = 'cat';  

            • In a statically typed language like Java we are saying that this varibale 'a' holes strings and ONLY strings.  
            • So in Java you have to specify what EXACT types each variable will hold.
    

    What is a dynamic language?
    ===========================   
    • In a DYNAMIC language like JavaScript, the typeof variables are determined DYNAMICALLY at the runtime.  So if you have this:
          
            let a = 'cat';
    
            • This will evaluate as 'string'.  
            • But if we then CHANGE the value from string to a number (i.e. 'point' the name to the value to a number), it will
               evaluate as a 'number'.  It DYNAMICALLY changes at runtime.
*/



/* 
6. What is the difference between Null and Undefined?
/////////////////////////////////////////////////////
==SHORT ANSWER==
    • JavaScript will use Undefined by default for uninitialized variables.  Null is set by humans.

==EXTENDED ANSWER==
    • Null and Undefined seem to mean the same thing, that there is no value.  However, there is a subtle difference
       between the two.  What are the subtle differences?

    What does undefined mean?
    =========================
        • Undefined is used by JavaScript to be NO VALUE.
        • Undefined is used for uninitialized variables (i.e. let a;) without a value.
        • Undefined is used for unknown variables, unknown properties, 
        • Undefined is a core JavaScript function that informs you it is either an uninitialized variable, a parameter
           that is missing from the function parameter list, or an unknown property of an object.

    What does null mean?
    ====================
        • Null is used by programmers to indicate NO VALUE.
        • Null will never be used by JavaScript for you... it will always use undefined.
        • Only a programmer will ever set a variable to Null.
*/


/* 
7. What is "strict mode" and what does it do?
//////////////////////////////////////////////
==SHORT ANSWER==
    • Strict mode allows you to place a program or a function in a strict operating context.

==EXTENDED ANSWERS==   
    • To enable strict mode, you simple put 'use strict'; at the beginning of your JavaScript document.
    • Strict mode makes debugging easier, errors will be easier to find.
    • It is a string because when it was first implemented only new browsers supported it, so a string
       was used and when a new browser reads the string, it knows to turn itself into strict mode operating context.    
*/


/* 
8. Does JavaScript pass parameters by value or reference?
////////////////////////////////////////////////////////
==SHORT ANSWER==
    • The answer depends on the data type: 
        • If the value is a PRIMITIVE (i.e. strings, numbers, booleans, etc.) then it is passed as a VALUE.
        • If the value is an OBJECT, then it is passed as a REFERENCE.




/*
9. What is pass-by value?
////////////////////////
==SHORT ANSWER==
    • pass-by value means that if you change the value in the function, it will NOT effect the outer scope.

==EXTENDED ANSWER==
    • for primitive types, they are passed in by value. 
    • In the case below, we are passing in a copy of a.
       • Anything you do to (a) INSIDE the body of the function 
*/  
            var a = 1;
            function foo(a) {    
                a = 2;
            }
            console.log(foo(a))   // 1
            console.log(a)



/*
10. What is pass-by reference?
///////////////////////////////
==SHORT ANSWER==
    • Pass-by reference means you are passing something that POINTS to something else (vs a copy of the object).

==EXTENDED ANSWER==   
     • Since JavaScript passes an object by reference, when you change a property of that object from within the 
        function, the change will be REFLECTED in the outer scopes.

    • In the example below, when you pass in an object into a function, you are not passing in a reference, you 
       are passing in a copy, you are passing in something that POINTS to the (b) object.
         • When you chnage a property of that object in the function you are changing a property of that (b) object in
            the outer scope.
         • You cant change what a points to, only a PROPERTY of (b). 
*/
            var b = {};
            function bar(b) {    
                b.moo = false;
            }
            console.log(bar(b))     // { moo: true}  a key of moo with a value of false.
            console.log(b)




/* 
11. What is NaN?
/////////////////
==SHORT ANSWER==
    • NaN stands for "not a number" and its used to define a number that's not really a number, like a bad calculation.

==EXTENDED ANSWER==
    • NaN compared to any other value is FALSE.
    • Confusingly, NaN compared to NaN (i.e. NaN == NaN) is also FALSE.
*/
             console.log(typeof(NaN))      
             //-> "number"    

             console.log("abc"/4);
             //-> "NaN"



/* 
12. How do you check for NaN?
/////////////////////////////
==SHORT ANSWER==
    • To check for NaN, you use an in-built function called "isNaN()".

==EXTENDED ANSWER==
    • Although you can use the in-built function to check whether or not something is not a number, there are some drawbacks.
    • One drawback is if you pass "A" (i.e. isNaN("A")) you will get true.

==EXAMPLE==
                       in-built function
                       /
        console.log(isNaN(NaN))      
        //-> true  
*/
          



/*
13. What is Coercion?
/////////////////////
==SHORT ANSWER==
    • Coercion is simply adding two variables together.  

==EXTENDED ANSWER==
    • Because JavaScript is dyamically types, the type associated with the runtime values and not the variables.
    • We can concatenate multiple string values (i.e. add them together).
*/
            let greeting = 'hello ' + 'there ' + 'friend';
            console.log(greeting);

/* 
            IMPORTANT: the JavaScript engine will coerce left to right. 
            • If a string comes before the numbers, it will treat everything after as a string.  
*/ 
            let stringLast = 5 + 10 + 15 + 'howdy';
            console.log(stringLast);                 //-> 30howdy (this will add 5+10+15 and then add on 'howdy').

            let stringFirst = 'howdy' + 5 + 10 + 15;
            console.log(stringFirst);                 //-> howdy51015 (this will coerce everything as a string).



/*
14. What are special characters and escape notation?
///////////////////////////////////////////////////
==SHORT ANSWER==
    • ESCAPE NOTATION is used when you want to eseacpe the quotation mark limiter by using a BACKSLASH.

==EXAMPLES==    
*/
            let escNo = 'this is an example of a normal string'
            
            let escNoWithSingleQuotes = 'example of a string with \'single quotes\' in it.';      // allows quotes in string. 
            let escNoWithNewLine = 'example of a string with a \n new line put in it.';           // makes a new line in the string.
            let escNoWithTab = 'example of a string with a \t tab in it';                         // creates a tab in the string.




/*
15. What is a template literal?
///////////////////////////////
==SHORT ANSWER==
    • template literals allow us to refer to variables and execute JavaScript INSIDE a string.

==EXTENDED ANSWERS==
    • a template literal is a set of backticks (i.e. ``) used instead of quotation marks.
    • inside the template literal, you can use ${} and insert any variable you want to refer insde the curly braces.
    • introduced with es6.
*/
            let myName = 'joe';                      // variable we can refer to within our template literal example.
            let myAge = '25';                        // variable we can refer to within our template literal example.

            const nameAgeCombo = `Hello, my name is ${myName} and my age is ${myAge}`     // within the backticks, we use ${} to refer to variables above.

            console.log(nameAgeCombo);      //-> Hello, my name is joe and my age is 25
/*
    • you can also format with template literals without needing to use escape notation
*/
            function emailGreeting() {
                return `
                Hello Joe,

                Thank you for your gift of 100 chocodiles.
                I enjoyed them very much!
                
                Regards,
                Bill`
            }

            console.log(emailGreeting())           //=> Hello Joe,

      


/* 
What are the two variable types in JavaScript?

•	JavaScript has two variable types, primitive types and reference types.

o	When a variable is copied, its in-memory value is copied.
	A fixed amount of memory is reserved after the creation of every variable. 
	When the variable is copied, the in-memory value is copied.

o	Variables come in two types, primitive and reference.
Primitive types	Reference types
Strings	objects
Numbers	functions
booleans	arrays
symbols	
undefined	
null	

o	Primitive types are COPIED BY VALUE and are INDEPENDENT.
	When you work with primitives, the value is stored in the variable and copied as so.
	IMPORTANT: Since a value is stored inside a variable, that value will remain the as the original value unless that value is changed before you copy it.
The value of xa is copied to ya	But when reassigned, xa has a new value but ya is same.

let xa = 10;      
let ya = xa;
console.log(xa);    //-> 10
console.log(ya);    //-> 10	
let xa = 10;      
let ya = xa;        // the val of xa(10) copied to ya
xa = 20             // the val of xa changed AFTER ya
console.log(xa);    //20 – xa shows reassigned value
console.log(ya);    //10 – ya keeps value of 10    


o	Reference types are copied BY REFERENCE.
	Unlike primitive types, reference types are NOT stored in the variable.
	Reference types are stored somewhere else in memory and only the address is stored in the variable.
	With reference types, there is a pass-by reference in which something points to something else elsewhere in the code (i.e. an object stored somewhere else).
	Unless the object value is changed directly, it will not change.
xb is a reference type	Unless the value of the object is 
changed, it will remain the same.

let xb = {value: 10};   
let yb = xb;
console.log(xb);   //-> {value: 10}
console.log(yb);   //-> {value: 10}
	
xb.value = 20;
console.log(yb);   //-> {value: 20}


*/

/* 
What is the difference between dynamic and static typed languages?

•	STATIC languages (like Java) CANNOT be changed but DYNAMIC languages like JavaScript can.

o	In a STATIC language, the type of a variable is set and cannot be changed.

Java Example

String a = 'apple';


	In a statically typed language like Java we are saying that this variable 'a' holes strings and ONLY strings. So in Java you have to specify what EXACT types each variable will hold.

o	In a DYNAMIC language like JavaScript, the typeof variables are determined DYNAMICALLY at the runtime.  
Dynamic JavaScript Example

let a = 'apple';
	Typeof evaluates as String.

let a = 12345;
	Typeof evaluates as Number.

	In the first example, the variable “a” evaluate as string. 
	But if we then CHANGE the value from string to a number it will evaluate as 'number'.  It DYNAMICALLY changes at runtime.

*/


/* 
What is the difference between null and undefined?

•	Null and undefined mean the same thing in that they have no value, but null is set by programmers and undefined is set by JavaScript.


o	Null is used by programmers to indicate NO VALUE.
	Null will never be used by JavaScript for you… variables with no value will always be undefined. Only the programmer will set a variable to null.

o	Undefined is used by JavaScript to be NO VALUE.
	Undefined is used for uninitialized variables with no value ( let a; ) and is also used in the case of missing parameters or unknown properties.

What is NaN?

•	NaN stands for “not a number” and is used to define a number that’s not really a number but like a bad calculation.



The typeof of NaN is number.
	
console.log(typeof(NaN))    // "number"

NaN compared to any other number is FALSE.
	
console.log("abc"/4);       // "NaN"

NaN compared to NaN is also FALSE.
	
console.log(NaN === NaN);   // "false"


How do you check for NaN?

•	To check for NaN or check whether or not something is a number, you can use an inbuilt function called isNan().


o	Using Nan has some drawbacks.
	For example, if you pass a string to the inbuilt function, you will get true.
JavaScript	Output
console.log(isNaN(NaN))	 true

*/














/*
RESOURCES
=========
on variable lexical scope
https://medium.com/@nickbalestra/javascripts-lexical-scope-hoisting-and-closures-without-mystery-c2324681d4be
*/