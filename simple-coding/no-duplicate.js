const names = ['abul', 'babul', 'kabul', 'habul', 'gabul', 'cabul', 'abul', 'babul', 'kabul'];

const numbers = [10, 5, 6, 7, 2, 3, 5, 7, 6, 8, 2, 1, 3, 4, 3, 4, 8];

function noDuplicate(array) {
    const unique = [];
    for (const name of array) {
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}
const uniqueArray = noDuplicate(numbers);
console.log(uniqueArray);
const uniqueNames = noDuplicate(names);
console.log(uniqueNames);