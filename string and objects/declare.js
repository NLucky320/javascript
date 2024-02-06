// const computer = {
//     brand: 'lenovo',
//     price: 50000,
//     hdd: '512gb',
//     monitor: 'hp'
// }
// const pencil = new Object();
// const pen = object.create({})

var person = {};
person.name = 'john';
person.age = 30;
console.log(person)

let str = 'Mississippi';
console.log(str.indexOf('i', 3))


const myObject = {
    a: 1,
    b: 2,
    c: 3,
};
for (let prop in myObject) {
    console.log(myObject[prop]);
}

const x = ''
if (!x.length) {
    console.log('hey')
} else {
    console.log('hi')
}

const stri = 'Hello';
str[0] = 'h';
console.log(stri);