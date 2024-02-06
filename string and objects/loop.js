const mobile = {
    brand: 'samsung',
    color: 'black',
    price: 82000,
    camera:'48mp',
}
for (const prop in mobile) {
    console.log(prop)
    console.groupCollapsed(mobile[prop])
}
const keys = Object.keys(mobile);
console.log(keys);
for (const key of keys) {
    console.log(key)
    console.log(key, mobile[key])
}

// for of : Array
// for in: Object