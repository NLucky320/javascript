// odd-average

function oddAverage(numbers) {
    const odds = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            // console.log(number);
            odds.push(number) 
        }       
    }
    // console.log(odds)
    let sum = 0;
        for (const number of odds) {
            sum = sum + number;
        } 
    // console.log(sum, odds.length)
    const avg = sum / odds.length;
    return avg;
}
const numbers = [10, 13, 24, 42, 15, 17, 80, 86, 57, 3, 7, 9, 23, 34, 55]
const avg = oddAverage(numbers);
console.log('average of odd numbers', avg.toFixed(2))
console.log('average of odd numbers', Number(avg.toFixed(2)))