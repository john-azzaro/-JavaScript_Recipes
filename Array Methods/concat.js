let myFirstArray = ["a","b","c","d","e","f","g","h","i","j",];
let mySecondArray = [1,2,3,4,5,6,7,8,9,10];

function joinArrays(array1, array2) {
    return array1.concat(array2);
    
}

console.log(joinArrays(myFirstArray, mySecondArray));