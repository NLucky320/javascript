// ### Task-5 (Hard)

// Loop through an object and print the key-value pairs with their `types`




let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true

};

for (const [key, value] of Object.entries(myObject)) {
    console.log(`${key}: ${value}`);
}

let key = Object.keys(myObject);
let value = Object.values(myObject);
console.log(key);
console.log(value);
for (let i = 0; i < key.length; i++){
    let final = `key:${key[i]} | type: ${typeof (value[i])}`
    console.log(final)
}

for (const prop in myObject) {
  console.log("key: " + prop + " | " + "type: " + typeof myObject[prop]);
}