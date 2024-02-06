function multiplication(num1, num2) {

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return `please provide a number`
}
    const multiply = num1 * num2;
    return multiply;
}
const result = multiplication(5, 7);
console.log(result);
const result1 = multiplication(5, '7');
console.log(result1);
const result2 = multiplication(5, [7]);
console.log(result2);
const result3 = multiplication(5+7);
console.log(result3);
const result4 = multiplication(5, 'seven');
console.log(result4);
const result5 = multiplication(5);
console.log(result5);
const result6 = multiplication(5+1,2);
console.log(result6);

function fullName(first, second) {
    if (typeof first !== 'string' || typeof second !== 'string') {
        return `please provide a string`
    }
    const full = first + ' ' + second;
    return full;
}
const full = fullName('n', 'l');
console.log(full);
const full1= fullName('n', 3);
console.log(full1);


function getPrice(product) {
    if (typeof product !== 'object') {
        return `please provide an object`
    }
    const price = product.price;
    return price;
}
// const price = getPrice({ name: 'n', price: 35, color: 'blue' })
const price = getPrice(5);
console.log(price);
    
function getSecond(numbers) {
    console.log(typeof numbers);
    const second = numbers[1];
    return second;
}
const second = getSecond([34, 25, 56, 45, 76]);
console.log(second);


function getSecond(numbers) {
    if (Array.isArray(numbers) === false) {
        return `please provide an array`
    }
   
    const third = numbers[1];
    return third;
}
const third = getSecond(0);
console.log(third);
