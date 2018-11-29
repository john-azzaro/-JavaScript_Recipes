function reverse1(string) {
    const array =  string.split('');
    array.reverse();
    return array.join('')
}

function reverse2(string) {
    return string.split('').reverse().join('');
}

// for (let{variable of declaration} character{temporary variable that is redeclared EVERY time through the loop} of string{iterable object we want to iterate through})
// so we'll iterate through every character of string one by one and set each character equal to thie temporary variable "character".
// we then take that character and add it on to the start of the string reversed 
// then after the entire for loop, we reutrn reversed
function reverse3(string) {
    let newString = '';
    for (let i = string.length - 1; i >= 0; i-- ) {
        newString += string[i];
    }
    return newString;
}

function reverse4(string) {
    let reversed = '';                   // string that will be assembled over time
    for (let character of string) {      
        reversed = character + reversed;
    }
    return reversed;
}

function reverse5(string) {
    return [...string].reverse().join('');
}


console.log(reverse1("hello"));
console.log(reverse2("hello"));
console.log(reverse3("hello"));
console.log(reverse4("hello"));
console.log(reverse5("hello"));


