// continue - skip rest of the code for this iteration
// break-loop end

for (let i = 1; i < 10; i++){
    if (i % 2 === 1) {
        continue;
    }
    console.log(i);
}

let num = 0;
while (num < 50) {
        num++;
    if (num % 5 !== 0) {
        continue;
    }
    console.log(num);

}
