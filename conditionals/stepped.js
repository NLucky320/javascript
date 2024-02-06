const age = 47;
const price = 500;
if (age <= 12) {
    console.log('you can eat for free')
}
else if (age >= 60) {
    const discount = price * 50 / 100;
    const payment = price - discount;
    console.log(payment)
}
else {
    console.log(price)
}

if (age <= 20) {
    console.log('you can eat for free')
}
else if (age >= 60) {
    const discount = price * 50 / 100;
    const payment = price - discount;
    console.log(payment)
}
else if (age >= 50) {
    const discount = price * 20 / 100;
    const payment = price - discount;
    console.log(payment)
}
else if (age >= 40) {
    const discount = price * 10 / 100;
    const payment = price - discount;
    console.log(payment)
}
else {
    console.log(price)
}