// leap year count
// simple logic
function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLeapYear(2024))
console.log(isLeapYear(2043))
console.log(isLeapYear(2100))



function isLeapYear2(year) {
    if (year % 100 !== 0 && year % 4 ===0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLeapYear2(2024))
console.log(isLeapYear2(2000))
console.log(isLeapYear2(2043))
console.log(isLeapYear2(2100))



function isLeapYear3(year) {
    if (year % 100 !== 0 && year % 4 ===0) {
        return true;
    }
    if (year % 400 ===0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLeapYear3(2024))
console.log(isLeapYear3(2000))
console.log(isLeapYear3(2043))
console.log(isLeapYear3(2100))