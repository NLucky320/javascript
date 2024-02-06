// Generate a random number between 10 to 20.
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(randomNumber(10,20))