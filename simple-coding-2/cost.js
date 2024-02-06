/* const products = [
    {name: 'alu', price: 200, quantity:2},
    {name: 'blu', price: 300, quantity:4},
    {name: 'dlu', price: 250, quantity:7},
    {name: 'clu', price: 100, quantity:5},
    
]


function getShoppingTotal(products) {
    // console.log(products)
    let sum = 0;
    for (const product of products) {
        sum = sum + product.price;
    }
    return sum;
}
const totalPrice = getShoppingTotal(products);
console.log(totalPrice); */


// cart
const products = [
    {name: 'alu', price: 200, quantity:2},
    {name: 'blu', price: 300, quantity:4},
    {name: 'dlu', price: 250, quantity:1},
    {name: 'clu', price: 100, quantity:5},
    
]


function cartTotal(products) {
    // console.log(products)
    let sum = 0;
    for (const product of products) {
        sum = sum + product.price * product.quantity;
    }
    return sum; 
}
const totalPrice = cartTotal(products);
console.log(totalPrice);