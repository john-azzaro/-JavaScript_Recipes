"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: .padStart()
//                   .padEnd()
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     string.padStart(length-to-pad, padString)
//     string.padEnd(length-to-pad, padString)
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • .padStart will pad the current string with a another string as many times as needed until the string
//         reaches a given length
//      • When you use .padStart(), you specify the string you want to pad, add the ".padStart" method, and then
//        first specify how many spaces you want to pad and then second what you what string you want to pad with.
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: Pad a given number:
//      EXAMPLE 2: Hide all but the last 4 digits of a credit card number.
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EXAMPLE 1: Pad a given number:

const myNum = "5";

function padNum(input) {
  const padIt = input.padStart(9, "*");
  console.log(padIt);
}

padNum(myNum);

// EXAMPLE 2: Hide all but the last 4 digits of a credit card number:

const fullNumber = "2034399002125581";

function creditCardNumberHider(num) {
  const last4Digits = num.slice(-4); // slice last 4 digits from fullNumber
  const maskedNumber = last4Digits.padStart(num.length, "*"); // replace the rest of full number with asterisks
  console.log(maskedNumber);
}

console.log(fullNumber); // 2034399002125581
creditCardNumberHider(fullNumber); // ************5581
