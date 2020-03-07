"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//   
//   "Very Easy" JavaScript Problems.
//   
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     
//     1. Very Easy Problems.
//
// NOTES /////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Problem solving questions and answers from edabit under "very easy". The goal is to go through every 
//        one of edabit's problems and save some of the more interesting ones on documents like this for future
//        reference.      
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
Is the Last Character an N?
Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.
/////////////////////////////////////////////
*/
function isLastCharacterN(word) {
	let lastLetter = word.endsWith('n');
	if (lastLetter) {
		return true;
	} else {
		return false;
	}
}



/*
Check String for Spaces
Create a function that returns true if a string contains any spaces.
////////////////////////////////////////////////////////////////////
*/
function hasSpaces(str) {
	if (str.includes(" ")) {
		return true;
	} else {
		return false;
	}
}



/*
Multiply Every Array Item by Two
Create a function that takes an array with numbers and return an array with the elements multiplied by two.
////////////////////////////////////////////////////////////////////
*/
function getMultipliedArr(arr) {
	let multi = arr.map(function(num) {
		return num * 2;
	});
	return multi;
}



/*
Extract City Facts
Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:
name, population, continent
The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).
////////////////////////////////////////////////////////////////////
*/
function cityFacts(city) {
	let getCity = city.name;
	let getPopulation = city.population;
	let getContinent = city.continent;
	return `${getCity} has a population of ${getPopulation} and is situated in ${getContinent}`;
}



/*
Add a Consecutive List of Numbers
Write a function that takes the last number of a consecutive list of numbers and returns the total of all numbers up to and including it.
////////////////////////////////////////////////////////////////////
*/
function addUpTo(n) {
	return n * (n + 1) / 2;
}



/*
Shapes With N Sides
Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.
Note: I initially did a large if/else array but this seems a lot better.
////////////////////////////////////////////////////////////////////
*/
function nSidedShape(n) {
	let shapes = {
		1:	"circle",
		2:	"semi-circle",
		3:	"triangle",
		4:	"square",
		5:	"pentagon",
		6:	"hexagon",
		7:	"heptagon",
		8:	"octagon",
		9:	"nonagon",
		10:	"decagon",
	}
	return shapes[n];
}



/*
Return the Total Number of Parameters
Create a function that returns the total number of parameters passed in.
Note: How can you express the input parameter so it takes a variable number of arguments?
Note: Used the spread
////////////////////////////////////////////////////////////////////
*/
function numberArgs(...args) {
	return arguments.length;
}



/* 
ES6: Destructuring Arrays III
You can assign variables from arrays with destructuring like this:
const arr = ["eyes", "nose", "lips", "ears"]
let [eyes, nose, lips, ears] = arr
*/




/* 
Stack the Boxes
Here's an image of four models. Some of the cubes are hidden behind other cubes. Model one consists of one cube. Model two consists of four cubes, and so on...
Write a function that takes a number n and returns the number of stacked boxes in a model n levels high, visible and invisible.
*/
function stackBoxes(n) {
	return Math.pow(n, 2);
}


/* 
Array of Word Lengths
Create a function that takes an array of words and transforms it into an array of each word's length.
*/
function wordLengths(arr) {
	return arr.map(function(word) {
		return word.length;
	});
}