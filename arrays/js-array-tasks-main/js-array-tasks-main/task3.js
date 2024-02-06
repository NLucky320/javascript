// ### 3. Checking Array Membership with ‘includes’

// **Instructions:**

// 1. Create an array of books containing different book.
const book=['bangla', 'english', 'math']
console.log(book);
// 2. Use the includes method to check if the array contains a javascript book.
console.log(book.includes('javascript'));

// 3. Print a message to the console indicating whether the element is present in the array or not.
if (book.includes('javascript')) {
    console.log('its in there')
} else {
    console.log('sorry, its not in there')
}