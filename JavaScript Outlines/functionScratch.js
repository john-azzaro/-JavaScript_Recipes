"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Function Scratch 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. 
//
// NOTES ///////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful function scratch pad of interesting functional programming techniques taken from study, research,  
//        tutorials, mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the 
//        document in Question and Answer format for improved readability.
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


var thisIsAName = 'John';


console.log(thisIsAName);



let thisIsTheLastName = 'Azzaro';
console.log(thisIsTheLastName);


const fullName = thisIsAName + ' ' + thisIsTheLastName;
console.log(fullName);





let guessMyName = function(name) {
    let input = name.toLowerCase();
    console.log(input)
    if (input === 'john' || 'matt' || 'bill') {
        console.log("you guessed correctly");
    } else {
        console.log('guess again')
    }
}

console.log(guessMyName('matt'));



// function countLetters(sentence, character) {
//     let count = 0;
//     for (let i=0; i <= sentence.length; i++) {
//         if (sentence[i] === character) {
//             count++
//         }
//     }
//     return count;
// }

// console.log(countLetters('aaab', 'a'));



// function rightToVote(num) {
//     let age = num;
//     let canIVote = (age >= 18) ? true : false;  
//     if (canIVote === true) {
//         console.log(`Yes you can vite because you are ${age}`);
//     } else {
//         console.log(`No, you cannot vote because you are only ${age}`)
//     }
   
// }

// console.log(rightToVote(18)) 



function theGrade(num) {              
    let input = num;                  
    let storedGrade = "F";            
    if (input >= 90) {
        storedGrade = "A"
    } else {
        storedGrade = "Below A"
    }
    console.log(`you scored ${input} which ranks ${storedGrade}`);
    return storedGrade;
    
}

function gradeQuote(num) {
    if (num === "A") {
        console.log("You got an A (score greater than 90)!")
    } else {
        console.log("you got below an A, which is still great!")
    } 
}



gradeQuote(theGrade(90))
// gradeQuote(theGrade(85))





function doesItInclude(str) {
    let ingredient = str.toLowerCase();
    let replacement = "love and care"
        switch (ingredient) {
        case "chocolate":
            console.log(`warning: this recipe contains chocolate, please replace with ${replacement}`);
            break;
        case "vanilla":
            console.log(`warning: this recipe contains vanilla, please replace with ${replacement}`);
            break;
        default:
            console.log(`good news: this recipes is safe to eat`)
    } 
    return `this is amazing`;
}

console.log(doesItInclude("CHOColate"));
console.log(doesItInclude("watermelon"));


//// regular expression /////////////////////////////
str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");
console.log(n);




function doesItInclude2(str) {
    let ingredient = str.toLowerCase();
    if (ingredient === "strawberries") {
        console.log(`warning: this recipe contains chocolate`);
    } else if (ingredient === "blueberries") {
        console.log(`warning: this recipe contains blueberries`);
    } else {
        console.log(`great news: this recipes is delicious!`);
    }
}

console.log(doesItInclude2("blueberries"));




let STORE = ['chocolate', 'vanilla', 'sugar'];

function recipeFinder(input) {
    const recipe = STORE;
    if (recipe === 'vanilla') {
        console.log("Caution: This recipe contains vanilla");
    } else {
        console.log("Good news! This recipe is safe to eat");
    }
}

console.log(recipeFinder("vanilla"));










function theGrade(num) {              
    let input = num;                  
    let storedGrade = "F";            
    if (input >= 90) {
        storedGrade = "A"
    } else {
        storedGrade = "Below A"
    }
    console.log(`you scored ${input} which ranks ${storedGrade}`);
    return storedGrade;
    
}

function gradeQuote(num) {
    if (num === "A") {
        console.log("You got an A (score greater than 90)!")
    } else {
        console.log("you got below an A, which is still great!")
    } 
}


gradeQuote(theGrade(90));



// gradeQuote(theGrade(90))
// gradeQuote(theGrade(85))





function increment(x) {
    return sum(x, 1);
  }
  
  function sum(x,y) {
    return x + y;
  }
  
  console.log(increment(4))



  // NESTED functions example

  function addMore(num1) {
    return function add(num2, num3) {
      return function makeItNice(greeting) {
        return `${greeting} is: ${num1 + num2 + num3}`;
      }
    };
  }
  
  console.log(addMore(1)(2,3)("the sum of addMore"));

  function fizzBuzz(countTo) {
    const result = [];
    for (let i = 0; i < countTo; i++) {
      if (i % 15 === 0) {
        result.push('fizzbuzz');
      } else if (i % 5 === 0) {
        result.push('fizz');
      } else if (i % 3 === 0) {
        result.push('bizz')
      } else {
        result.push(i);
      }
    }
    return result.join(', ');
  }
  
  console.log(fizzBuzz(15));