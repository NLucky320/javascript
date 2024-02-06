

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

let sumOdd = 0;
let i = 81;
while (i <= 131) {
    if (i % 2 == 1) {
        sumOdd = sumOdd + i;   
        
    }
   
    i++;
}
 console.log(sumOdd);

/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

let sumEven = 0;
let num = 206;
while (num <= 311) {
    if (num % 2 === 0){
        sumEven = sumEven + num;   
    }
    num++;
}
console.log(sumEven)