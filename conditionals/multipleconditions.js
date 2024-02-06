const salary = 25000;
isBcs = true;
const height = 61;
hasCar = true;

if (salary > 20000) {
    console.log('supatro');
}
else {
    console.log('onno patro khuji')
}


if (salary > 20000 && height>66) {
    console.log('supatro');
}
else {
    console.log('onno patro khuji')
}

if (salary > 20000 && height>59) {
    console.log('supatro');
}
else {
    console.log('onno patro khuji')
}

if (salary > 20000 || height>66) {
    console.log('supatro');
}
else {
    console.log('onno patro khuji')
}

if (salary > 25000 || height>66) {
    console.log('supatro');
}
else {
    console.log('onno patro khuji')
}


// compex condition
if ((salary > 25000 && hasCar == true) || isBcs==true) {
    console.log('supatro');
}
else {
    console.log('onno patro khuji')
}
if ((salary > 25000 && hasCar == false) || isBcs==false) {
    console.log('supatro');
}
else {
    console.log('onno patro khuji')
}

