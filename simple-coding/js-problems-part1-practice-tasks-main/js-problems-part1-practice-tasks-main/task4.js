// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer
function findLongestWord(str) {
    let strSplit = str.split(' ')
    let longestWord = 0;
    for (let i = 0; i < strSplit.length; i++){
        if (strSplit[i].length > longestWord) {
            longestWord = strSplit[i].length; 
            word = strSplit[i];
        }
    }
    return word;
}
console.log(findLongestWord('I am learning Programming to become a programmer'))