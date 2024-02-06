const heights = [56, 67, 79, 78, 45, 76];
function getMax(numbers) {
    // console.log(numbers);
       let max = numbers[0];
    for (const num of numbers) {
       if (num > max) {
            max = num;
        }
    }
    return max;
  
}
const max1 = getMax(heights);
console.log(max1)

// min

function getMin(numbers) {
    let min = numbers[0];

    for (const numb of numbers) {
        if (numb < min) {
            min = numb;
        }
    }
    return min;
}
const min1 = getMin(heights);
console.log(min1)