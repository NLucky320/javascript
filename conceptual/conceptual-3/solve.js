// largest number

function getLargest(values) {

    if (!Array.isArray(values)){
        return `please provide an array`
    }
    let max = values[0];
    for (let i = 1; i < values.length; i++) {
        if (typeof values[i] !== 'number') {
            return `all values should be number`
        }
       if (values[i] > max) {
           max= values[i];
       }     
    }
     return max;
}

const numbers = [45, 65, 78, 98, 10];
console.log(getLargest(numbers));
const number = [45, 65, 78, 'lu', 10];
console.log(getLargest(number));
const numbe = [45, 65, 78, NaN, 10];
console.log(getLargest(numbe));
const numb = 89;;
console.log(getLargest(numb))