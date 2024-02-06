// ### Task 1

// Write a JavaScript code to reverse the array colors `without using the reverse method`.

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const reverseColors = [];
for (const color of colors) {
    console.log(color);
    reverseColors.unshift(color);
}
console.log(reverseColors)