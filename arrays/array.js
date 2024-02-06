const num1 = 12;
const num2 = 22;
const num3 = 42;

// array declare=[value1,value2,value3....]

const num = [12, 22, 42];
const name = ['abul', 'babul', 'bulbul'];
const passed = [true, false, true];
const mixed = [12, 'abul', true];



const value = [2, 4, 6, 8, 10, 12, 14, 16];

// NUMBER OF ELEMENTS IN A ARRAY
console.log(value.length);

// position of an particular elements in a array
console.log(value[1])
const fourth = value[4]
console.log(fourth);

// set or update element value by index
let abc = 6;
abc = 20;
value[2] = abc;
console.log(value);


// push-pop

const ages = [10, 20, 30, 40, 50, 60, 70];
console.log(ages);
ages.push(80);
console.log(ages);
ages.push(90, 100);
console.log(ages);

ages.pop();
console.log(ages);

// shift-unshift
ages.shift();
console.log(ages);

ages.unshift(5);
console.log(ages);


// an element includes in an array or not(case sensitive)
const age = [10, 20, 30, 40, 50, 60, 70];
const top =10203040

console.log(age.includes(30));
console.log(age.includes(90));

// indexof

console.log(age.indexOf(30));
console.log(age.indexOf(90));

// array or not
console.log(Array.isArray(age));
console.log(Array.isArray(top));