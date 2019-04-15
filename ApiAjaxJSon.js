"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     API's, AJAX, JSON with jQuery
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is an API?
//
// NOTES ///////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on creating apps with jquery, including API's, AJAX, and jQuery taken from 
//        study, research, tutorials, mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the
//         document in Question and Answer format for improved readability.
//        
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
1. How is the difference between static and 
*/

/*
What is an API?
///////////////
    -- API stands for Application Programming Interface.    
    -- An API is a specification allowing two systems to communicate.
        -- More simply put, an API allows two strangers to speak to each other so that we can share data and work with each other.
        -- for example, the jQuery library provides an API for DOM traversal and manipulation, like .find, $(), etc.
    -- An API is a messenger that takes a request and tells the system what to do. 
    -- An API is a contract between two things and how they interact with each other.
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
What is AJAX?
/////////////
    -- AJAX stands for Asynchronous JavaScript and XML.
    -- AJAX refers to making one or more calls to a server AFTER a page has initially loaded.
        -- for example, infinite scroll where new content appears as you scroll down.
        -- when the user scolls, the application makes new calls to the server to retrieve additional data. 

*/










/*
UdThComWeDevin2019Ze2MasApis
*/