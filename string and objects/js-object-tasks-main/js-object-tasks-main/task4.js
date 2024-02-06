// Task-4
// Count the number of properties.

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
const getNumberOfProperties=obj=> {
let count = 0;
for (const key in obj) {
    count++;
}
return count;
}
const count = getNumberOfProperties(student);

console.log(count);

const number = Object.keys(student);
const count2 = number.length;
console.log(count2)

const count1 = Object.entries(student).length;
console.log("Number of keys :" + count1);

const propertiesArray = 
    Object.getOwnPropertyNames(student);
 
const count3 = propertiesArray.length;
 
console.log("Number of keys: " + count3);