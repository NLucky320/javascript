function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
       return 'please provide a number'
    }
    else {
        return x + y;
    }
}
console.log(add(3,4))
console.log(add(3,'4'))
console.log(add(3,NaN))
console.log(add(undefined,NaN))
console.log(add({ name: 'x' }, '4'))


function details(info) {
    if (typeof info !== 'object') {
        return 'provide an object please'
    }
    else if (!info.name || !info.age) {
       return 'object must contain name and age' 
    }
    else if
        (typeof info.name !== 'string' || typeof info.age !== 'number'){
        return 'name should be a string and age should be number';
    }
    else if(info.age<=0){
        return 'age should be a positive number';
    }
    return `my name is : ${info.name}. my age is ${info.age}`;
}
console.log(details({name: 'lucky', age: '26'}))
console.log(details({name: 'lucky', age: 26}))
console.log(details({name: 'lucky', age: 26.8}))
console.log(details({name: 'lucky', age: -26}))
console.log(details({name: 'lucky'}))