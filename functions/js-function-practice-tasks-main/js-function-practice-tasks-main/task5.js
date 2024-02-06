// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(integer){
    if (integer % 2 === 0) {
        const value = `${integer} is Even`
        return value;
    }
    else {
        const value = `${integer} is Odd`
       return value;
    }   
}

console.log(odd_even(10))