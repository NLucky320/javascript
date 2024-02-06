/* const array = ['apple', 'mango', 'banana', 'guava', 'orange']
for (let i = 0; i < 5; i++){
    console.log(array[i])
} */
// reverse
/* const array = ['apple', 'mango', 'banana', 'guava', 'orange']
for (let i = array.length-1; i >=0; i--){
    console.log(array[i])
} */


// sum of array
/* const nums = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    const currentNumbers = nums[i];
    sum = sum + currentNumbers;
}
    console.log(sum);
 */

/*     const nums = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    const currentNumbers = nums[i];
    sum = sum + currentNumbers;
        console.log(sum);

}
 */

// swap array Element
/* const nums = [10, 20, 30, 40, 50];
let temp = nums[3];

nums[3] = nums[1];
nums[1] = temp;
console.log(nums); */

// find array Element
/* 
const array = ['apple', 'mango', 'banana', 'guava', 'orange']
const target = 'guava';
let foundIndex = -1;
for (let i = 0; i < array.length; i++){
    const currentFruit = array[i];
    if (currentFruit == target) {
        foundIndex = i;

    }
}
if (foundIndex > -1) {
    console.log(foundIndex, 'founded')
} else {
    console.log('not found')
} */

// find max/min number

/* const nums = [5, 76, 34, 2, 98, 7]
let maxNum = nums[0];
let minNum = nums[0];
for (let i = 0; i < nums.length; i++){
    const currentNumber = nums[i];

    if (maxNum < currentNumber) {
        maxNum = currentNumber;
    }
    if (minNum > currentNumber) {
        minNum = currentNumber;
    }
}
console.log(maxNum, minNum) */

// filter an array
const purchaseHistory = [100, 3000.500, 560, 200, 450]
const filterPurchaseHistory = [];


