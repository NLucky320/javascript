/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
var weightInKg = 50;
var heightInInch = 5.2;
var heightInMeter = (heightInInch * 0.3048);
console.log(heightInMeter)
var BMI = weightInKg / (heightInMeter) ** 2;
console.log(BMI);


if (BMI < 18.5) {
    console.log("you are underweight")
}
else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("you are normal")
}
else if (BMI >= 25 && BMI <= 29.9) {
    console.log("you are overweight")
}
else {
      console.log("you are boss")
}
