// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values

function make_avg(array) {
    let total = 0;
    let average = [];
    for (let i = 0; i < array.length; i++){
        total = total + array[i];
        average= total/array.length
    }
    return average;
}
console.log(make_avg([1,2]))