// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function findSmallestName(array) {
    let shortLength = Infinity;
    let shortest = '';
    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            if (typeof array[i] === 'string' && array[i].length < shortLength) {
                shortest = array[i];
                shortLength = array[i].length;
            }
        }
    }
     return shortest;
}
console.log(findSmallestName(['rahim', 'robin', 'rafi', 'ron', 'rashed']))

// Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(names) {
    let small = names[0]
    for (const name of names) {
        if (small.length > name.length) {
            small = name;
        }
    }
    return small
}

const names = smallestName(heights2)
console.log(names);