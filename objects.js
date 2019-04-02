"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Objects
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is an Object?
//     2. What are the components of an object?
//     3. How do you use objects?
//     4. How do you add, update, and delete key/value pairs from dynmaic objects?
//     5. What is self-reference in an object and what is the function of `this`?
//     6. What is a factory function?
//     7. What is a constructor function?
//     8. WHat is a constructor property?
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
    - in the example above, we are declaring variables, but all of these variables are highly related.
    - BUT if we encapsulate those variables in an object, we can send that object anywhere in our program.
    - so we create an object using "object literal syntax" to hold those related variables:
*/
            let standardEquipment = {
                armor: 'chain mail',
                weapon: 'sword',
                shield: 'round'
            }
/*
    - object values can have any data type (i.e. strings, numbers, booleans, objects, arrays, functions, etc.).
    - special note: if a function is part of an object, we call that function a METHOD.
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
        - To CREATE a new properties:

             existing object name      new key         new value
*///               \                  |              /         
                    colorsAndItems.purple = 'eggplant';
                    console.log(colorsAndItems);             //-> purple: 'eggplant'

/*
        - To UPDATE existing properties:

           existing object name     key           new value
*///               \                 |               /         
                     colorsAndItems.red = 'strawberry';           //     old key/value:   red: 'apple'
                     console.log(colorsAndItems);                 //->   new key/value:   red: 'strawberry'

/*
        - To DELETE existing properties:

             delete keyword     existing object     key to delete         
*///                   \                |           /         
                    delete colorsAndItems.purple;
                    console.log(colorsAndItems);             //-> purple: 'eggplant'



/*
5. What is self-reference in an object and what is the function of `this`?
//////////////////////////////////////////////////////////////////////////
        - Self-reference is when you mention the object name again inside a function.
        - self-reference is achieved by repeating the object variable name inside a method
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
            console.log(`==> Example of factory function:`)
            const superCake = createCake('Super Cake', 2);       // first we define a constant, call createCake function and pass name and layer parameters.       
            superCake.cakeStatus();                              // log cake status set to 1.
            superCake.addLayer();                                // run the object method addlayer (which adds 1 layer)
            superCake.cakeStatus();                              // log again and now the layers are set to 2!



/*
7. what is a constructor function?
///////////////////////////////
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
    - In order to create a circle object using this constructor function.
    - First, we define a constant named circle.
    - Three things happen with the new operator:
            -- first, the operator creates an empty object.  Something liek this:  const x = {}
            -- second, it sets `this` to point to this object.
            -- third, it will return the object from the Circle function.
*/
            const circle = new Circle(1);           
            console.log(`==> Example of a constrcutor function`)
            console.log(circle);


/*
8. What is a constructor property?
/////////////////////////////////
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