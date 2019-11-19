"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: .padEnd()
//
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     string.padEnd(length-to-pad, padString)
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • .padEnd will pad the current string AT THE END with another string as many times as needed until
//         the string reaches a given length
//      • When you use .padEnd(), you specify the string you want to pad, add the ".padEnd" method, and then
//        first specify how many spaces you want to pad and then second what you what string you want to pad with.
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: Pad a given number at the end:
//      EXAMPLE 2: Hide all but the first 4 digits of a credit card number.
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EXAMPLE 1: Pad a given number at the end:

const myNum = "5";

function padNum(input) {
  const padIt = input.padEnd(9, "*");
  console.log(padIt);
}

padNum(myNum);

// EXAMPLE 2: Hide all but the first 4 digits of a credit card number:

const fullNumber = "2034399002125581";

function creditCardNumberHider(num) {
  const last4Digits = num.slice(-4); // slice last 4 digits from fullNumber
  const maskedNumber = last4Digits.padEnd(num.length, "*"); // replace the rest of full number with asterisks
  console.log(maskedNumber);
}

console.log(fullNumber); // 2034399002125581
creditCardNumberHider(fullNumber); // ************5581
