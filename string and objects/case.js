const school = 'Rajuk Uttara Model school';
console.log(school.toLowerCase());
console.log(school.toUpperCase());


const subject = 'Chemistry';
const book = 'chemistry';

if (subject === book) {
    console.log('eibar porikkhai fataiya dimu');
}
else {
    console.log('r pormu na, allah hafez');
}


if (subject.toLowerCase() === book.toLowerCase()) {
    console.log('eibar porikkhai fataiya dimu');
}
else {
    console.log('r pormu na, allah hafez');
}

const drink = ' water';
const liquid = '    water   ';

if (drink === liquid) {
    console.log('panir opr nam jibon');
}
else {
    console.log('somudrer pani');
}

if (drink.trim() === liquid.trim()) {
    console.log('panir opr nam jibon');
}
else {
    console.log('somudrer pani');
}