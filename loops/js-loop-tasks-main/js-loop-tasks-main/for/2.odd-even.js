/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

for (let i = 61; i <= 100; i++){
    if (i % 2=== 1) {
        console.log(i)
    }   
}
// sum
let sumOdd = 0;
for (let i = 61; i <= 100; i++){
    if (i % 2=== 1) {
        // console.log(i)
        sumOdd = sumOdd + i;
    }   
}
 console.log(sumOdd)


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

for (let i = 78; i <= 98; i++){
    if (i % 2 === 0) {
    console.log(i)
    }
}
// sum
let sumEven = 0;
for (let i = 78; i <= 98; i++){
    if (i % 2 === 0) {
        sumEven = sumEven + i;
    }
}
console.log(sumEven)