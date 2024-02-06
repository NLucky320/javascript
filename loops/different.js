

for (let num = 0; num < 20; num++){
    if (num % 2 === 1) {
        console.log(num);
    } 
}

for (let num = 0; num < 20; num++){
    if (num % 2 === 0) {
        console.log(num);
    } 
}


for (let i = 1; i <= 30; i++){
    if (i % 5 === 0) {
        console.log(i);
    }
}
for (let i = 1; i <= 30; i++){
    if (i % 3 === 0) {
        console.log(i);
    }
}

let num = 0;
while (num < 20) {
    if (num % 2 === 0) {
        console.log(num);
    }
     num++;
}

for (let i = 1; i <= 30; i++){
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
    }
}
for (let i = 1; i <= 30; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}
// sum of numbers
let sum = 0;
for (let i = 1; i <= 30; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
        sum = sum + i;
        console.log("total",sum);
    }
}