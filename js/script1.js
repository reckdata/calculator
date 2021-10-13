/* this function calculates a person's BMI
 The function accepts weight (kilograms) and height (meters) as user inputs.
*/

var bmiCalculator = function(weight, height){
    weight = parseFloat(prompt("Enter your weight (Kgs): "));
    height = parseFloat(prompt("Enter your height (in metres): "));
    bmiIndex = (weight / height);
    return bmiIndex;
}
alert("Your BMI Index is " + bmiIndex);