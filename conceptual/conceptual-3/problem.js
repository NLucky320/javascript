// check if  the number is even or odd

const x = 5;
if (x % 2 === 0) {
    console.log('even')
}
else {
       console.log('odd')
}

// using function
function checkEvenOdd(i) {
    if (i % 2 === 0) {
        return 'even';
}
else {
        return 'odd';
}
}
const num = checkEvenOdd(6);
console.log(num)


function printName(x) {
    for (let i = 1; i <= x; i++){
        console.log('lucky', i)
    }
    
}
const y = printName(10);