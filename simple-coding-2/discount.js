/*
below 100:--->100 
101-200---->90
>200---->80
 */

function totalDiscountPrice(quantity) {
    if (quantity <= 100) {
        const total = quantity * 100;
        return total;
    }
    else if (quantity <= 200) {
        const total = quantity * 90;
        return total;
    }
    else {
        const total = quantity * 80;
        return total;
    }
}
const totalPrice = totalDiscountPrice(300);
console.log(totalPrice);