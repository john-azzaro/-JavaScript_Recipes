"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Object-oriented Programming
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is Object Oriented Programming (OOP)?
//     2. What are the four core concepts in OOP? 
//
// NOTES ///////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information about Object-oriented programming (OOP) taken from study, research,  
//        tutorials, mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the 
//        document in Question and Answer format for improved readability.
//     2. There is also a seperate section dedicated to objects (e.g. objects.js).  Although there might be 
//        some overlap in material here, this looks at that content in the context of OOP.
//     3. There seems to be a bit of overlap between the OOP content here and the content of dedicated to objects. 
//        objects, however this page is more about the paradigm of object oriented programming.
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
1. What is Object Oriented Programming (OOP)?
/////////////////////////////////////////////
    • Object oriented programing (OOP) is a programming paradigm centered around objects rather than functions.
    • Object oriented programming is not a programming language or tool.
    • Languages such as C#, Java, Ruby, Python, and JavaScript, and more.
    • Many frameworks are designed with object oriented programming concepts in mind (e.g. angular).
*/

/*
2. What are the four core concepts of OOP?
//////////////////////////////////////////
        
        1. Encapsulation   • group related variables and function together to reduce complexity.
        2. Abstraction     • hide details of complexity and show only essentials, reduces complexity, and isolates code impact.
        3. Inheritance     • eliminates redundant code.
        4. Polymorphism    • refactors if/else and switch/case statements.

    • Before object oriented programming there was something called "procedural programming" where data was stored in a
       bunch of variables and function that operate on the data, which was very simple and straight forward.
       • but eventually these function will break and function will have duplicate lines of codes (i.e. spaghetti code).
    • With object-oriented programming (OOP), you combine a group of related variables and functions into a unit.
        • That unit is called an "Object".
        • variables are called "properties".
        • function are called "methods".     

    Encapsulation
    =============
    • In object oriented programming, we group related variables and function on them into objects, which is called "ENCAPSULATION"
        • for example:
*/
            let salary = 30000;
            let overtime = 10;
            let rate = 20;

            function getWage(salary, overtime, rate) {
                return salary + (overtime * rate);
            }
/*
    • the example above is a "procedural" implementation, with variables on the top and the function at the bottom.

    • The OOP way to solve this problem would look something like this:
*/
            let employee = {
                salary: 30000,
                overtime: 10,
                rate: 20,
                getWage: function() {
                    return this.salary + (this.overtime * this.rate);
                }
            }; 
            employee.getWage();
/*
    • Note that the getWage method above does not have parameters where the procedural example needs parameters passed in.
            • the getWage method does not need parameters because the parameters are modeled as properties of the object.
            • in other words, because they are related and part of one unit, it is more efficient.
  
    Abstraction
    ===========
    • Think of a computer as an object, with a motherboard, a videocard, RAM, CPU, etc.
        • When you push the power, all the complexity of the computer is hidden from you.
        • This is abstraction in practice.
    • In objects, we have parts of the object, like properties and methods, which are hidden from the outside which has the 
       benefit of:
            1. making the interface of those objects simpler.
            2. helps reduce the impact of change
                • for example, if we chnage the inner properties or methods, none of them will leak outside and cause problems.

    Inheritance
    ===========
    • Inheritance is a mechanism that allows you to eliminate redundant code.
    • Inheretance helps eliminate redundant code. For exampleL
        • Suppose you have a variety of buttons (click buttons, drop-downs, checkboxes, etc.).
        • However, they have a few things in common.
            • they all have properties like hidden, innerHTML, click, focus, etc.
        • Instead of redefining all the properties and methods for each button, all we need to do is define them once 
           in a generic element.
        • So what we do in this example is group all the properties together into something like "HTMLElement" and have
           other objects inherit those properties and methods.

    Polymorphism
    ============
    • Polymorphism is a technique that lets you get rid of long if and else or switch and case statements.
*/


/*
What is an object?
///////////////////
    • objects are complex data types that bring together properties and elements into a single entity.

    What is object literal syntax?
    ==============================
    • an object literal is: 

            defined variable        assignment operator
                            \          |
                            const car = {};
                            |     \ 
                            name    curly braces


    • inside the curly braces we can add key/value pairs.

                         key         value inside "quotes"
                            \       /
                            make: "honda",
                                |         \
                              colon        comma seperating key/value pairs


    • values can be a string, number, boolean, function, object, or array.
*/
                            const car = {
                                make: "honda",                                // string
                                wheels: 4,                                    // number
                                isWorking: true,                              // boolean
                                startIgnition: function() {                   // "method" or function
                                    console.log("vroom")
                                },
                                options: {                                    // object
                                    airCon: true,
                                    sportExhaust: true,
                                    spareTire: false,
                                },
                                seats: ["driver", "passenger", "rear"]         // array
                            };
/*
    • and to access the members of the object, we use "dot" notation.

                        object       member name
                            \         /
                            car.wheels
                               |
                              dot
*/
                            console.log(car.make);                        //=> honda
                            console.log(car.wheels);                      //=> 4
                            console.log(car.isWorking);                   //=> true
                            console.log(car.startIgnition());             //=> vroom
                            console.log(car.options);                     //=> { airCon: true, sportExhaust: true, spareTire: false }
                            console.log(car.seats);                       //=> [ 'driver', 'passenger', 'rear' ]


/*
What is a factory object?
///////////////////////////
    • A factory functions create an individual instance of some model.
    • We use factory functions because if we are duplicating an object with one or more methods (has a "behavior"), it
       can be problematic if there become more duplicate of the same object.
    • To avoid that issue, we use a function to create an object and return the object.
    • Note here that with Es6 if the key and the value are the same, we can remove the noise and simple put a single name.
    
*/
                            function createCar(make) {                      // using the function 'createCar' (passing in make)...
                                return {                                    // return the following object (with the paramter passed in)
                                    make: make,                                
                                    isWorking: true,                              
                                    startIgnition: function() {                   
                                        console.log("vroom")
                                    },  
                                };
                            }

/*
    • Once we have the factory function constructed, we simply need to create a new car:
*/
                            const makeAcura = createCar('acura');      // create a 'makeAcura' object from the createCar factory, 

                            console.log(makeAcura);                    // { make: 'acura',
                                                                       //   isWorking: true,
                                                                       //   startIgnition: [Function: startIgnition] }

/*
What is a constructor function?
///////////////////////////////
    • A constructor function is a little bit different than a factory function.
    • The choice between using a factory or constrcutor function is up to you since they both do the exact same thing.
    • One danger in using the contructor function method is that if you forget to use 'new', it will define the 'this'
       property on the GLOBAL object (i.e. the window object).
    • The first letter of a constrcutor function name should be upper case.
    • we also use 'this' to reference the object executing a particular peice of code.
*/

                            function MakeAnotherCar(make) {              
                                this.make = make;
                                this.isWorking = true;
                                this.startIgnition = function() {
                                    console.log('grumble grumble');
                                }
                            }

/*
    • to create a car using the constructor function, it is mostly the same as a factory function EXCEPT for
       the inclusion of 'new' operator.
    • When you use 'new', a few things happen:
        • first, it will create an empty object (i.e. {}).
        • second, it will set 'this' to point to that NEW object (i.e. this.make ==> MakeAnotherCar).
        • third, it will return the object from the function.
*/

                            const makeFord = new MakeAnotherCar('ford');
                            console.log(makeFord);                                 // MakeAnotherCar { make: 'ford', isWorking: true, startIgnition: [Function] }

/*
What is a constructor property?
///////////////////////////////
    • Main point, every object in javascript has a property called 'constructor' which references the function used to construct 
       or create an object.
    • When we log 'makeFord.constructor', it will return the function used to create the object (i.e. MakeAnotherCar).
*/

                            console.log(makeFord.constructor);         //=> [Function: MakeAnotherCar]

/*
    • However, when we log 'makeAcura' from the factory function example, we get Object.  
    • Note that the first letter in Object is uppercase, meaning that this is a built-in constructor function in JavaScript.
*/

                            console.log(makeAcura.constructor);         //=> [Function: Object]


/*
Are functions objects?
//////////////////////
    • in so many words, yes, function are objects

*/

/*
What is the difference between value(primitive) types and reference types?
////////////////////////////////////////////////////////////////////////////
    • Understanding value and refrence types is important for understanding prototypes.

    • Value types (primitives) are: numbers, strings, booleans, symbols, undefined, null.
        • primtives are independent         
        • primtives are COPIED BY VALUE         
        • primitive value types are stored in the variable.  */


        let x = 10;         // the value of 10 is stored inside x
        let y = x;          // when x is copied into y, it is copied exactly as 10 into the new variable... it is indpendant now.

        x = 20;             // so if you change the value of x to 20...

        console.log(x)      // 20 is the the value of x because we changed it...
        console.log(y)      // 10 is the value of y because when we copied it it was 10 and it is independant.

 /* • Reference types are: objects, functions, arrays.
        • Reference types are copied by thier reference (i.e. thier value sotred somewhere in memory)
        • When Reference types are used, the program is pointed to the address location of where it is stored.
        • reference types are NOT stored in the variable... it is stored somewhere else in memory
        • objects are copied by thier reference.
*/
        let x = { value: 10};      // 1. since an object is not stored in the variable, but somewhere else in memory.
        let y = x;                 // 3. So when x is copied into y, it is the ADDRESS that is copied, which will have the updated number.

        x.value = 20;              // 2. when you change a value in that object, the value in that address is changed,

        console.log(x)             // 20   Both x and y are pointed to the same address, the same object in memory.
        console.log(y)             // 20

/* Additional example: */

        let number = 10;

        function increment(number) {
            number++;
        }

       increment(number);       
       console.log(number);                // 10... because primitives are copied by value, and when you copy number into increment it will 
                                           // be independent... which is still 10.

    // However, when dealing with reference types:

        let number = { value: 10 };

        function increment(number) {
            number.value++;
        }

        increment(number);
        console.log(number);              // 11... because the number is stored elsewhere in memory and passed by reference. In this case there is NOT
                                          //  two independent copies but one address
    



/*
How do you add or remove properties?
/////////////////////////////////////
    • objects that are created in javascript are dynamic, meaning you can add or remove properties from them.
    • to ADD a property to an object, you can either use dot notation or bracket notation.
        • use dot notation for words that DONT have spaces or special characters.
        • use bracket notation if you DO have spaces or special characters.
*/

                            function superCar() {                               
                                return {
                                    coupe: 'McLaren 720s',
                                    sedan: 'BMW M5'
                                };
                            }

                            const superCarCollection = superCar();

                            superCarCollection.truck = 'Fored Raptor';          // dot notation
                            superCarCollection['suv'] = 'Lamborghinini Urus';   // bracket notation
                           
                            console.log(superCarCollection);
                            
/*
How do you Enumerate (i.e. iterate) over properties?
/////////////////////////////////////////////////////
    • for more detailed 
*/
                            function carsClasses() {
                                return {
                                    entry: 'Honda',
                                    middle: 'Mercedes',
                                    luxury: 'Rolls Royce'
                                };
                            }

                            const carsClassesList = carsClasses();

                            for (let key in carsClassesList) {
                                console.log(key);
                            }                                               //=> entry
                                                                            //   middle
                                                                            //   luxury

                            Object.keys(carsClassesList).forEach(function(key) {
                                console.log(`car class: ${key}, car make: ${carsClassesList[key]}`);
                            });
                                                                            // the car class is entry and the car make is Honda
                                                                            // the car class is middle and the car make is Mercedes
                                                                            // the car class is luxury and the car make is Rolls Royce

/*
How does abstraction apply to OOP?
///////////////////////////////////
    • Abstraction means we should hide the details and show (i.e. expose) only the essentials.
    • using the computer as an example, we want to hide the complexity of the hardware on the outside and
       expose only a button to power the computer on the outside.
       • note that understanding abstraction is ESSENTIAL to effectively apply object oriented programming.
*/

                            function classicCar(name) {
                                return {
                                    name: name,
                                    milage: { mile:12000, services:12 },
                                    facts: function() {
                                        console.log('its pretty clean')
                                    },
                                    factualComparison: function() {
                                        this.facts();
                                    }
                                };
                            }

                            const classicPorsche = classicCar('911');           
                            console.log(classicPorsche);                        
                            const sayWhat = classicPorsche.factualComparison;
                            console.log(sayWhat);


/*
What are private properties and methods?
/////////////////////////////////////////
NOTE: EXAMPLE NEEDS MORE CLARIFICATION
/////////////////////////////////////////
    • So the goal of abstraction is to hide certain members from the outside.
    • to make a property or method private, you simply need to define them as local variables.
    • in the example below, defaultLocation and computeOptimumLocation are local variables in a function.
        • however, from the object-oriented point of view, we can refer to them as private members of the circle object.
*/


                            function Circle(radius) {          
                                let defaultLocation = { x:0, y:0 };
                                let computeOptimumLocation = function(factor) {
                                    //...
                                }
                                this.radius = radius;
                                this.draw = function() {
                                    computeOptimumLocation(0.1);
                                    console.log('draw something cool');
                                };
                            }

                            const circle = new Circle(10);
                            console.log(circle);

                            circle.draw();

                    
/* 
What are getters and setters?
/////////////////////////////
    •   


*/

                            function Circle2(radius) {
                                this.radius = radius;

                                let defaultLocation = { x:0, y:0 };

                                this.draw = function() {
                                    console.log('draw thats soooo cooool');
                                };
                            }

                            const circle2 = new Circle2(10);
                            circle2.draw();


                      