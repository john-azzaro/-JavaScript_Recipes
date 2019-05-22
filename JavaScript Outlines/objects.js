"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Objects
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is an Object?
//     2. What are the components of an object?
//     3. How do you use objects?
//        + How do you create an object?
//        + What kind of data types can an object hold?
//        + How do you access the values in an object?
//     4. How do you add, update, and delete key/value pairs?
//     5. What is self-reference in an object and what is the function of `this`?
//     6. What is a factory function?
//        + How do you create a factory function?
//     7. What is a constructor function?
//        + How do you create a constructor function?
//     8. What is a constructor property?
//     9. What are getters and setters?
//     10. What is pass-by value and what are primitive and reference types?
//        + What are primitives?
//        + Are primitive variables independent?
//        + What are reference types?
//        + Are reference types stored in variables?
//        + Does reference type logic apply to functions?
//    11. How do you iterate over the properties of an object?
//        + What is Object.keys and how do you use it?
//        + What is Object.value and how do you use it?
//        + What is Object.entries and how do you use it?
//        + How do you loop through an Object once it has been converted to an array?
//        + How do you use .forEach when iterating through an object?
//    12. Why and how do you clone an Object?
//        + How to clone an object using for...in loop?
//        + How to clone an object using Object.assign?
//        + How to clone an object using the spread operator? 
//    13. What is a built-in object in JavaScript and what are they?
//        + What is the Math Object?
//        + What is a String Object?
//        + What is a Date Object?
//    14. (TBC) What is escape notation for a string object?
//
// NOTES ///////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on objects taken from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        and Answer format for improved readability.
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
1. What is an object?
//////////////////
    - objects are complex data types that allow you to bring together common properties and behaviors into a single entity.
    - objects are collections of key/value pairs.
        -- think of key value pairs like words in a dictionary, with a word (i.e. key) and its definition (i.e. value).
    - objects provide an excellent way of organizing code that belongs together.
    - objects helpyou avoid global variables.
    - objects let us represent instances of some model.
    - when you create an object, memory is automatically allocated to memory in JavaScript (and we do not need to deallocate memory)
        -- as opposed to low level languages like C++ or C, you do not need to allocate or de-allocate memory.
        -- JavaScript has something called a "garbage collector" which finds variables or constants that are no longer used and deallocates
           memory automatically   
*/



/*
2. What are the components of an object?
///////////////////////////////////////
    - an OBJECT LITERAL is a comma seperated list of name/value pairs wrapped inside curly braces.
    - inside the object literal are key/value pairs.
    - each key/value pair has a name followed by a colon and a value followed by a comma.
    - values that are strings must be enclosed by quotation marks.
    - values can be any data type (i.e. string, number, boolean, null, undefined, function, object, array, etc.).
    - if you need a space or a period in a key, you need to use quotation marks. (i.e. 'first hobbit': 'frodo',).   
*/

//      variable   object name        object literal
//             \          |            /          
                const theFellowship = {
                    wizard: 'gandalf',        //- key: value,  (note the comma that seperates each key/value pair).
                    man: 'Aragon',
                    elf: 'Legolas',
                    dwarf: 'gimli',
                    hobbit: 'frodo'
                }



/*
3. How do you use objects?
/////////////////////////
    - the purpose of an object is to group related variables.
    - if we have properties that are highly related, we want to encapsulate them inside an object.
    - we want to create an object with these related properties because the alternative is inefficient.  
    - Observe the collection of variable below as an example of this inefficientcy:
*/
            let armor = 'chain mail';
            let weapon = 'sword';
            let shield = 'round';
/*
    How do you create an object?
    =============================
    - in the example above, we are declaring variables, but all of these variables are highly related.
    - BUT if we encapsulate those variables in an object, we can send that object anywhere in our program.
    - so we create an object using "object literal syntax" to hold those related variables.
*/
            let standardEquipment = {              // object name assigned to an object (i.e. curly braces {...}).
                armor: 'chain mail',               // key/value pairs where armor is the key, then a colon which assigns 'chain mail' as the value.
                weapon: 'sword',                   // each key/value pair is seperated by a comma. 
                shield: 'round'
            }
/*
    What kind of data types can an object hold?
    ===========================================
    - object values can have any data type (i.e. strings, numbers, booleans, objects, arrays, functions, etc.).
    - if a function is part of an object, we call that function a METHOD.
    - if there are one or more functions in the object, we say that object has "behavior" like a person who can do different things.
*/
            let equipment = {
                equipmentOwner: 'Sir Galahad',                                      // string
                weaponStrikes: 1,                                                     // number
                isDefensive: true,                                                  // boolean
                armor: {                                                            // object
                    helmet: 'sallet',
                    armor: 'chain mail'
                },
                useWeapon: function() {                                                // function (i.e. method)
                    console.log(`using weapon increases offensive ability +1!`);
                    equipment.weaponStrikes++;
                },
                shield: ['round', 'dragon picture', 'handle']                       // array
            }
/*
    How do you access the values in an object?
    ==========================================
    - to access values and run object methods (i.e. functions), we can use two ways:
            -- dot notation (i.e. equipment.armor)
            -- bracket notation (i.e. equipment['armor'])
                - we use bracket notation is we need to use spaces or periods (because otherwise dot-notation would have breaks and not work).
*/
                console.log(equipment.equipmentOwner);   //-> Sir Galahad
                console.log(equipment.isDefensive);      //-> true
                console.log(equipment.armor);            //-> { helmet: 'sallet', armor: 'chain mail' }
                console.log(equipment.shield);           //-> [ 'round', 'dragon picture', 'handle' ]
/*
            -- for the object method (i.e. function), we need to call the function first.
*/
                console.log(equipment.weaponStrikes);    //-> 1
                equipment.useWeapon();                   //-> using weapon increases offensive ability +1!  (i.e we call the draw method)
                console.log(equipment.weaponStrikes);    //-> 2



/*
4. How do you add, update, and delete key/value pairs?
//////////////////////////////////////////////////////
    - OBJECTS ARE DYNAMIC, meaning that once you create them you can:
        -- Create new properties (i.e. insert a key/value pair into your existing object).
        -- Update existing properties (i.e. change the value of a property to anything else).
        -- Delete existing properties (i.e. remove the property from the object).
*/    
                let colorsAndItems = {
                    yellow: 'banana',
                    red: 'apple',
                    green: 'kiwi'
                }
/*
        How do you CREATE a new property?
        ==================================

             existing object name      new key         new value
*///               \                  |              /         
                    colorsAndItems.purple = 'eggplant';
                    console.log(colorsAndItems);             //-> purple: 'eggplant'

/*
        How do you UPDATE an existing property?
        =======================================

           existing object name     key           new value
*///               \                 |               /         
                     colorsAndItems.red = 'strawberry';           //     old key/value:   red: 'apple'
                     console.log(colorsAndItems);                 //->   new key/value:   red: 'strawberry'

/*
        How do you DELETE an existing property?
        =======================================

             delete keyword     existing object     key to delete         
*///                   \                |           /         
                    delete colorsAndItems.purple;
                    console.log(colorsAndItems);             //-> purple: 'eggplant'



/*
5. What is self-reference in an object and what is the function of `this`?
//////////////////////////////////////////////////////////////////////////
    - Self-reference is when you mention the object name again inside a function.
    - Self-reference is achieved by repeating the object variable name inside a method
*/
                const dogCaller = {
                    dog: 'Mr. Barksy',
                    message: function() {
                        console.log(`Hello from ${this.dog}`);      //  this template literal uses the `this` to access the value of dog.
                    }
                }
                console.log(`==>Example of self-reference`)
                console.log(dogCaller.message());



            
/*
6. What is a factory function?
//////////////////////////////
    - Just like a factory produces products, factory functions produce objects.
    - the job of a factory is to create an individual instance of some model.
    - in a factory function, you create an object by making a constant called x, then call the factory function with the parameters.
    - so with factory functions, we simply call a function and in the function we return a new object.
    - note here that in es6, if the name and the value are the same, you can remove the noise and simply have the name (i.e. name,).
*/
            function createCake(name, layers) {
                return {
                    name: name,                                                        // starting name key and value.  (however, you can use 'name,')
                    layers: layers,                                                    // starting layer key and value
                    addLayer: function() {                                             // function that adds a layer to your cake.
                        console.log(`You've added another layer!`);
                        this.layers++;
                    },
                    cakeStatus: function() {                                           // function that summarizes the object (i.e. name and layer)
                        console.log(`the ${this.name} has ${this.layers} layers`);
                    }
                }
            }
/*
        How do you create a factory function?
        ====================================
*/          console.log(`==> Example of factory function:`)
            const superCake = createCake('Super Cake', 2);       // first we define a constant, call createCake function and pass name and layer parameters.       
            superCake.cakeStatus();                              // log cake status set to 1.
            superCake.addLayer();                                // run the object method addlayer (which adds 1 layer)
            superCake.cakeStatus();                              // log again and now the layers are set to 2!



/*
7. what is a constructor function?
//////////////////////////////////
    - the job of a constructor function is to construct (or create) an object.
    - constructor functions use PASCAL NOTATION by convention, where we capitalize all words in our neam (i.e. ThisIsPascalNotation).
    - unlike a factory function where we return an object, with constructors we use the new operator and instead of returning an object
      we use the keword `this`.
*/
            function Circle(radius) {
                this.radius = radius;              // add new property into an empty object.
                this.draw = function() {
                    console.log('draw');
                }
            }
/* 
    How do you create an object using a constructor function?
    ==========================================================
    - In order to create a circle object using this constructor function.
    - First, we define a constant named circle.
    - Three things happen with the new operator:
            -- first, the operator creates an empty object.  Something liek this:  const x = {}
            -- second, it sets `this` to point to this object.
            -- third, it will return the object from the Circle function.
*/
            const circle = new Circle(1);           
            console.log(`==> Example of a constructor function`)
            console.log(circle);



/*
8. What is a constructor property?
//////////////////////////////////
    - Objects in Javascript have a property called constructor, which references a function that is used to construct or create an object.
    - below we have two objects (top is a factory function the lower is a constructor function). 
*/
            function factoryDemo() {
                return {
                    make: function() {
                        console.log('something');
                    }
                };
            }
            const factoryExample = factoryDemo();
       
            function ConstructorDemo(radius) {
                this.radius = radius;
                this.draw = function() {
                    console.log('draw');
                }
            }
            const ConstructorExample = new ConstructorDemo(1);
/*
    - When looking at thier constructor PROPERTY, we call the variable we have created that calls the function AND add .constructor to the end of it.
*/
            console.log(`==> Example of constructor properties`)
            console.log(factoryDemo.constructor);
            console.log(ConstructorDemo.constructor);
/*
    - Important thing to take away is that every object has a constructor property which references the function used to create that object.
*/


/*
9. What are getters and setters?
/////////////////////////////////
    -- Getters and setters are special types of methods for objects.
        -- Getters access properties in an object
        -- Setters change (or more specifically mutate) the properties.

    -- below we call on the two properties in the object kitty for our greeting.
*/
            const kitty = {
                firstName: 'Felix',
                lastName: 'McCattykins'
            }

            const whatCat = `Hi, my name is ${kitty.firstName} ${kitty.lastName}`
            console.log(whatCat);
/*
    -- but while the previous approach is good, we would have to repeat this template literally everywhere we need it
    -- a better way to do this is to define a method in the object called 'fullName' and then put the expression in the log.
*/
            const kitty2 = {
                firstName: 'Garfield',
                lastName: 'Fluffynums',
                get fullName() {                                                       // use prefix 'get' so we can access like a property. 
                    return `Hello, my name is ${kitty2.firstName} ${kitty2.lastName}`     
                },  
            }

            console.log(kitty2.fullName);                //=> Hello, my name is Garfield Fluffynums
/*
    -- However, the solution above is READ ONLY, meaning that we cannot set anyone elses name from the outside.
    -- in otherwords, suppose we want to specify the name from outside the object.
    -- a solution is to use the `set` prefix.
    -- the `set` function is almost exactly like the `get`
*/

            const kitty3 = {
                firstName: 'Felix',
                lastName: 'McCattykins',
                get fullName() {                                                          //
                    return `Greetings, my name is ${kitty3.firstName} ${kitty3.lastName}`     
                },
                set  fullName(value) {                   // with set, we need to 'process' the outside input.
                    const parts = value.split(' ');      // first, we take the value (i.e. ) and split it into an array.
                    this.firstName = parts[0];           // once in an array, we can seperate the words. index of 0 is 'Jacob'...
                    this.lastName = parts[1];            // index of 1 is 'McWhiskers'.
                }
            }

    // and below we have the outside name:

            kitty3.fullName = 'Jacob McWhiskers';

            console.log(kitty3);                //=> { firstName: 'Jacob',
                                                //     lastName: 'McWhiskers',
                                                //     fullName: [Getter/Setter] }

            console.log(kitty3.fullName);       //=> Greetings, my name is Jacob McWhiskers




/*
10. What is pass-by value and what are primitive and reference types?
//////////////////////////////////////////////////////////////////////
    - JavaScript has 2 kinds of variable types: primitive and reference.
    - A fixed amount of memory is reserved after creation of every variable.
    - When a variable is copied, it's in-memory value is copied.
    - Passing a variable to a function via a call also creates a copy of that variable.

    What are the two type ctegories?
    ================================
    - In JavaScript, there are two categories of types:

            - Value types (a.k.a primitives)               - Reference types
                -- numbers                                      -- objects
                -- strings                                      -- function
                -- booleans                                     -- arrays
                -- symbols (es6+)
                -- undefined
                -- null               
*/
/*
    What are primitives?
    =============================
    - PRIMITIVES are copied by value.
    - Below we define two primitives.
    - Keep in mind that x and y are two independent variables.
*/
                let xa = 10;      
                let ya = xa;
                console.log(`==> Examples of value types`)
                console.log(xa);    //-> 10
                console.log(ya);    //-> 10
/*
    - when we reassign the value of xa to 20 from 10 which is certainly correct.
*/
                xa = 20; 
                console.log(xa);     //-> 20
/*
    Are primitive variables independant?
    ====================================
    - HOWEVER, when we print ya again, it will still be 10.  Why?
            -- when you work with primitives, the value (i.e. 10) is stored in the variable (i.e. xa).
            -- when you copy that variable (i.e. xa as a value of ya), that exact value (10) is copied into the new variable (ya).
            -- MAIN POINT: Each variable is completely independant of each other.
                           For the variable xa, the value of 10 is stored INSIDE the variable.
                           When you copy that variable again, you are using the stored value UNLESS you change that value BEFORE you copy it.
*/
                console.log(ya);     //-> 10

/*
    What are reference types?
    ===================================
    - For REFERENCE types...
    - REFERENCE TYPES are copied by thier reference.
*/
            let xb = {value: 10};   // so the immediate difference is that the value is now an object with a property called value.
            let yb = xb;
            console.log(`==> Example of Reference types`);
            console.log(xb);        //-> { value: 10 }
            console.log(yb);        //-> { value: 10 }
            
/*
    Are reference types (i.e. objects) stored in the variable?
    ==========================================================
    - HOWEVER, when the object is a value, that object is NOT stored in the variable (i.e. xb)...
            -- that object is stored SOMEWHERE ELSE in memory and the ADDRESS is stored in that memory variable.
            -- both xb and yb are point to the SAME OBJECT.
            -- And when we change wither xb or xy, it changes the object stored in memory
*/
            xb.value = 20;
            console.log(yb);        //-> { value: 20 }

/*
    Does reference type logic apply to functions?
    =============================================
    - So this logic also applies to functions as well...
    - below we have an example using primitives:
*/
            let xc = 10;                            // the intial variable value is equal to 10
            function increasePrim(xc) {              
                xc++;                               // when we run increasePrim, we increment xc by 1.
            }

            increasePrim(xc);                        // we run increasePrim
            console.log(xc);                        //-> 10
/*
    - So why didnt the value of xc increment by 1 for a total of 11?
            -- when we call increasedPrim and pass in xc as a parameter, the value is copied into the function parameter (which is local).
            -- so the incremented number (i.e. xc++) is INDEPENDENT of the xc variable!
            -- This shows that primitives are copied by thier value.
*/
/*
    Does the reference type logic apply to objects?
    ===============================================
    - When we have a reference type instead of a primitive type (i.e. replace the variable value with an object).  Any changes that 
      you make to the object will be visible to the other variable.

    - below we have an example that uses reference:
*/

            let xd = { value: 10 }; 
            function increaseRef(xd) {
                xd.value++;
            }

            increaseRef(xd);                // when we call increaseRef and pass the object xd, it is passed by REFERENCE
                                            // this means that the local xd in the function parameter points to the same object above.
            console.log(xd);                //->  { value: 11 }



/*
11. How do you iterate over the properties of an object?
///////////////////////////////////////////////////////
    - when you iterate (enumerate) over an object, you are simply looping through the key/value pairs inside that object.

    - The best way to loop through an obejct is:
        - FIRST convert it to an array using one of three methods:
            -- Object.keys
            -- Object.values
            -- Object.entries.
        - SECOND, loop through it like a normal array. 
 
    - It is possible to iterate over an object using for...in.  
*/          
            const yums = {
                yum1: 'delicious',
                yum2: 'superb'
            }

            for (let key in yums) {
                console.log(key, yums[key]);            //-> yum1 delicious
            }                                           //   yum2 superb                    
/*
    - However, using for...in has some drawbacks:
            -- first, it iterates through the properties in the protoype chain.
            -- second, you need to check if the property belongs to the object with the .hasOwnProperty method.
            - with Es6, we now have amuch easier and much more efficient way of looping through an objects key/value pairs so we avoid for...in.
    
            - Below is our sample object that we will use to iterate through:
*/
            const snacks = {
                fruit: "apple",
                drink: "juice",
                desert: "cookie",
            }

/*
    - The first thing to do is to convert the object into an arry...
*/
/*
        What is Object.keys and how do you use it?
        ==========================================
        - Object.keys creates an array that contains all the properties of an object.
*/
            const keys = Object.keys(snacks);   // we create a variable call 'keys' and assign a value that loops through the keys of snacks.
            console.log(keys);                  //-> [ 'fruit', 'drink', 'desert' ]
                                                //   ... so when we log the variable 'keys', we get back an array with only the keys!

/*
        What is Object.value and how do you use it?
        ===========================================
        - Object.value creates an array that contains the values of every property in an object.
*/
            const values = Object.values(snacks);
            console.log(values);                //-> [ 'apple', 'juice', 'cookie' ]

/*
        What is Object.entries and how do you use it?
        =============================================
        - Object.entries creates an array of arrays.
            - important to note that to loop through Object.entries you might want to destructure the array into its keys and properties.
*/
            const entries = Object.entries(snacks);
            console.log(entries);               //-> [ [ 'fruit', 'apple' ],
                                                //     [ 'drink', 'juice' ],
                                                //     [ 'desert', 'cookie' ] ]

/*
        How do you loop through an Object once it has been converted to an array?
        =========================================================================
        - Now you can loop through like you would a normal array:
    
            const keys = Object.keys(snacks);
*/          for (const key of keys) {
                console.log(key);
            }                                  //-> fruit
                                               //   drink
                                               //   desert


/*      How do you use .forEach when iterating through an object?
        =========================================================

                method    iterated object  method       function
                    \            |         |             /
                    Object.keys(snacks).forEach(function(key) {
                        console.log(`the key is ${key} and the value is ${snacks[key]}`);
                                                |                              |
                                        return name of property          return value of property
                    });
        
        - We use "Object.keys" with "snacks" as the parameter, then use '.forEach' to execute the following function
          FOR EACH property in the object.  The function (with the 'key' parameter) will then log the property of the object (i.e. ${key})
          as well as the value of that key (i.e. ${snacks[key]}).

        - To break it down into its constituent parts:

            -- Object.keys          -- method that returns a given object (in this case snacks) own property names.
            -- (snacks)             -- the object whose properties are to be returned.
            -- .forEach             -- calls the proceeding function once for each element in the array.  
                                       This is essentially saying "for each key/value pair in the object..."
            -- function(key) {...}  -- ... execute a function whose paramter is key and...
            -- ${key}               -- ... return the name...
            -- ${snacks[key]}       -- ... return the value of the name. 
*/
            Object.keys(snacks).forEach(function(key) {
                console.log(`the key is ${key} and the value is ${snacks[key]}`);
            });


/*
12. Why and how do you clone an Object?
///////////////////////////////////////
    - cloning an object gets all the properties of an object and copies them into another object.
    - there are TWO ways to clone an object:
            -- for...in
            -- Object.assign

    - so lets take our example object 'square' with two properties, sides and a method called draw:
*/

        const square = {
            sides: 4,
            draw: function() {
                console.log('draw this shape!')
            }
        };

/*
   How to clone an object using for...in loop?
   ===========================================
    - FIRST, to clone (or to put it more simply copy) an object, create your clone variable and set the value to an empty object.
*/
        const anotherSquare = {}       
/*
    - SECOND, we use a for...in loop to iterate over all the properties of an object and copy them to the new object.
*/
        for (let key in square) {                        // so for every key in the object square (i.e. the object to be copied)...
            anotherSquare[key] = square[key];            // set the property of X in the new object (i.e. anotherSquare) to the property of square.
        }                                                // ... so essentially we are reading the property 'side' and the value 4 and coping it over.

        console.log(anotherSquare);                      //-> { sides: 4, draw: [Function: draw] }
/*
    - HOWEVER, there are better and more modern ways to do this using dot notation.
*/

/*
    How to clone an object using Object.assign?
    ==========================================
    - We use Object and a method called 'assign'.
    - We create a name for our new object we want to clone properties into (i.e. assignAnotherSquare).
    - When we use Object.assign and pass 2 arguments:
        - the first argument can be an object which can be empty or existing (i.e. {}).
        - the second argument is where you pass in the SOURCE object. (i.e. square).

    - additionally...

        - the first argument can be an empty object (i.e. {}) or a pre-existing object.
        - the second argument can take from one OR MORE sources. 
       
       new object to be created                method       FIRST ARGUMENT: copy-to argument (which is an empty object in this example)
                   \                             |         /        
                const assignAnotherSquare = Object.assign({}, square);
                                                                \ 
                                                                 SECOND ARGUMENT: source to-copy (existing object)

    - the Object.assign method takes all the properties of the source object (i.e. the second argument `square`) and copies them
      into the new object (i.e. the empty object in the first argument) and returns the result.
*/  
            const assignAnotherSquare = Object.assign({}, square);
            console.log(assignAnotherSquare);
/*
    - keep in mind that the first argument which we copy the contents from the exiting object does NOT have to be empty.
    - you could also ADD additional properties to the object while you are copying it.
*/
            const assignYetAnotherSquare = Object.assign({
                    color: 'red',                                 // here we add another property to the object to be created.
                }, square);
            console.log(assignYetAnotherSquare);


/*
    How to clone an object using the spread operator?
    ==================================================
        - with the spread operator, it takes all the properties in the square object and puts them into the new object we are creating.
        - this is by far the simplest way to clone an object,
*/
            const assignSpreadSquare = { ...square};
            console.log(assignSpreadSquare);



/*
13. What is a built-in object in JavaScript?
////////////////////////////////////////
    - a built-in object in javascript as small built-in objects.
    - these objects are available regardless of window content and operate independently of wheveer page your browser has loaded.
    - there are 5 built-in objects:
            -- Date
            -- Math
            -- String
            -- Array
            -- Object
*/
/*
    What is the Math Object?
    ========================
    - math is a built in object that has properties and methods for mathematical constants and function.
    - you would use the math object if you were dealing with mathematical calculations.
    - when using math objects, use a capital 'M'.

    - when we use Math.random, we get a random number between 0 and 1 (i.e. 0.67394576230373).
    - Below are a few important Math object operations:

                - Math.round(.6)  //=> 1.0  (rounded up ro down to the nearest integer)
                - Math.ceil(.6)   //=> 1.0  (rounded UP to an integer)
                - Math.floor(.6)  //=> 0.0  (rounded DOWN to an integer)
                - Math.abs(-5)    //=> 5    (the absolute of -5 is 5 and absolute value of 5 is 5)
                - Math.max(1,2,3) //=> 3    (the highest integer in the arguments is 3)
                - Math.min(1,2,3) //=> 1    (the lowest integer in the arguments is 1)
                - Math.random()   //=> 0.2  (random number between 1 and 10)


    - For more info, check MDN web docs for full list: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/       
                const randomNumber = Math.random();
                console.log(randomNumber);              //-> 0.736367298383 (will be different every time you run).
/*
    - if you want to keep the random numbers within a given range...
*/
                function randomNumberArbitrary(min, max) {
                    return Math.random() * (max - min) + min;
                }
                console.log(randomNumberArbitrary(1, 10));      //-> random number between 1 and 10.
/*
    - When we use Math.round, it will take the number we specify and round it.
*/
                function mathRound() {
                    return Math.round(1.9);    
                }
                console.log(mathRound());          //-> 2
/*
    - When we use Math.max, it will take a bunch of arguments and return the largest number.
*/
                function mathMax() {
                    return Math.max(2,4,7,9);
                }
                console.log(mathMax());           //-> 9


/*
    What is a String Object?
    ==========================
    - although strings are primitive types (which dont have properties and methods), in JavaScript there are 2 kinds of strings.
        -- primitive string
        -- object string

    - a string primitive does not have any properties or methods.
    - a string primitive will evaluate typeof = 'string'.
    - For more info, check MDN web docs for full list: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

*/             const stringPrimitive = 'hello, im a string primitive';
/*
    - However, a STRING OBJECT has properties and methods.
    - we use a String constructor function to create a new string object (i.e. new String() ).
    - a string object will evaluate typeof = 'object'.
*/ 
               const stringObject = new String('hello, im a string object');

/*
    - with strings, you can use STRING METHODS:
                
                let str = "I am testing string methods";

                str.length;                        //-> 27
                str.charAt(0)                      //-> I
                str.slice(0, 10)                   //-> I am testing
                str.toUpperCase()                  //-> I AM TESTING STRING METHODS
                str.toLowerCase()                  //-> i am testing string methods
                str.replace('testing', 'eating')   //-> I am eating string methods
                str.split(" ")                     //-> [ 'I', 'am', 'testing', 'string', 'methods' ]
                str.includes('methods')            //-> true
                str.startsWith('apple')            //-> false  (note this is case senitive)
                str.endsWith('e')                  //-> false
                str.indexOf('testing')             //-> 8     (meaning testing starts at index 8)
*/
           
                function test() {
                    let str = "I am testing string methods";
                    return  str.indexOf('testing');
                }
                console.log(test());                //-> [ 'I', 'am', 'testing', 'string', 'methods' ]


/*
    What is a Date Object?
    ======================
    -- The Date object will return the date you want.
*/
        // To return current date:

                const currentDate = new Date()       
                console.log(currentDate);                      //-> 2019-04-04T18:23:47.477Z

        // To create a specific date using string:

                const date2 = new Date('June 15 2018 09:00')   
                console.log(date2);                            //-> 2018-06-15T16:00:00.000Z

        // To create a specific date using numbers:

                const date3 = new Date(2019, 0, 15, 9, 0);    // (year, month (0-11), day, hour, minute)
                console.log(date3);                           //-> 2019-01-15T08:00:00.000Z

        // To get the day, month, number of day in month, and year:

                function getDate() {
                    let now = new Date();                      // first, establish now as the current date.
                    return now.toDateString();                 // second, call now with the date as a string.
                }        
                console.log(getDate());                        //-> Thu Apr 04 2019

        // To get the time component:

                function getTime() {
                    let now = new Date();
                    return now.toTimeString();
                } 
                console.log(getTime());                        //-> 11:45:52 GMT-0700 (Pacific Daylight Time)
                
        // To get Date and Time:
        
                function getDateAndTime() {
                    let now = new Date();
                    return now.toISOString();                  
                }
                console.log(getDateAndTime());                 //-> 2019-04-04T18:45:52.679Z

                

/*
Resources
=========
    https://zellwk.com/blog/looping-through-js-objects/
        -- converting objects to arrays
        -- looping through arrays.
*/
