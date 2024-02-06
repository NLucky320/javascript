// const a = 45;
// const b = 78;
// const c = 67;
// if (a > b && a > c) {
//     console.log(`a is greater`)
// }
// else if (b > a && b > c) {
//     console.log(`b is greater`)
// }
// else{
//     console.log(`c is greater`)
// }
const a = 45;
const b = 78;
const c = 89;
if (a > b && a > c) {
    console.log(`a is greater`)
}
else if (b > a && b > c) {
    console.log(`b is greater`)
}
else{
    console.log(`c is greater`)
}

// USING FUNCTION
function maxOfThree(a, b, c) {
    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c) {
        return b;
    }
    else {
        return c;
    }
}
const getMax = maxOfThree(15, 67, 54)
console.log(getMax)

const max = Math.max(12, 34, 56, 79, 234)
console.log(max)