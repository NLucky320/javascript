// ### Task-5:
// Capitalize Every first Letter of each word in a String
let sentence = 'capitalize Every first Letter of each word in a String';
const words = sentence.split(' ');


for (let i = 0; i < words.length; i++){
    words[i]=words[i][0].toUpperCase()+words[i].substring(1)
}
console.log(words)
const newWords = words.join(' ');
console.log(newWords);


let string = 'capitalize Every first Letter of each word in a String';
const word = sentence.split(' ');


for (let i = 0; i < word.length; i++){
    word[i]=word[i][0].toUpperCase()+words[i].slice(1)
}
console.log(word)
const newWord = word.join(' ');
console.log(newWord);