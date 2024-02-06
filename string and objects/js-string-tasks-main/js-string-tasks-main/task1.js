// ### Task-1:
// Count how many times a string has the letter `a`

let sentence = "Count how many times a string has the letter";
let count = 0;
for (let i = 0; i <= sentence.length; i++) {
   count++;
}

console.log(count);

console.log(sentence.split("a").length - 1);

// let temp = "Count how many times a string has the letter";
// let count1 = (temp.match(/a/g) || []).length;
// console.log(count1);



console.log(sentence.split('a'));
const sentences = 'I am a good and hardworking person.';
console.log(sentences.split(' '));
console.log(sentences.split('a').length - 1);

let string = 'Count how many times a string has the letter a'
let spl= string.split('')
let Count = '';

for (i = 0; i <= sp.length; i++) {
    if (sp[i] !== 'a') {
        continue;
    }
    Count = Count + sp[i]
}
console.log(Count.length);

// simple by solution
// let count = 0;
// for (i = 0; i < sp.length; i++) {
//     if (sp[i].includes('a')) {
//         count++
//     }
// }
// console.log(count);