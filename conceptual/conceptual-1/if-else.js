var x = 5;
// if (condition) {
//     condition true
// }
// else {
//     condition false
// }


if (x > 10) {
    console.log("bigger than ten")
}
else {
    console.log("smaller than 10")
}

var abc = 30;
if (abc == 30) {
    console.log('equal to')
}
else {
    console.log('not equal')
}
var abc = 30;
if (abc !== 30) {
    console.log('equal to')
}
else {
    console.log('not equal')
}
var abc = 50;
if (abc !== 30) {
    console.log('equal to')
}
else {
    console.log('not equal')
}

// if (condition) {
//     condition true
// }
// else if (condition) {
//     condition true
// }
// else if (condition) {
//     condition true
// }
// else {
//     condition false
// }


var temperature = 35;
if (temperature > 30) {
    console.log("hot day")
}
else if (temperature > 20) {
    console.log('warm day')
}

else if (temperature > 10) {
    console.log('cool day')
}
else{
    console.log('cool day')
}

var temperature = 25;
if (temperature > 30) {
    console.log("hot day")
}
else if (temperature > 20) {
    console.log('warm day')
}

else if (temperature > 10) {
    console.log('cool day')
}
else{
    console.log('cool day')
}

var temperature = 15;
if (temperature > 30) {
    console.log("hot day")
}
else if (temperature > 20) {
    console.log('warm day')
}

else if (temperature > 10) {
    console.log('cool day')
}
else{
    console.log('cool day')
}


var temperature =15;
if (temperature > 30) {
    console.log("hot day")
}
else if (temperature > 20) {
    console.log('warm day')
}

else if (temperature > 10) {
    console.log('cool day')
}
else{
    console.log('cool day')
}


// logical and
var hour = 14;
if (hour >= 6 && hour < 12) {
    console.log('good morning');
}
else {
    if (hour >= 12 && hour < 18) {
        console.log('good afternoon');
    } else {
        console.log('good evening')
    }    
}

var hour = 24;
if (hour >= 6 && hour < 12) {
    console.log('good morning');
}
else {
    if (hour >= 12 && hour < 18) {
        console.log('good afternoon');
    } else {
        console.log('good evening')
    }    
}


// logical and
var x = 12;
if (x < 5 || x > 10) {
    console.log(true)
}
else {
    console.log(false)
}
var x = 7;
if (x < 5 || x > 10) {
    console.log(true)
}
else {
    console.log(false)
}
var x = 4;
if (x < 5 || x > 10) {
    console.log(true)
}
else {
    console.log(false)
}
// logical or
var x = 5;
if (x < 5 || x > 10) {
    console.log(true)
}
else {
    console.log(false)
}
var x = 7;
if (x > 5 || x > 10) {
    console.log(true)
}
else {
    console.log(false)
}