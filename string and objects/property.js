const subject ={
    name: 'physics',
    teacher: 'sadiq khan',
    examDate: '30 Feb',
    chapter: ['first', 'third'],
    exam:{
        name: 'final',
        edate: '15 feb',
    },
    'fav sub': ['math', 'biology']
}
// dot notation
// dot symbol diye object or property er value acesss kora
console.log(subject.name)
console.log(subject.exam)
console.log(subject.exam.name)
const know = subject.teacher;
console.log(know)
// console.log(subject.fav sub)


// bracket Notation
// third bracket diye acess kora
console.log(subject['examDate']);
const read = subject['chapter'];
console.log(read)
console.log(subject['fav sub'])

subject.name = 'climatology',
    subject['teacher'] = 'sakib khan',
console.log(subject);

const date = 'examDate';
subject[date] = '20 feb',
console.log(subject)