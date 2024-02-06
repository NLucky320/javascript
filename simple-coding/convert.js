// conversion of inch to feet
/* function inchToFeet(inch) {
     const feet = inch / 12;
    return feet;
}
const MahrufHeight = inchToFeet(75);
console.log(MahrufHeight) */

function inchToFeet2(inch) {
    const feet = parseInt(inch / 12);
    const inch2 = inch % 12;
    const result= feet+` ft `+ inch2+` inch.`
    return result;
}

const MahrufHeight = inchToFeet2(75);
console.log(MahrufHeight)


// conversion of miles to kilometers

function milesToKm(miles) {
    const km = miles * 1.60934;
    return km;
}
const distanceInKilometers = milesToKm(80);
console.log(distanceInKilometers)


// conversion of kilometers to miles

function kmToMiles(km) {
    const miles = km * 0.621371;
    return miles;
}
const distanceInMiles = kmToMiles(128.7472);
console.log(distanceInMiles);