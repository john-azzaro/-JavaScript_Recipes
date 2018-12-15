// structure example

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

variablesReplaceFlipPrint("this is a tester first");
replaceFlipPrint("this is a tester second");
