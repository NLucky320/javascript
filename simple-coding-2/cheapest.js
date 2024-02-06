const phones = [  
{name:'samsung', price:20000, camera:'12mp', color:'black'},
{name:'oppo', price:40000, camera:'12mp', color:'black'},
{name:'iphone', price:100000, camera:'12mp', color:'black'},
{name:'walton', price:12000, camera:'12mp', color:'black'},
{name:'xiomi', price:80000, camera:'12mp', color:'black'},
]

function getCheapestPhone(phones) {
    let min = phones[0];
    for (const phone of phones) {
        if (phone.price < min.price) {
            min = phone;
    }
}
    return min;
}
const cheap = getCheapestPhone(phones);
console.log(cheap)

function getHighestPrice(phones) {
    let max = phones[0];
    for (const phone of phones) {
        if (phone.price > max.price) {
            max = phone;
        }
    }
    return max;
}
const pricy = getHighestPrice(phones);
console.log(pricy);