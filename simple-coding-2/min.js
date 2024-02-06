const prices = [20000, 40000, 100000, 80000, 12000, 45000, 90000];


function getMin(numbers) {
    let min = numbers[0];
    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}
const cheapest = getMin(prices);
console.log(cheapest);