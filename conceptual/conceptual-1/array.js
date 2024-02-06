// var arrayName=[value1,value2,value3,value4...]

var numbers = [10, 20, 30, 40, 50];

console.log(numbers);
console.log(numbers.indexOf(40));

var numbers = [10, 20, 30, 40, 50, 40];
console.log(numbers.indexOf(40));
console.log(numbers.indexOf(60));
console.log(numbers[numbers.length - 1]);

// Slice(kon index theke kon index porjonto)
console.log(numbers.slice(1, 4));
// Slice(kon index theke last index porjonto)
console.log(numbers.slice(2));

// suru theke kichu and sesh theke kichu newar jonno
var x = numbers.slice(0, 2).concat(numbers.slice(4));
console.log(x);



var names = ['lucky', 'mahruf', 'hussain']
console.log(names);
console.log(names[1]);

console.log(numbers[2]);
console.log(numbers[0]);
// push
numbers.push(60);
console.log(numbers);
numbers.push(70);
console.log(numbers);
numbers.push(80,90,100);
console.log(numbers);

// pull
numbers.pop();
console.log(numbers);

var a=numbers.pop();
console.log(numbers);
console.log(a);



var value = [10, 20, 30, 40, 50];
value.shift();
console.log(value);

var value = [10, 20, 30, 40, 50];
value.unshift(5);
console.log(value);
var value = [10, 20, 30, 40, 50];
value.unshift(5,6,7);
console.log(value);

var u=[10,20,30,40,50,60,70,80]
var x = u.slice(0, 2).concat(u.slice(4));
console.log(x);


// splice method

// splice(start,deleteCount,element1,element2)

var z = [10, 20, 30, 40, 50, 60, 70];
z.splice(2,1);
console.log(z);
z.splice(2,3);
console.log(z);

z.splice(2, 1, 100);
console.log(z);

z.splice(2, 0, 100);
console.log(z);