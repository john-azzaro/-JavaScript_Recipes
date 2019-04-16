"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     API's, AJAX, JSON with jQuery
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is an API?
//     2. What is AJAX?
//     3. What is a web API?
//     4. What is JSON?
//     5. What is the format of JSON?
//     6. What are the difference between JavaScript Objects and JSON?
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
    -- An API is a specification allowing two systems to communicate.
        -- More simply put, an API allows two strangers to speak to each other so that we can share data and work with each other.
        -- for example, the jQuery library provides an API for DOM traversal and manipulation, like .find, $(), etc.
    -- An API is a messenger that takes a request and tells the system what to do. 
    -- An API is a contract between two things and how they interact with each other.
    -- API's are made up of requests and repsonses.
        -- browser makes API request to the server.
        -- server does something with that request and sends it back.
    -- Common API's include REST API's and library API's.
    -- Web API's (most likely REST API's) expse different endpoint (i.e. URLs) which you can access to get certian data from that API.
        -- you could also access those endpoints to modify the data on those servers.
        -- BUT it will only be what the API will expose to you and wants you to modify.
            -- for example, you could update a user through a REST API, but the API may only let you update the name or the email and not
               the password.
            -- You could also get the users from this API but you might not get the password of the user.
    -- the other common API is library API's.
        -- library API are actual libraries you pull into your code, such as jQuery.
            -- in jQuery, you have a library with a bunch of methodes defined on them that do specific things when you call them and return to
               you specific data.
    -- A common theme with API's is that it will only expose to you that which it wants you to access and hide what it does not want you to see.
    -- Also common with API's are tokens, which authenticate yourself with the API.
        -- the token will know who is accessing the API in order to limit what that person can access based on thier specific permissions.


    -- Example 1: Expedia:
        -- For example, if you look at Expedia and try to findfrom San Diego to New York, it will search all websites
           and airlines for the best deals.  
        -- So how is this one website able to find flights from multiple websites?
            -- The website iteself doesnt have that information itself... that information is in the data base of the airlines themselves.
            -- The airline is interested in having thier flights on as many websites as possible to sell as many tickets as possible.
        -- Expedia has all this information by using the API's
            -- Now Expedia doesnt have access to the databases of all the airlines, with passwords, users, etc.
            -- BUT all the airlines use API's to give access to information through API's so websites like Expedia can have and list 
               that information on thier website.

    -- Example 2: A waiter:
        -- There are three entities in the restraurant: the customer, the waiter, and the kitchen.
        -- The waiter is the messenger that tells the kitchen what to do.
        -- The kitchen is providing the waiter with menu items.
            -- the kitchen tells the waiter to ask the customer what they want from the menu so it can be prepared.
    
    -- Example 3: The access port behind a computer:
        -- A computer works in its own way but it gives access to things like VGA, HDMI, audio, USB, etc.

    -- Example 4: Twilio API
        -- SMS service API that you can use to send messages through your application to a users phone.
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
3. What is a web API?
//////////////////////
    -- a web API provides endpoints, which are URL's that we can make requests to in order to write and retrieve data.
*/


/*
4. What is JSON?
////////////////
    -- JSON stands for "JavaScript Object Notation."
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
5. What are the unique features JSON?
/////////////////////////////////////
    -- used like a JavaScript Object where you can give properties and values.
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
What is the format of XML and why is JSON better?
/////////////////////////////////////////////////
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
6. What are the difference between JavaScript Objects and JSON?
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
www.jsonlint.com to validate json structure
UdThComWeDevin2019Ze2MasApis
*/