// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.


function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity ) {
    let laptopPrice = 35000 * laptopQuantity;
    let tabletPrice = 15000 * tabletQuantity;
    let mobilePrice = 20000 * mobileQuantity;
    const total = laptopPrice + tabletPrice + mobilePrice;
    return total;
}
console.log(calculateElectronicsBudget(1,1,0))