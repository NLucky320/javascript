// ### Task 4 (Hard)

// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output


const statement = 'I am a hard working person';
const statementArray = statement.split(" ");
const rev_statement = [];
for (const words of statementArray) {
  rev_statement.unshift(words);
}
console.log(rev_statement.join(" "));


words = statement.split(' ')
let newWords = []
let final = ''
for (word  of words) {
    console.log(word);
    newWords.unshift(word)
    console.log(newWords);
    finalWords = newWords .join(' ')
}
console.log(finalWords);