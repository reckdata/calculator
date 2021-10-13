/* this function calculates a person's BMI
 The function accepts weight (kilograms) and height (meters) as user inputs.
*/

weight = parseFloat(prompt("Enter your weight (Kgs): "));
height = parseFloat(prompt("Enter your height (in metres): "));

var bmiCalculator = function(weight, height){
    bmiIndex = (weight / height);
    return bmiIndex;
}
bmiCalculator(weight, height);
alert("Your BMI Index is " + bmiIndex);