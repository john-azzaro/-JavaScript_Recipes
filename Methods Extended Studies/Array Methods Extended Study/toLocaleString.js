'use strict';
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: .toLocaleString()
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     dateObj.toLocaleString(locales, options)
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • .toLocaleString() is an inbuilt function in JavaScript which is used to convert a date and time
//        to a string.
//      • .toLocaleString() needs the "dateObj" to be a valie Date object, such as:
//              let event = new Date(Date.UTC(2019, 11, 20, 3, 0, 0));
//      • For the OPTIONAL "locales" parameter, you use specific language or locale formats (i.e. 'en-US').  
//      • For UTC, follow this format: Date.UTC(year[, month[, day[, hour[, minute[, second[, millisecond]]]]]])
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1:
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
//     https://www.geeksforgeeks.org/javascript-date-tolocalestring/
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var date1 = new Date(Date());
var date2 = new Date(Date());
var date3 = new Date(Date.UTC(2014, 11, 25, 8, 20, 3));


console.log(date1.toLocaleDateString());                    // 2019-11-8    -- returns current date
console.log(date2.toLocaleDateString('en-US'));             // 11/8/2019    -- returns current date in US format
console.log(date3.toLocaleDateString());                    // 11/8/2019    -- returns a date (but is off in the month for some reason)

