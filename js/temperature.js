/* 
    this file contains code for converting temperature between Celsius and Fahrenheit
*/
// User input in Fahrenheit
/* var temperature = parseFloat(
    prompt("Enter temperature in Fahrenheit: ")
    );

var celsiusConverter = function(temperature){
    return (temperature / 33.8);
}
celsiusConverter(); */

var CelsiusTemperature =  parseFloat(
    prompt("Enter Value in Degrees Celsius: ")
    );

var FahrenheitConverter = function(CelsiusTemperature) {
    result = (CelsiusTemperature * 1.8 + 32);
    return result;
}
alert("The result is " + FahrenheitConverter(CelsiusTemperature));