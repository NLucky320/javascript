function addition(num1, num2) {
    const add = num1 + num2;
    return add;
}
function subtraction(num1, num2) {
    const sub = num1 - num2;
    return sub;
}
function multiplication(num1, num2) {
    const multiply = num1 * num2;
    return multiply;
}
function division(num1, num2) {
    const div = num1 / num2;
    return div; 
}

function calculator(a, b, operation) {
    if (operation === 'add') {
        const result = addition(a, b);
        return result;
    }
    else if (operation === 'subtract') {
        const result = subtraction(a, b);
        return result;
    }
    else if (operation === 'multiply') {
        const result = multiplication(a, b);
        return result;
    }
    else if (operation === 'divide') {
        const result = division(a, b);
        return result;
    }
    else {
        return `only 'add','subtract', 'multiply', 'divide' is allowed`
    
    }
}
const result = calculator(5, 4, 'subtract');
console.log(result)