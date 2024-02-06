var y = 10;
var message;

if (y > 5) {
    message = 'bigger than 5';
}
else {
    message='less than 5'
}
console.log(message);

// condition ? true : false;

message = y > 5 ? 'bigger than 5' : 'less than 5';
console.log(message);
message = y < 5 ? 'bigger than 5' : 'less than 5';
console.log(message);

message = y < 5 ? console.log('bigger than 5') : console.log('less than 5');