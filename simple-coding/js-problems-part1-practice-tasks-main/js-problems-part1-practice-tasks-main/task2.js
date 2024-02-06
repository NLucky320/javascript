// You are given an array of numbers. Count how many times the a number is repeated in the array.

function duplicate(array, value) {
    let count = 0;
    for (let i = 0; i < array.length;i++) {
        if (array[i] == value) {
            count++;
           }
    }
    return count;
}
console.log(duplicate([5,6,11,12,98,5],5));
console.log(duplicate([5,6,11,12,98,5],25));