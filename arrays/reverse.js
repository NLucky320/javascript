const numbers = [1, 2, 3, 4, 5, 6, 7];
// numbers.reverse();
// console.log(numbers);

// const reversed = numbers.reverse();
// console.log(reversed);


// const revNumbers = [];
// for (const num of numbers) {
//     console.log(num);
//    revNumbers.unshift(num);
//     console.log(revNumbers);
// }
const reversedNumbers = [];
for (let i = 0; i < numbers.length; i++){
    const num = numbers[i];
    reversedNumbers.unshift(num); 
}
console.log(reversedNumbers)
    
const reverseNumbers = [];
for (let i = numbers.length - 1; i >= 0; i--){
    const num = numbers[i];
    console.log(num);
    reverseNumbers.push(num);
    
}
console.log(reverseNumbers);