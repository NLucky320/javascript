const address = 'andorkilla';
const part = address.slice(2, 6);
console.log(part);

const sentence = 'i am a good hard working person';
const word = sentence.substring(2,11)
console.log(word)
console.log(sentence.split(" "))
console.log(sentence.split("a"))


const friends = 'moon, bahnni, roza, oishy';
const friend = friends.split(',');
console.log(friend);


const name = ['moon', 'bahnni', 'mitra', 'oishy']
console.log(name.join())
console.log(name.join('-'))
console.log(name.join('|'))

const first = 'abid';
const second = 'rabid';
const third = 60;
const thir = 60;
const fullName = first + second;
console.log(fullName)

const f = first + ' '+ second;
console.log(f)

const full = first.concat(' ').concat(second).concat(third).concat(thir);
console.log(full)


// const fruits = ["apple", "guava"]
// console.log(fruits.includes("guava"))
// console.log(fruits.includes("grape"))