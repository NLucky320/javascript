// for (let i = 0; i <= 10; i++){
//     console.log('lucky');
//     console.log('lucky', i);   
// }

const num = [10, 20, 30, 40, 50, 5, 7, 9, 2, 3, 4];
// console.log(num[2])
// console.log(num.length);
// for (let i = 0; i < num.length; i++){
//     console.log(num[i]);
// }
// let sumOfOdd = 0;
// let sumOfEven = 0;

// for (let i = 0; i < num.length; i++){
//     const x = num[i];
//     if (x % 2 === 0) {
//         sumOfEven += x;
//     }
//     else {
//         sumOfOdd += x;
//     }
// }
// console.log(sumOfEven)
// console.log(sumOfOdd)
const nums = [10, 20, 30, 40, 50, 5, 7, 9, 2, 3, 4];

for (let num of nums) {
    console.log(num)
}