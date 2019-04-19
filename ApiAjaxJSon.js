"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     API's, AJAX, and JSON with jQuery
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is an API?
//        + What are common API's?
//        + What are common features and themes with API's?
//        + What are some examples (and analogies) of API's?
//     2. What is a web API?
//     3. What is AJAX?
//     4. What is JSON?
//        + What kind of data types can JSON use?
//        + What can JSON do?
//     5. What are the unique features of JSON?
//        + What does a typical JSON schema (i.e. structure) look like?
//     6. What is the format of XML and why is JSON better? 
//     7. What are the difference between JavaScript Objects and JSON?
//     8. How do you loop through a JSON object?
//     9. How do you interpret JSON on the web?
//        + How do you use the parse method to make JSON data into a useable JavaScript object?
//
// NOTES ///////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on creating apps with jquery, including API's, AJAX, and jQuery taken from 
//        study, research, tutorials, mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the
//         document in Question and Answer format for improved readability.
//        
//////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*
1. What is an API?
///////////////////
    -- API stands for Application Programming Interface. 
    -- API is some kind of interface which has a set of functions that allow programmers to access specific features or data of an 
       application, operating system or other services.
    -- API define the way software libraries behave.   
    -- An API is a specification allowing two systems to communicate.
        -- In other words, an API is a messenger that takes a request and tells the system what to do. 
            -- For example, an API allows two strangers to speak to each other so that we can share data and work with each other.
            -- For example, the jQuery library provides an API for DOM traversal and manipulation, like .find, $(), etc.
    -- API's are made up of requests and repsonses.
        -- browser makes API request to the server.
        -- server does something with that request and sends it back.


    What are common API's?
    ======================
    -- Common API's include REST API's and library API's.
    -- The first common API is a REST API.
        -- Web API's (most likely REST API's) expse different endpoint (i.e. URLs) which you can access to get certian data from that API.
        -- you could also access those endpoints to modify the data on those servers.
        -- BUT it will only be what the API will expose to you and wants you to modify.
            -- for example, you could update a user through a REST API, but the API may only let you update the name or the email and not
               the password.
            -- You could also get the users from this API but you might not get the password of the user.
    -- The second common API is a library API.
        -- library API are actual libraries you pull into your code, such as jQuery.
            -- For example, in jQuery, you have a library with a bunch of methodes defined on them that do specific things when you call them and 
               return to you specific data.


    What are common features and themes with API's?
    ===============================================
    -- A common theme with API's is that it will only expose to you that which it wants you to access and hide what it does not want you to see.
    -- Also common with API's are tokens, which authenticate yourself with the API.
        -- the token will know who is accessing the API in order to limit what that person can access based on thier specific permissions.


    What are some examples (and analogies) of API's?
    ===============================================
        Example 1: Expedia:
        =-=-=-=-=-=-=-=-=-=
            -- For example, if you look at Expedia and try to findfrom San Diego to New York, it will search all websites
            and airlines for the best deals.  
            -- So how is this one website able to find flights from multiple websites?
                -- The website iteself doesnt have that information itself... that information is in the data base of the airlines themselves.
                -- The airline is interested in having thier flights on as many websites as possible to sell as many tickets as possible.
            -- Expedia has all this information by using the API's
                -- Now Expedia doesnt have access to the databases of all the airlines, with passwords, users, etc.
                -- BUT all the airlines use API's to give access to information through API's so websites like Expedia can have and list 
                that information on thier website.

        Example 2: A waiter
        =-=-=-=-=-=-=-=-=-=
            -- There are three entities in the restraurant: the customer, the waiter, and the kitchen.
            -- The waiter is the messenger that tells the kitchen what to do.
            -- The kitchen is providing the waiter with menu items.
                -- the kitchen tells the waiter to ask the customer what they want from the menu so it can be prepared.
        
        Example 3: The access port behind a computer.
        =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
            -- A computer works in its own way but it gives access to things like VGA, HDMI, audio, USB, etc.

        Example 4: Twilio API
        =-=-=-=-=-=-=-=-=-=-=
            -- SMS service API that you can use to send messages through your application to a users phone.
*/ 


/*
3. What is a web API?
//////////////////////
    -- A web API is an API over the web which can be accessed with HTTP protocol.
    -- A web API provides endpoints, which are URL's that we can make requests to in order to write and retrieve data.
*/


/*
2. What is AJAX?
////////////////
    -- AJAX stands for Asynchronous JavaScript and XML.
    -- AJAX refers to making one or more calls to a server AFTER a page has initially loaded.
        -- for example, infinite scroll where new content appears as you scroll down.
        -- when the user scolls, the application makes new calls to the server to retrieve additional data.
        -- The application then run a callback function ont he data returned by the AJAX request. 
*/


/*
4. What is JSON?
////////////////
    What is JSON in a nutshell?
    ===========================
    -- JSON stands for "JavaScript Object Notation."
    -- JSON is a format used to serialize JavaScript.
        -- in other words, it is a way that we can represent JavaScript object as a STRING that can be transmitted
           between  the server in the and the client
        -- Web API's provide JSON data.
        -- In turn, we write JavaScript code that translates JSON back into memory JavaScript objects.



    -- JSON is the most common format for sending asynchronous browser-server communication back and forth.
    -- JSON is the most wisely used for API's - Best for data exchange.    
    -- JSON grew out of a need for stateful, real-time server-to-browser communication protocol without using browser plugins
       such as Flash or Java applets which were dominant methods in the early 2000's.   
    -- JSON is based on VERY basic data structure.
    -- JSON is textual, language-independant data-exchange format (much like XML, CSV, or YAML).
    -- JSON works seemlessly with the server side languages as well as frontend code.
    -- Most programming languages can be used with JSON.
    -- NoSQL databases like MongoDB use JSON formats.
    -- The media type is application/json.
    -- The extension is saved as .json (i.e. like javascript is .js).
    
    What kind of data types can JSON use?
    =====================================
    -- JSON Data types include: 
        -- Number  -- {"name": 10}
        -- String  -- {"name": "Joe"}
        -- Boolean -- {"name": true}
        -- Array   -- {"name": [{"name": 1}, {"name2": 2}]}
        -- Object  -- {"name": {"name1": 1, "name2": 2}}
        -- Null    -- {"name": null}


    What can JSON do?
    =================
    -- JSON can be parsed into JavaScript (i.e. let obj = JSON.parse(string)).
    -- JSON can be parse objects back into strings (i.e. let string = JSON.stringify(obj)).
    -- JSON has what is known as a JSON schema (i.e. structure).
    -- JSON is scalable, meaning you can expand and add more data.  
    -- JSON is extended from JavaScript, meaning its not entirely the same.
    -- JSON works well with AJAX which is common format for retrieving data.
*/


/*
5. What are the unique features of JSON?
////////////////////////////////////////
    -- used like a JavaScript Object where you can give properties and values.
    -- JSON properties and values use double quotes (i.e. "firstName" : "Joe").
    -- JSON objects always start and end with curly braces (i.e. {}).
    -- JSON Names and Values are seperated by a colon.
    -- More than one pair of Name and Value is seperated by a comma.

    
    What does a typical JSON schema (i.e. structure) look like?
    ===========================================================

                {
                    "firstName": "Joe",
                    "lastName": "Smith",
                    "address": {
                        "street": "Sesame St.",
                        "city": "New York",
                        "state": "NY",
                        "postalCode": "10021"
                    }
                    "phoneNumbers": [
                        {
                            "type": "home",
                            "number": "123-456-7890"
                        },
                        {
                            "type": "cell",
                            "number": "098-765-4321" 
                        }
                    ],
                    "children": [],
                    "spouse": null
                }
    

    How do you present the key/name values?
    =======================================
    -- Key/name value pairs:
            { "name" : "value" }

    -- Objects are comma seperated:
            { "name1" : "value1", "name2" : "value2", "name3" : "value3" }

    -- Arrays hae square brackets with values sperated by commas:
            { "name" : [ {"name" : "value"}, {"name" : "value"}] }    
*/


/*
6. What is the format of XML and why is JSON better?
////////////////////////////////////////////////////
    -- Although there is some structure to XML, it is more difficult to read XML over JSON.
    -- In other words, JSON is more concise than XML.

        <person>
            <firstName>Joe</firstName>
            <lastName>Smith</lastName>
            <age>25</age>
            <address>
                <streetAddress>Sesame St.</streetAddress>
                <city>New York</city>
            </address>
            <phoneNumber>
                <type>Home</type>
                <number>123-456-7890</number>
            </phoneNumber>
            <phoneNumber>
                <type>Work</type>
                <number>098-765-4321</number>
            </phoneNumber>
        </person>
*/


/*
7. What are the difference between JavaScript Objects and JSON?
///////////////////////////////////////////////////////////////
    -- There is a definite difference between JSON and JavaScript Objects.
    -- however, the difference are minimal (i.e. double quotes for JSON compared to JavaScript, etc.)

    -- JSON has the following syntax constraints:
        -- Object keys MIST be in strings (i.e. "firstName", "address", etc.).
        -- JSON uses double quotes.
        -- Values can either be: string, number, JSON object, array, boolean, null.
        -- Duplicate keys (i.e. "spouse": null, "spouse": "Samantha") produce undefined.
        -- A basic example of a JavaScript object:
*/     
     
            let cars = {};
            cars.car1 = 'blue';    // note the single quotes
            cars.car2 = "black";   // note the double quotes
            console.log(cars);     //=> { car1: 'blue', car2: 'black' }

/*
    -- Comparatively, JavaScript object literals can have:
        -- string literals, number literals, or identifier names as keys.
        -- JavaScript uses double and single quotes.
        -- do not require quotes around them.
        -- Values can be any valid JavaScript expression, including function definitions and undefined.
        -- Duplicate keys produce defined, specific results.


    -- In the example below, we have a JSON object called 'carCollection' with two items, 
           specifically 'car1' and 'car2'.
*/
            let carCollection = {
                "car1": {
                    "color": "black", 
                    "model":"Honda", 
                    "mileage": 12345
                },
                "car2": {
                    "color": "blue", 
                    "model":"Ford", 
                    "mileage": 9876
                }
            }    
            console.log(carCollection);         //  { car1: { color: 'black', model: 'Honda', mileage: 12345 },
                                                //    car2: { color: 'blue', model: 'Ford', mileage: 9876 } }

            console.log(carCollection.car2);    //  { color: 'blue', model: 'Ford', mileage: 9876 }


/*
8. How do you loop through a JSON object?
/////////////////////////////////////////
    -- To iterate through a JSON object, follow the same method you would for normal JavaScript objects.
    -- Note that you can also look at the 'objects' tutorial for additional information.
*/

            const party = {
                "friends": [{
                    "firstName": "Alana",
                    "lastName": "Abelemill"
                },
                {
                    "firstName": "Bob",
                    "lastName": "Baskerville"
                }, 
                {
                    "firstName": "Charlie",
                    "lastName": "Coopersworth"
                }]
            }


/*
    Example 1 using for...in loop
    =============================
*/
            function printPartyNames1() {
                let people = party.friends;                                             // Let the variable 'people' equal the object party => friends
                for (let x in people) {                                                 // for all the items in people...
                    console.log(`${people[x].firstName} ${people[x].lastName}`);        // ... print the value of firstName and value of lastName.
                }
            }
            console.log(printPartyNames1());        // Alana Abelemill
                                                    // Bob Baskerville
                                                    // Charlie Coopersworth

/*
    Example 2 using Object.keys
    ===========================
*/
            function printPartyNames2() {
                let people = party.friends;
                Object.keys(people).forEach(function(key) {
                    console.log(`${people[key].firstName} ${people[key].lastName}`)
                })
            }
            console.log(printPartyNames2());        // Alana Abelemill
                                                    // Bob Baskerville
                                                    // Charlie Coopersworth

                                                   
/*
    Example 3 using normal for-loop
    ===============================
*/

            function printPartyNames3() {
                let people = party.friends;
                for (let x=0; x < people.length; x++) {
                    console.log(`${people[x].firstName} ${people[x].lastName}`);
                }
            }        

            console.log(printPartyNames3());        // Alana Abelemill
                                                    // Bob Baskerville
                                                    // Charlie Coopersworth



/*
9. How do you interpret JSON on the web?
////////////////////////////////////////
    -- Below is a good representation of AJAX, but more speficially JSON content you will encounter on the web.
    -- The following example is taken from https://randomuser.me/api/ .
    

    {"results":[{"gender":"male","name":{"title":"mr","first":"vincent","last":"clark"},"location":{"street":"4717 main st","city":"lloydminster",
    "state":"prince edward island","postcode":"Y4L 6Q5","coordinates":{"latitude":"-67.9857","longitude":"-29.2469"},"timezone":{"offset":"+4:00",
    "description":"Abu Dhabi, Muscat, Baku, Tbilisi"}},"email":"vincent.clark@example.com","login":{"uuid":"e39798b6-0652-47a0-bea0-c3c16e439e6d",
    "username":"redbird814","password":"vagabond","salt":"aztiBOcE","md5":"d88dea267bc7c31f786a2c7ed3b37f35","sha1":"d89f687323b9836f3d5993bcb7cf
    20b1fd273d9d","sha256":"f23647b8fb48c3b754dfbcdd9fb4d2e5a55dc2884cc6aa6e4ff6d644fab73db1"},"dob":{"date":"1956-05-10T04:15:22Z","age":62},
    "registered":{"date":"2015-02-27T08:28:30Z","age":4},"phone":"482-258-3816","cell":"224-996-1491","id":{"name":"","value":null},"picture":
    {"large":"https://randomuser.me/api/portraits/men/11.jpg","medium":"https://randomuser.me/api/portraits/med/men/11.jpg","thumbnail":
    "https://randomuser.me/api/portraits/thumb/men/11.jpg"},"nat":"CA"}],"info":{"seed":"e7998ea4bfe8b82f","results":1,"page":1,"version":"1.2"}}


    -- Note that the output above is essentially a string value which isnt very usable in JavaScript.
    -- to bring it into JavaScript, we need to first lint it an then assign it a variable name. 

      Assigned variable name                   linted JSON data
______/_____  __________________________________/______________________________________________________  
|          | |                                                                                        |
*/
 let data = {
                "results": [{
                    "gender": "male",
                    "name": {
                        "title": "mr",
                        "first": "vincent",
                        "last": "clark"
                    },
                    "location": {
                        "street": "4717 main st",
                        "city": "lloydminster",
                        "state": "prince edward island",
                        "postcode": "Y4L 6Q5",
                        "coordinates": {
                            "latitude": "-67.9857",
                            "longitude": "-29.2469"
                        },
                        "timezone": {
                            "offset": "+4:00",
                            "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
                        }
                    },
                    "email": "vincent.clark@example.com",
                    "login": {
                        "uuid": "e39798b6-0652-47a0-bea0-c3c16e439e6d",
                        "username": "redbird814",
                        "password": "vagabond",
                        "salt": "aztiBOcE",
                        "md5": "d88dea267bc7c31f786a2c7ed3b37f35",
                        "sha1": "d89f687323b9836f3d5993bcb7cf20b1fd273d9d",
                        "sha256": "f23647b8fb48c3b754dfbcdd9fb4d2e5a55dc2884cc6aa6e4ff6d644fab73db1"
                    },
                    "dob": {
                        "date": "1956-05-10T04:15:22Z",
                        "age": 62
                    },
                    "registered": {
                        "date": "2015-02-27T08:28:30Z",
                        "age": 4
                    },
                    "phone": "482-258-3816",
                    "cell": "224-996-1491",
                    "id": {
                        "name": "",
                        "value": null
                    },
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/men/11.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/men/11.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/11.jpg"
                    },
                    "nat": "CA"
                }],
                "info": {
                    "seed": "e7998ea4bfe8b82f",
                    "results": 1,
                    "page": 1,
                    "version": "1.2"
                }
            }

            // console.log(data);   // This will return one big string which is problematic because we might want specific data.
            // console.log(data.results);   // This will also return a big string format.



            








/*
What is an API endpoint
*/









































/*
www.jsonlint.com to validate json structure
UdThComWeDevin2019Ze2MasApis
*/
