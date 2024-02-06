// ### 4. Checking if it's an Array

// **Instructions:**

// 1. Create different variables, each containing either an array or a non-array value.
const fruits = ['apple', 'grapes', 'guava', 'strawberry', 'avocado'];
const friends = 'kalam';
const number = 7;
const num=[6,8,9]

// 2. Now use isArray to check if each variable is an array.
console.log(Array.isArray(fruits));
console.log(Array.isArray(friends));
console.log(Array.isArray(number));
console.log(Array.isArray(num));

// 3. Print a message to the console indicating whether each variable is an array or not.
if (Array.isArray(fruits)) {
    console.log('its an array')
} else {
    console.log('its not an array')
}
if (Array.isArray(friends)) {
    console.log('its an array')
} else {
    console.log('its not an array')
}
if (Array.isArray(number)) {
    console.log('its an array')
} else {
    console.log('its not an array')
}
if (Array.isArray(num)) {
    console.log('its an array')
} else {
    console.log('its not an array')
}