const cat = {
    name: 'tom',
    age: 20,
    isMale: true,
    color: 'white',
    food: ['meat', 'fish'], 
}

const sentence = 'My pet name is' + cat.name + '. His favourite food is' + cat.food + 'His color is' + cat.color
console.log(sentence)

const sen = `My pet name is ${cat.name}. His favourite food is ${cat.food}`
console.log(sen)

console.log( `My pet name is ${cat.name}. His favourite food is ${cat.food}`)