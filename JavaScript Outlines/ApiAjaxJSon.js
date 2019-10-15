"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     API's, AJAX, and JSON with jQuery
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is an API?
//        + What are common API's?
//        + What are common features and themes with API's?
//        + What are some examples (and analogies) of API's?
//     2. What is a web API?
//     X. How does the API request/response cycle work?
//     3. What is AJAX?
//     4. What is JSON?
//        + What kind of data types can JSON use?
//        + What can JSON do?
//     5. What are the unique features of JSON?
//        + What does a typical JSON schema (e.g. structure) look like?
//     6. What is the format of XML and why is JSON better? 
//     7. What are the difference between JavaScript Objects and JSON?
//     8. How do you loop through a JSON object?
//     9. How do you interpret JSON on the web?
//        + How do you use the parse method to make JSON data into a useable JavaScript object?
//        + How do you output information from your object?
//        + How do you output infotmation from an object into a string?
//    10. What is an API endpoint and query string?
//        + In an API endpoint, how do you identify endpoints, query strings, and additional seach parameters?
//
//     X. How do you retrieve data from web API's using jQueries AJAX capabilities?
//
// NOTES ///////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on creating apps with jquery, including API's, AJAX, and jQuery taken from 
//        study, research, tutorials, mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the
//         document in Question and Answer format for improved readability.
//        
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* 
API in a nutshell
/////////////////
    •	An API stands for Application Programming Interface, which is a fancy way of saying what one application exposes to another.
    •   A better way to think about API's is that it is a CONTRACT between two things and how they interact with each other.

    •   Think of a restaurant as an analogy of an API.
        •   You dont go staight up to the chef to place your order, you need to look at the menu and order something from there because that
            tells you what the restaurant has to offer.
            •   The API is the menu.

        •   The API essentially tells you what that certain application is giving to you and the things you can use from that application. 
        •   So when you go to the restaurant and then order something from the menu by telling them what you want, the restaurant will give you
            whatever you want from that menu.
            •   So the API is going to give you back data.

        •   When you access an API, you send a REQUEST for what you want, and then the API will send back the information you want back as a RESPONSE.

        •   However, if you go to a Steak Restaurant and you order Seafood, they are going to throw an error at you... they'll say "sorry, we dont 
            serve seafood here, you need to choose something from the menu".
        •   This exchange is what makes API's secure because they will only EXPOSE what they want to expose to thier customers, a menu full of steaks.        
        •   For example, a web application wont expose a database full of users and passwords, only th elogin and signin page... not the database itself.
            By doing this, they only expose the parts they want to. 

       •    What are some common forms of API's? 
            •  REST API's (on the web).
            •  Library API's (from code that you pull into your project) 

        •   REST API's expose different ENDPOINTS (aka URL's) which you can access to get certain data (from that API).
            These ENDPOINTS can also be accessed in order to modify data on those servers... but only applies to what the application exposes to you
            and wants to let you modify. 
            •   For example, you could update a user through a REST API, but they will only let you update the password and email... not the name. 
            •   You could also get users from this API, but they will not return the passwords of those users. 
            •   Again, the servers are secure because they only expose the information they want to expose through this API.
            •   In other words, the API is the contract between the server and the client.

        •   Libraries are another common form of API that pulls a specific code library into your own code.
            •   Libraries have many methods definined in them that do specific things when you call them and return specific data when you call them.
            •   This is an API as its a contract between the library code you've installed and your project that's using the library.
            •   When using library API's, you have:
                •   Different ways of accessing it (i.e. loading into your project, meta, etc.)
                •   You can only use the methods that they expose (i.e. jquery library, etc)
                •   You cannot access the internals of that library unless its through the methods of the API library exposed to you.

        •   The common theme of API's is that they only expose what they want you to be able to acess and hide everything else to make it as secure as possible. 
        •   Also common with API's is some sort of TOKEN to authenticate yourself with the API, which allows the application to know who's accessing it and limit
            what that person can access based on specific permissions.








        

*/





/*
1. What is an API?
///////////////////
    -- An API stands for Application Programming Interface. 
    -- An API is some kind of interface which has a set of functions that allow programmers to access specific features or data of an 
       application, operating system or other services.
    -- An API is a set of commands, function, protocols, and objects that programmers can use to create software or interact with 
       an external system.
    -- An API provides developers with standard commands for performing common operations so they do not have to write the code 
       from scratch.
    -- An API is a publicly available web-based API that returns data, likely in JSON or XML
    -- An API is NOT a database or server... it is the CODE that governs the access points for the server. 
    -- An API define the way software libraries behave.   
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
        -- Web API's (most likely REST API's) expse different endpoint (e.g. URLs) which you can access to get certian data from that API.
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
    -- Most big websites have an API, like Twitter.  There are also many public API's like Todd Motto's list of public API's:
        -- https://github.com/toddmotto/public-apis
*/


/* 
How does the API request/response cycle work?
/////////////////////////////////////////////'
==SHORT ANSWER==
   •   An API request/response cycle begins with the developer sending a request to an API for information.  
   •   The API will forward the request to the application and if the request is allowed and send data back to the developer.

==EXAMPLE==
         [DEVELOPER]  ===(request)==>  [API]  ===(request approved)==> [APP APPROVES] ===(data returned) ==> [DEVELOPER]

*/









/*
2. What is AJAX?
////////////////
    -- AJAX stands for Asynchronous JavaScript and XML.
    -- AJAX actually means something different than what it does, however it morphed and evolved into the term we use now.
    -- AJAX now represents what you do when a website requests more information from a server after the page has loaded.
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
    -- The extension is saved as .json (e.g. like javascript is .js).
    
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
    -- JSON can be parsed into JavaScript (e.g. let obj = JSON.parse(string)).
    -- JSON can be parse objects back into strings (e.g. let string = JSON.stringify(obj)).
    -- JSON has what is known as a JSON schema (e.g. structure).
    -- JSON is scalable, meaning you can expand and add more data.  
    -- JSON is extended from JavaScript, meaning its not entirely the same.
    -- JSON works well with AJAX which is common format for retrieving data.
*/


/*
5. What are the unique features of JSON?
////////////////////////////////////////
    -- used like a JavaScript Object where you can give properties and values.
    -- JSON properties and values use double quotes (e.g. "firstName" : "Joe").
    -- JSON objects always start and end with curly braces (e.g. {}).
    -- JSON Names and Values are seperated by a colon.
    -- More than one pair of Name and Value is seperated by a comma.

    
    What does a typical JSON schema (e.g. structure) look like?
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
    -- however, the difference are minimal (e.g. double quotes for JSON compared to JavaScript, etc.)

    -- JSON has the following syntax constraints:
        -- Object keys MIST be in strings (e.g. "firstName", "address", etc.).
        -- JSON uses double quotes.
        -- Values can either be: string, number, JSON object, array, boolean, null.
        -- Duplicate keys (e.g. "spouse": null, "spouse": "Samantha") produce undefined.
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
    

        {"results":[{"gender":"male","name":{"title":"mr","first":"jayden","last":"andersen"},"location":{"street":"2678 concession road 6","city":"aylmer","state":"nova scotia","postcode":"R9P 0I9","coordinates":{"latitude":"-63.3666","longitude":"-118.0485"},"timezone":{"offset":"+2:00","description":"Kaliningrad, South Africa"}},"email":"jayden.andersen@example.com","login":{"uuid":"70845082-167a-4a18-acd0-c8611c038a9c","username":"ticklishbear777","password":"seeker","salt":"fAENNeHi","md5":"dc370da87565686343b09288b3ba0f36","sha1":"e89b0734ace5005667dffb39913350570bcb388f","sha256":"89fe7b18d97b9cf747d799be145e08ce97705049d2ef20177ed3505b8da72d97"},"dob":{"date":"1973-11-30T20:41:24Z","age":45},"registered":{"date":"2008-09-21T03:32:59Z","age":10},"phone":"070-256-6793","cell":"997-407-7418","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/10.jpg","medium":"https://randomuser.me/api/portraits/med/men/10.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/10.jpg"},"nat":"CA"}],"info":{"seed":"a36c43ae6a9b2554","results":1,"page":1,"version":"1.2"}}


    -- Note that the output above is essentially a string value which isnt very usable in JavaScript.
    -- to bring it into JavaScript, we need to first lint it an then assign it a variable name.
    -- Also, add template literal backticks to the object.

    DO NOT FORGET: REMEMBER TO ADD TEMPLATE LITERAL BACKTICKS TO THE OBJECT!!!


      Assigned variable name                   JSON data (linted)
______/_____  __________________________________/______________________________________________________  
|           | |                                                                                        |
*/
 var dataTest = `{
	"results": [{
		"gender": "male",
		"name": {
			"title": "mr",
			"first": "jayden",
			"last": "andersen"
		},
		"location": {
			"street": "2678 concession road 6",
			"city": "aylmer",
			"state": "nova scotia",
			"postcode": "R9P 0I9",
			"coordinates": {
				"latitude": "-63.3666",
				"longitude": "-118.0485"
			},
			"timezone": {
				"offset": "+2:00",
				"description": "Kaliningrad, South Africa"
			}
		},
		"email": "jayden.andersen@example.com",
		"login": {
			"uuid": "70845082-167a-4a18-acd0-c8611c038a9c",
			"username": "ticklishbear777",
			"password": "seeker",
			"salt": "fAENNeHi",
			"md5": "dc370da87565686343b09288b3ba0f36",
			"sha1": "e89b0734ace5005667dffb39913350570bcb388f",
			"sha256": "89fe7b18d97b9cf747d799be145e08ce97705049d2ef20177ed3505b8da72d97"
		},
		"dob": {
			"date": "1973-11-30T20:41:24Z",
			"age": 45
		},
		"registered": {
			"date": "2008-09-21T03:32:59Z",
			"age": 10
		},
		"phone": "070-256-6793",
		"cell": "997-407-7418",
		"id": {
			"name": "",
			"value": null
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/10.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/10.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/10.jpg"
		},
		"nat": "CA"
	}],
	"info": {
		"seed": "a36c43ae6a9b2554",
		"results": 1,
		"page": 1,
		"version": "1.2"
    },
    "rewards" : [{                                         
        "trophy": "gold cup"
    }]
}`

            console.log(dataTest);        // output will return the entire object as a string.         
/*   
    -- HOWEVER< returning the entire object as a string is problematic because you might want ot get specfic key/value pairs. 
    -- BUT there is a way to transform a string that is JSON formatted into a useable javascript object.
    -- To transform a string which is JSON formatted into a JavaScript object, we use a method called PARSE.



    How do you use the parse method to make JSON data into a useable JavaScript object?
    ===================================================================================
    -- JSON.parse is the method used to parse JSON, transforming the value that it parses through into a useable
       javascript object format.
    -- The JSON data MUST be valid otherwise you will get problems.

                                       pass data (i.e. the variable name of the JSON data above)
                                        /
            let dataJSON = JSON.parse(dataTest)
*/
            let dataJSON = JSON.parse(dataTest);      
            console.log(dataJSON.results);            // shows entire object above!



/*
    How do you output information from your object?
    ===============================================
    -- So now we should be ready to output our data taken from JSON and then converted to a JavaScript object!
    -- to do this, we call dataJSON (which parses JSON and transforms it into a useable object), specify the index value (e.g. 0)
       and then chain the desired key whose value we want to access.
*/
            console.log(dataJSON.results[0].cell);    // 997-407-7418
/*
    -- However, we can clean up the above code by assigning a variable to the dataJSON.results[0]
*/

            let person = dataJSON.results[0]    // to make things more streamlined, we make a new variable called person
                                                // and assign it the value "dataJSON.results[0]" where 0 is the index value
                                                // of "results".
            console.log(person.phone);          // THEN when we console log person.phone, we'll get 070-256-6793

/*
    -- and of course we can create template literals with access to all key/values in out object.
*/
            console.log(`${person.name.first} ${person.name.last} who lives in ${person.location.city}`);   // jayden andersen who lives in aylmer

/*
    -- and of course we can also access things like thumbnails in the object as well.
*/
            console.log(person.picture.thumbnail);     // https://randomuser.me/api/portraits/thumb/men/10.jpg



/*
    How do you output infortmation from an object into a string?
    ===========================================================
    -- to turn an object into a string, we use JSON.stringify, which converts a value to a string.
    -- when this is done, the whole JSON object will fit into one variable.
*/
            let stringIt = JSON.stringify(dataJSON);    // so bascially here we are taking our object and converting it back to a string.
            console.log(stringIt);

            


/*
10. What is an API endpoint and query string?
///////////////////////////////////////////
    -- An API endpoint is an interface the consisting of one or more publicly exposed ENDPOINTS to a defined request-response message
       system (i.e. JSON) which is exposed via the web by means of an HTTP-based web server.
*/


/* 
How do you implement an app with JSON?
//////////////////////////////////////
-- Using the getJSON is a short-cut of the $.ajax() method.
-- getJSON is our way of initiating a call to the server and then a callback function that knows how to process the data and update the DOM.

        function getDataFromApi(searchTerm, callback) {
            const API_URL = http://api.website.com/search;
            const query = {
                q: `${searchTerm}`,
                per_page: 3
        }
        $.getJSON(API_URL, query, callback);
        }
*/


/*
How do you implement an app with AJAX?
//////////////////////////////////////// 
    -- While similar to getJSON, AJAX gives you more control over configuration.
    -- Just like getJSON, $.ajax() is another our way of initiating a call to the server and then a callback function that
       knows how to process the data and update the DOM.
    -- AJAX takes a single settings object as its argument (i.e. the "settings" in $.ajax(settings) and an asynchronous 
       request for the desired data (i.e. the $.ajax() in $.ajaz(settings)). 

       INFORMATION PASSED:  (Jon-Snow)

        function getDataFromApi(searchTerm, callback) {                  // function which has search term passed in.
            const settings = {                                           // settings object with relevant information to request from API:
                url: http://api.website.com/search,                      // API url. 
                data: {                                                  // elements of query string in the settings object.
                    q: `${searchTerm}`,                                  // search term passed to function (i.e "Jon Snow").
                },
                dataType: 'json',                                        // Data type of response.
                type: 'GET',                                             // Request method.
                success: callback,                                       // if callback is successful, go on...
                error: function(err) {                                   // if callback is unsuccessful, console.log and error.
                    console.error(err);
                }
            };
            $.ajax(settings);                                             // asynchronous requests with settings as its argument.
        }

*/



/*
X. How do you implement an app using JSON or AJAX?
//////////////////////////////////////////////////
    -- In the previous sections, you got a sense of what an API is, what API endpoints look like, etc.
    -- Now you'll take that familiarity with API endpoints and implement that API in an app.
    -- There are two ways to implement the app:
        1. JSON
        2. AJAX

    -- 
*/






/*
////////////////////////////////////////
At this point, it might be best to do a few
examples with varying degrees of difficulty 
provide a walkthrough.  It might be useful
to put maybe 4 or 5 examples.

There a bit more to put above so more elaboration
on the ins-and-outs of APIs is needed above.
///////////////////////////////////////
*/







/*
EXAMPLE 1: DogPic API (easy)
/////////////////////////////
*/





/*
EXAMPLE 2: Song Lyrics API (moderate)
//////////////////////////////////////

    -- Suppose you want to make an app that finds the lyrics of your favorite song by artist and song title.

    STEP 1: Establish User Story
    ============================
        1. Music lyric app should be rendered to the page.
            A. Header saying "Find your favorite song lyrics!"
            B. Form
                I. Label directing user to put in artist.
                II. Submission field for artist.
                III. Label directing user to put in song title.
                IV. Submission field for song title.
            C. Results Section.
        2. When the user fills in the artist and title section, the submission button
           will show the lyrics to the song.


    STEP 2: Mockup
    ==============
        
        HTML Outline
        ============ 
        
        
        
        
        
        
        HTML Mockup
        ===========



       

*/























/*
EXAMPLE 2: GitHub API (moderate)
/////////////////////////////////

    -- Suppose you want to make an app that accesses the GitHub API to search and display user repositories.

    STEP 1: Establish User Story
    ============================
    -- Before anything, make sure you have a clear picture of what you're building by putting together a "user story".
    -- A "user story" is a methodical description of what the app you are building will do.

    -- A simple user story for the GitHub search app could look something like this:
    
            1. GitHub Search App should be rendered to the page (i.e. show the app on the screen).
                A. Header will introduce the user to the purpose of the app.
                B. Form 
                    I. Label directing user to provide a name.
                    II. submission field.
                    III. Submit button to search.
                D. Results section to display the results of the search.
            2. The user will be directed to input a user name to search the GitHub repositories for.
            3. The user will click the "Search" button to begin the search.
            4. The user will see the results of that search in the "Results" section below the input form.
  
    

    STEP 2: Build a HTML Mockup
    ===========================
        -- First, do a HTML mockup of your App in you HTML document.
            -- This is useful because you can mockup the design before you invest time in the JS coding  
               and also figure out what data you'll need.
            -- As you begin to build out the app, you will be able to transfer parts to your .js document.
  
            HTML Outline
            =============

                    1. Search Section: 
                        A. Title: "Search on GitHub Repositories by Name"
                        B. Form-lable: "Please provide a name: "
                        C. Form-input: "e.g., John-Azzaro"
                        D. Search Button: "Search"

                    2. Result Section:
                        A. "Results"
                            I. [My First Repo] by [Joe Smith]                               // brackets denote anchor links.
                           II. Description: This is the description for my first repo!
                          III. Last Updated: June 24, 2018


        -- The HTML mockup should look something like this (in html document):
        -- Note that js class names should closely reflect what each element does.

            HTML mockup
            ============

                <!-- Search Section -->

                    <section>                                                                   // Section for github form and results.
                        <h1>Search on GitHub Repositories by Name</h1>                          // Title
                        <form action="#" class="js-search-form">                                // Form for searchin GitHub Repos by name:
                            <label for="query">Please provide a name: </label>                  // directions for user input...
                            <input type="text" class="js-input"placeholder="e.g., Joe Smith">   // ... input field (with example placeholder).
                            <button type="submit">Search</button>                               // Button tp submit "Search".
                        </form>         
                        <h2>Results</h2>                                                        // Result section title
                        <div class="js-search-results">Results go here</div>                    // Result section 
                    </section>

                    
                <!-- Result section-->

                    <div class="results">
                        <h2>
                            <a class="js-result-name" href="">Repository Name</a> by                          // Repository name anchor element.
                            <a class="js-user-name" href="">John Smith</a>                                    // User name anchor element.
                        </h2>
                        <p>Description: <span class="js-description">Description goes here</span></p>         // Description of respository.    
                        <p>Last updated: <span class="js-last-updated">Updated last goes here</span></p>      // Last updated date of repository.
                     </div>
    

       
    STEP 2: Explore the API
    =======================
    -- After establishing your user story and HTML mockup, best thing to do is explore the API to make sure what you want 
       to accomplish in your user story is possible using the given API (e.g. GitHub API) you want to use.  
       -- This makes sure you dont waste your time building out your code only to discover that the API does not provide the 
          information you want to request and display in your own app.

    -- So first thing is go to the GitHub API address: https://api.github.com/
    -- What you will see is a variety of endpoints available to you to build your application.  For example:


                current_user_url	                    "https://api.github.com/user"
                current_user_authorizations_html_url	"https://github.com/settings/connections/applications{/client_id}"
                authorizations_url	                    "https://api.github.com/authorizations"
                code_search_url	                        "https://api.github.com/search/code?q={query}{&page,per_page,sort,order}"
                commit_search_url	                    "https://api.github.com/search/commits?q={query}{&page,per_page,sort,order}"
                emails_url	                            "https://api.github.com/user/emails"
                emojis_url	                            "https://api.github.com/emojis"
                events_url	                            "https://api.github.com/events"
                feeds_url	                            "https://api.github.com/feeds"
                followers_url	                        "https://api.github.com/user/followers"
                following_url	                        "https://api.github.com/user/following{/target}"
                gists_url	                            "https://api.github.com/gists{/gist_id}"
                hub_url	                                "https://api.github.com/hub"
                issue_search_url	                    "https://api.github.com/search/issues?q={query}{&page,per_page,sort,order}"
                issues_url	                            "https://api.github.com/issues"
                keys_url	                            "https://api.github.com/user/keys"
                notifications_url	                    "https://api.github.com/notifications"
                organization_repositories_url	        "https://api.github.com/orgs/{org}/repos{?type,page,per_page,sort}"
                organization_url	                    "https://api.github.com/orgs/{org}"
                public_gists_url	                    "https://api.github.com/gists/public"
                rate_limit_url	                        "https://api.github.com/rate_limit"
                repository_url	                        "https://api.github.com/repos/{owner}/{repo}"
                repository_search_url	                "https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}"
                current_user_repositories_url	        "https://api.github.com/user/repos{?type,page,per_page,sort}"
                starred_url	                            "https://api.github.com/user/starred{/owner}{/repo}"
                starred_gists_url	                    "https://api.github.com/gists/starred"
                team_url	                            "https://api.github.com/teams"
                user_url	                            "https://api.github.com/users/{user}"
                user_organizations_url	                "https://api.github.com/user/orgs"
                user_repositories_url	                "https://api.github.com/users/{user}/repos{?type,page,per_page,sort}"
                user_search_url                     	"https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"



    STEP 3: Establish endpoints, query strings, and additional seach parameters.
    ============================================================================   
    -- Now suppose the objective of our app is to SEARCH the REPOSITORIES of GitHub for specific users or organizations.
        -- we see that the fourth option lets us do just that:
        -- Also, for more information see GitHub API documentation: https://developer.github.com/v3/search/#search-repositories

        -- So after looking through the documentation and the options, you see "repository_search_url" which allows you to search for
           repositories with a given term AND provide a url to that repository.


            repository_search_url	"https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}"


        -- The API endpoint above has a few components to break down:


                        Endpoint
            ________________/_________________________       Q indicates the query string we want to search by (e.g. john-smith, sallyK, etc.).
            |                                         |     /
            https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}
                                                     /           |                        \
                  The question mark (?) tell the server          ampersand seperates       additional search parameters
                  it is about to receive a query string          key/value pairs                         


        -- So if we wanted to do a real search Kate Hudson (k88hudson) and access all of her repositories, the enpoint would look like this:
            

                               q={...} is the query term               in:name means that we want to search for k88hudson IN the name key.
                                                        \              /
            https://api.github.com/search/repositories?q=k88hudson%20in:name
                                                                   |
                                                                 %20 represents a space in url 

 

        -- and if you want to add additional parameters to the query, you add an ampersand "&" to seperate any additional parameters.
        -- for example, if I wanted to first page of the results and 5 results per page:


                                                                  page=1 means for the first page of our results...
                                                                              \
            https://api.github.com/search/repositories?q=k88hudson%20in:name&page=1&per_page=5
                                                                                         \
                                                                                          ... per_page=5 means display 5 results per page.
                      

    STEP 4: Determine key/values you wish to use in your app
    ========================================================
    -- When you follow the above link you'll see JSON data for search repositories.

            total_count	168                         // this means the total number of repositories k88hudson currently has.
            incomplete_results	false               // this indicates if the search exceeded GitHub's query time limit.
          > items	[…]                             // this is an array of objects which represent a repository with "k88hudson" in it. 
                                                    // -- "items" is where we will find information for our app.
                                                    // -- Also remember, the values MUST be in double quotes if they are strings.

    -- When you expand "items", you'll see a long list of key/value pairs.

            id          	    41055563
            node_id	            "MDEwOlJlcG9zaXRvcnk0MTA1NTU2Mw=="
            name	            "react-formation"
            full_name	        "k88hudson/react-formation"
            private	            false
            owner	            {…}
            html_url	        "https://github.com/k88hudson/react-formation"
            description	        "Robust, testable forms with react in minutes"
            fork	            false
            url	                "https://api.github.com/r…88hudson/react-formation"
            forks_url	        "https://api.github.com/r…on/react-formation/forks"
            keys_url	        "https://api.github.com/r…-formation/keys{/key_id}"
            collaborators_url	"https://api.github.com/r…aborators{/collaborator}"
            teams_url	        "https://api.github.com/r…on/react-format
            ...
            ... 

    -- For our app, let's say we want to display:

            1. Repo
            2. User Name
            3. Description
            4. Updated last.


    -- Now the description and updated last are pretty stright forward.
    -- However, from our HTML mockup we want the Repo and User Name to link to the respective pages on GitHub, so we insert the html_url and
       the name/login


            NAME__________________           VALUE_________________________________________        LOCATION___________________________________
            For Repo w/link:
                1. name                      "react-formation"                                     items  =>  [x]  =>  name
                2. html_url                  "https://github.com/k88hudson/react-formation"        items  =>  [x]  =>  html_url
            
            For User Name w/link:
                3. owner.html_url            "https://github.com/k88hudson"                        items  =>  [x]  =>  owner  =>  html_url
                4. owner.login               "k88hudson"                                           items  =>  [x]  =>  owner  =>  login
        
            For Description:
                5. description               "Flight rules for git"                                items  =>  [x]  =>  description
                6. updated_at                "2019-04-25T18:38:47Z"                                items  =>  [x]  =>  updated_at



    STEP 5: Implementing App Architecture
    =====================================
    -- Once you have a good idea of what you want your app to do (i.e. user story) and whether or not that API you've selected will work for 
       you (i.e explore API), you need to start considering how to setup you app architecture. 
    -- Perhaps the most effecitve way is to write "pseudocode".  
    -- "Psuedocode" is comprised of "function stubs", which is essentially functions without any code in it.
        -- within these "function stubs", you can begin to map out the functionality of your app.
    -- Note that at this stage, you shouldnt write code in the function stubs but plain descriptions of what you want the function to do.

        I. Starting with the right foundation
        =====================================    
        -- The best way to start laying the foundations of any app is to start with an asynchronous callback, initialization, and event handler setup.
        -- This is a common initial setup, so always best to start with what you know!


                function setUpEventHandlers() {            // Function that listens for user interaction.
                         
                }

                function initializeGitHubApp() {          // runs the initialization functions, such event handlers (e.g. listeners).
                    setUpEventHandlers();                     
                }

                $(initializeGitHubApp)                     // Document ready function (e.g. asynchronous callback).

        
        
    STEP 6: Implementing Basic App functionality
    =============================================
        -- In the user stories section, we said that the purpose of the app was to let the user INPUT a GitHub user name and SEARCH for it.
        -- Now we know that we in order to search, we need two things: a form to input the search term and a button to trigger the search.

        -- Below we need to add one event handler function, as well as add that event handler to the setUpEventHandlers so we can listen for interaction.


                function handleSubmit() {                 // ... run handleSubmit.
                   
                }

                function setUpEventHandlers() {            
                    handleSubmit();                       // listen for handleSubmit...
                }

                function initializeGitHubApp() {          
                    setUpEventHandlers();                     
                }
                
                $(initializeGitHubApp);                     



    STEP 7: Build out handleSubmit
    ===============================
        -- We know that the user needs to do 2 things in order to successfully complete a search:
                1. Fill in the input field with a GitHub user name.
                2. Press "Search".
        -- The fact that we have a search button hints that we need to first construct an event listener.


               function handleSubmit() {                     // once handle submit runs...
                   $('main').submit(function(event) {        // ... on submit (which is attached to the parent element "main" which will fire 
                        ...                                  // for all descendants).
                        ...
                        ...
                   });
                }


        -- So now what happens once the user clicks the button (and assuming they a GitHub user name in the input field)?
        -- Now we break down the step-by-step process for submitting the user name.


               function handleSubmit() {                                              // once handle submit runs...
                   $('main').submit(function(event) {                                 // On submit... 
                        event.preventDefault();                                       // First, make sure we prevent default form submission behavior.                                  
                        const userInput = $(event.currentTarget).find('.js-input');   // Second, find the input to search for and assign it to "userInput".
                        const searchTerm = userInput.val();                           // Third, set the current value of userInput to "searchTerm".
                        userInput.val("");                                            // Fourth, clear out the value of "userInput"f or the next search.
                        ...
                   });
                }

        
        -- At this point, we have saved the input as our search term.  Now what do we do with it?
        -- Our objective to get data from the GitHub API, specifically, to find the GitHub user name.
        -- To this end, we need to GET THE DATA FROM THE API.

        -- To do this, we need to create a function called getDataFromApi and pass two critical arguments:
                1. The searchTerm.
                2. Display the results of that searchTerm.


              function handleSubmit() {                                              
                   $('main').submit(function(event) {                                 
                        event.preventDefault();                                                                        
                        const userInput = $(event.currentTarget).find('.js-input');   
                        const searchTerm = userInput.val();                           
                        userInput.val("");                                           
                        getDataFromApi(searchTerm, displayGitHubSearchData);          // here we run "getDataFromAPI" and pass "searchTerm" in the first
                   });                                                                // slot and displayGitHubSearchData in the second slot.
                }


        -- What running getDataFromApi at the end of handleSubmit does is two main things:
                1. pass along the search term so that we can use it to search the GitHub API.
                2. take all that DATA and map it to our template (which we had previously constructed in our HTML mockup).

        -- What does this mean?  We need to two additional functions:
                1. getDataFromApi, which will literally get the data from the api.
                2. displayGitHubSearchData, which will literally display the data we request from the GitHub API

        
                
    STEP 8: Request and display data from API
    =========================================
        -- Now that the app has the proper foundation, specifically that the app is listening for the search submit, we need to consider
           what to do next.
        -- Because we are drawing from an API, first we need a way to get data from that API, thus we'll need a "getDataFromApi" function.
        -- Second, we need a way to display that data to our results section, thus we'll need a "displayGitHubSearchData".
        
            
                function getDataFromAPI() {...}                           // This function will RETRIEVE information from the GitHub API.
   
                function displayGitHubSearchData() {...}                  // This function will DISPLAY infromation taken from the GitHub API.              

                function handleSubmit() {                                              
                   $('main').submit(function(event) {                                 
                        event.preventDefault();                                                                        
                        const userInput = $(event.currentTarget).find('.js-input');   
                        const searchTerm = userInput.val();                           
                        userInput.val("");                                           
                        getDataFromApi(searchTerm, displayGitHubSearchData);          // This function call is the prime mover from here on out...
                   });                                                                
                }

                function setUpEventHandlers() {            
                    handleSubmit();                       
                }

                function initializeGitHubApp() {          
                    setUpEventHandlers();                     
                }
                
                $(initializeGitHubApp);      



        STEP 8.1: Getting data from the GitHub API
        ========================================
        -- We've built our code to simply take in a user name (i.e. searchTerm) and submit it. 
        -- Now we need initiate a call to the GitHub server so that we can retrieve the results of our searchTerm query.
        -- But remember the last line of code in our handleSubmit:
  
                            getDataFromApi(searchTerm, displayGitHubSearchData); 

        -- What this effectively does is:
                1. First, call the function getDataFromAPI... 
                2. As a first argument, pass in the searchTerm 
                    -- Because searchTerm is needed for the query part of the API request)
                3. As a second argument, run displayGitHubSearchData 
                    -- Because this funnels all the data from the API request for use into your app.

        -- So essentially what is happening is you are calling the getDataFromApi, passing in the search term for the query, and 
           funneling all that data into something productive for your code.

                                      
            AJAX request 
            =============
            -- In this example, we'll use AJAX because it gives you more control over configuration, but getJSON would work just as well.
            -- Remember that AJAX takes a single settings object as its argument and an asynchronous request for the desired data. 
            -- Also note that the GITHUB_SEARCH_URL variable and endpoing is outside the function here.
                -- this is in "screaming" case and its a symbol to future users that this variable (i.e, this url) will NEVER change.  
                  
            
            const GITHUB_SEARCH_URL = 'https://api.github.com/search/repositories';              // GitHub API endpoint for searching urls.
                
                function getDataFromApi(searchTerm, callback) {                                  // Get the data from GitHub API (using searchTerm).  
                    const settings = {                                                           // The settings object for the AJAX request contains...
                        url: GITHUB_SEARCH_URL,                                                  // ... the endpoint GITHUB_SEARCH_URL ...                        
                        data: {                                                                  // ... and query strings and parameters including:
                            q: `${searchTerm} in:name`,                                          // the searchTerm itself ...
                            page: 1,                                                             // ... with additional queries ...
                            per_page: 5                                                          // ... with additional queries.
                        },
                        dataType: 'json',                                                        // We want the response back to be in JSON format
                        type: 'GET',                                                             // request method.
                        success: callback                                                        // And if the response is successful, callback, which knows how 
                    };                                                                              to process data and update the DOM to display to the user.
                    $.ajax(settings);                                                            // Perfom the AJAX request for the data we want (settings).
                }

            -- if the callback is successful, you should see an endpoint and query string like the one below:


                      GITHUB_SEARCH_URL                    `${searchTerm} in:name`         data => per_page: 5
                _____________\_____________________________  _________|_________       ______|_____
                |                                         | |                   |      |          |
                https://api.github.com/search/repositories?q=k88hudson%20in:name&page=1&per_page=5
                                                          /                     |_____|
                                                 data => q                          |                                   
                                                                      data => page: 1


        STEP 8.2: Displaying data from GitHub API
        ==========================================  
        -- Now that we have the data from the GitHub API, we need a way to display the data in our app.

                Get data...                               ... and display it.
                         \                                    /
                    getDataFromApi(searchTerm, displayGitHubSearchData); 
                                       |
                            ... using the searchTerm ...

        -- The word "DATA" is important here because what we are essentially doing in FUNNELING all the data from getDataFromApi into
           the displayGitHubSearchData function.
                
            .................................................
                    
            getDataFromApi(searchTerm, displayGitHubSearchData); 
                    
            ..................................................

                    const GITHUB_SEARCH_URL = 'https://api.github.com/search/repositories';    

Get Data            function getDataFromApi(searchTerm, callback) {                                             
w/searchTerm>           const settings = {                                                           
                            url: GITHUB_SEARCH_URL,                                                                          
                            data: {                                                                 
                                q: `${searchTerm} in:name`,                                          
                                page: 1,                                                            
                                per_page: 5                                                          
                            },
                            dataType: 'json',
                            type: 'GET',                                                        
                            success: callback                                                        
                        };                                                                            
                        $.ajax(settings);                                                           
                    }

and display it>     function displayGitHubSearchData(data) {                       // First, we pass the contents of the data object (i.e. q, page, etc.)
                        const results = data.items.map(function(item) {            // ... then map each of the items in that data object...
                            return renderResult(item);                             // ... to a pre-made template.
                        }); 
                        $('.js-search-results').html(results);                     // For each iteration of the items in the data object, return the 
                    }                                                              // content of renderResult!
                   
        

        STEP 8.3: Render the display data
        =================================
        -- Now we can add in the template for our results using out template!
        -- Keep in mind that all along, we have been passing the data retrieved from the API.
                
                API => displayGitHubSearchData as "data"
                "data" => renderResult(item) as "item"
                "item" => renderResult(result) as "result"

        -- Just know that the data persists even if it has changed names a few times.
        -- Below, we are taking the final form "result" and then use dot-notation to get our desired data points.
            -- for example:
                    result.html_url       =  bloggingApp
                    result.name           =  k88hudson
                    result.owner.html_url = http://github.com/k88hudson/bloggingApp

            
        -- The template below is what we'll use to achieve the results of our orginal mockup:

                    function renderResult(result) {
                    return `
                        <div class="results">
                            <h2>
                                <a class="js-result-name" href="${result.html_url}" target="_blank">${result.name}</a> by 
                                <a class="js-user-name" href="${result.owner.html_url}" target="_blank">${result.owner.login}</a>
                            </h2>
                            <p>Description: <span class="js-description">${result.description}</span></p>
                            <p>Last updated: <span class="js-last-updated">${result.updated_at}</span></p>
                        </div>
                    `;
                    }
           
*/

const GITHUB_SEARCH_URL = 'https://api.github.com/search/repositories';

function getDataFromApi(searchTerm, callback) {  
    const settings = {
        url: GITHUB_SEARCH_URL,
        data: {
            q: `${searchTerm} in:name`,
            page: 1,
            per_page: 5
        },
        dataType: 'json',
        type: 'GET',
        success: callback,
    };
    $.ajax(settings);
}

function displayGitHubSearchData(data) {
    const results = data.items.map(function(item) {
        return renderResult(item);
    }); 
    $('.js-search-results').html(results);
}

function renderResult(result) {
  return `
    <div class="results">
        <h2>
            <a class="js-result-name" href="${result.html_url}" target="_blank">${result.name}</a> by 
            <a class="js-user-name" href="${result.owner.html_url}" target="_blank">${result.owner.login}</a>
        </h2>
        <p>Description: <span class="js-description">${result.description}</span></p>
        <p>Last updated: <span class="js-last-updated">${result.updated_at}</span></p>
    </div>
  `;
}

function handleSubmit() {
  $('main').submit(function(event) {
    event.preventDefault();
    const userInput = $(event.currentTarget).find('.js-input');
    const searchTerm = userInput.val();    
    userInput.val("");
    getDataFromApi(searchTerm, displayGitHubSearchData);
  });
}

function setUpEventHandlers() {
    handleSubmit();
}

function initializeGitApp() {
    setUpEventHandlers();
}

$(handleSubmit);



















































/*
www.jsonlint.com to validate json structure
UdCoJAAC-Be2Pr
*/
