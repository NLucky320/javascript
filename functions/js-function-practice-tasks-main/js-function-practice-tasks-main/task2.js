// ### Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function getOddEven(number) {
    if (number % 2 == 1) {
        result = number * 2;
        return result;
    } else {
          result = number / 2;
        return result;
    }
}
const num = getOddEven(4);
console.log(num);
console.log(getOddEven(9))