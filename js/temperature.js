/* 
    this file contains code for converting temperature between Celsius and Fahrenheit
*/
// User input in Fahrenheit
var temperature = parseFloat(prompt("Enter temperature in Fahrenheit: "));

var celsiusConverter = function(temperature){
    return (temperature / 33.8);
}
celsiusConverter();