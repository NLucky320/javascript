// Write a function to count the number of vowels in a string.

function countVowels(strings) {
    let count = 0;
    for (vowles of strings){
        if (vowles=='a' || vowles=='e' || vowles=='i' || vowles=='o' || vowles=='u'){
          count++;
        }
          
    }
    return count;
}
console.log(countVowels('to count the number of vowels in a string'))