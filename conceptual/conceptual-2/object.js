// const objectName = {
//     propertyName: propertyValue,
// }


const cat = {
    name: 'tom',
    age: 20,
    isMale: true,
    color: 'white',
    food: ['meat', 'fish'],
    
}
// acess property
console.log(cat);
console.log(cat.age)
console.log(cat['age'])
cat.color = 'black';
console.log(cat);

// add property
cat.isMarried = 'true';
console.log(cat);

// delete property
delete cat.color;
console.log


// array--->for of
// object--->for in
for (let key in cat) {
    console.log(key);
    console.log(key, typeof(key))
    console.log(cat[key])
}

// dot notation-->Object.propertyName--->propertyName single word  e thakle
// bracket notation-->object['propertyName'] -propertyName jodi single word e na thakle ba na thakle


