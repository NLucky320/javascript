const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// break
// for (let num of number) {
//     console.log(num);
//     if (num === 5) {
//         break;
//     }
// }

// for (let num of number) {
    
//     if (num === 5) {
//         break;
//     }
//     console.log(num);
// }



// continue
// for (let num of number) {
//     if (num === 5) {
//         continue;
//     }
//     console.log(num)
// }


for (let num of number) {
    
    if (num > 5) {
        continue;
    }
    console.log(num)
}

for (let num of number) {
    
    if (num >= 5) {
        continue;
    }
    console.log(num)
}
for (let num of number) {
    
    if (num % 3===0) {
        continue;
    }
    console.log(num)
}