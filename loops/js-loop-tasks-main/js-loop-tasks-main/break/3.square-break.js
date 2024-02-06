/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
for (let i = 1; i <= 100; i++){
    console.log(i);
    if (i ==  i*i) {
        break;
    }
}
// for (let i = 1; i <= 100; i++) {
//     let square = i * i;

//     console.log(i);

//     if (square <= 100) {
//         console.log("Encountered the first square number:", square);
//         break;
//     }
// }