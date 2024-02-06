const disha = 55;
const salman = 56;
if (disha > salman) {
    console.log(`disha will get the cake`)
}
else {
    console.log(`salman will get the cake`)
}

// inside a function

function getMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}
const max1 = getMax(35, 78);
console.log(max1)
const max2 = getMax(98, 68);
console.log(max2)
const ultimateMaX = getMax(max1, max2)
console.log(ultimateMaX)