//  EX.one
function sumNumbers(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}


console.log(sumNumbers([1, 2, 3, 4])); //  10

// EX.two
function findLargest(arr) {
    return Math.max(...arr);
}


console.log(findLargest([1, 2, 3, 4])); //  4

//EX.three
function reverseString(str) {
    return str.split('').reverse().join('');
}


console.log(reverseString("hello")); //  "olleh"

//EX.four
function removeDuplicates(arr) {
    return [...new Set(arr)];
}


console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); //  [1, 2, 3, 4]


