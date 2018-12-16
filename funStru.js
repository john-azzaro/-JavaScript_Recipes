// Short function examples


// Example that demonstrates the interconnectivity of a function

function addSubtract(number, numberToAdd, numberToSubtract) {
    let start = number;
        console.log(`first, we start with the number ${start}`);
    let add = start + numberToAdd;
        console.log(`second, when we add ${start} to ${numberToAdd} we get ${add}`);
    let subtract = add - numberToSubtract;
    console.log(`and last, when we subtract ${numberToSubtract} from ${add}, we get ${subtract}`);
}

console.log(addSubtract(6,4,2))






// Objective: Take a string, replace a word in that string, reverse that string using seperated functions

function flip(string) {
    return string.split('').reverse().join('');
}

function print(string) {
    console.log(string);
}

function replace(string) {
     return string.replace("this","that");
 }

function replaceFlipPrint(string) {
    print(flip(replace(string)));
}

function variablesReplaceFlipPrint(string) {
    let replaced = replace(string);
    let flipped = flip(replaced);
    print(flipped); 
}

variablesReplaceFlipPrint("this is a tester string first");
replaceFlipPrint("this is a tester string second");




// Objective: Take a string, replace a word in that string, reverse that string using a single condensed function.

function replaceFlipPrint(string) {
    let replace = string.replace("this","that");
    let flip = replace.split('').reverse().join('');
    console.log(flip);
}

console.log(replaceFlipPrint("this is a tester"));




// Objective: Take a string, replace a word in that string, reverse that string using a single SIMPLIFIED condensed function.

function replaceFlipPrint2(string) {
    console.log(string.replace("this","that").split('').reverse().join(''));
}

console.log(replaceFlipPrint2("This is a tester 2"))


