// const person = ['elon', 'bill', 'mark', 'bezos'];
// const sortedPerson = person.sort();
// console.log(sortedPerson)

const person = ['elon', 'bill', 'mark', 'bezos', 'Zosef'];
const sortedPerson = person.sort();
console.log(sortedPerson)
// const numbers = [2, 1, 3, 5, 4, 7, 8, 6];
// const ascendingNumbers = numbers.sort();
// console.log(ascendingNumbers)

const numbers = [2, 12, 3, 5, 48, 7, 8, 6];
// const ascendingNumbers = numbers.sort(); not working
const ascendingNumbers = [...numbers].sort(function(a,b){return a-b})
const descendingNumbers =[...numbers].sort(function(a,b){return b-a})
console.log(ascendingNumbers)
console.log(descendingNumbers)