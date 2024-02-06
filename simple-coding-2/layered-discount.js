/* 
first 100--->100
101-200---->90
above 200--->80
*/

function layeredDiscountProduct(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 80;

    if (quantity <= 100) {
        const total = quantity * first100Price;
        return total;
    }
    else if (quantity <= 200) {
        const first100Total = 100 * first100Price;
        const remainingTotal = quantity - 100;
        const remainingTotalPrice = remainingTotal * second100Price;
        const total = first100Total+ remainingTotalPrice;
        return total;
    }
    else {
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingTotal = quantity - 200;
        const remainingTotalPrice = remainingTotal * above200Price;
        const total = first100Total + second100Total + remainingTotalPrice;
        return total
    }
}
const totalPrice = layeredDiscountProduct(250);
console.log(totalPrice);