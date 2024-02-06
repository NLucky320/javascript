/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
var ticket = 800;
var age = 35;
var isStudent = false;

if (age < 10) {
    console.log(ticket="free")
}
else if (isStudent === true) {
 console.log(ticket=ticket*50/100)   
}
else if (age >= 60) {
     console.log(ticket=ticket*15/100) 
}
else {
    console.log(ticket)
}

var ticket = 800;
var age = 35;
var isStudent = true;

if (age < 10) {
    console.log(ticket="free")
}
else if (isStudent === true) {
 console.log(ticket= ticket-ticket*(50/100))   
}
else if (age >= 60) {
     console.log(ticket=ticket-ticket*(15/100)) 
}
else {
    console.log(ticket)
}

var ticket = 800;
var age = 5;
var isStudent = false;

if (age < 10) {
    console.log(ticket="free")
}
else if (isStudent === true) {
 console.log(ticket= ticket-ticket*(50/100))   
}
else if (age >= 60) {
     console.log(ticket=ticket-ticket*(15/100)) 
}
else {
    console.log(ticket)
}


var ticket = 800;
var age = 65;
var isStudent = false;

if (age < 10) {
    console.log(ticket="free")
}
else if (isStudent === true) {
 console.log(ticket= ticket-ticket*(50/100))   
}
else if (age >= 60) {
     console.log(ticket=ticket-ticket*(15/100)) 
}
else {
    console.log(ticket)
}