/* 
this project creates a calculator. in this file, we create the back-end logic.
 */


// gather user input
var number1 = parseInt(prompt("Enter number: "));
var number2 = parseInt(prompt("Enter another number: "));

// define the addition function
var addNumbers = function(number1, number2){
    return number1 + number2;
}
//alert(addNumbers(number1, number2))

// subtraction
var subtractNumbers = function(number1, number2) {
    return number1 - number2;
}
//alert(subtractNumbers(10, 5));

// multiplication
var multiplyNumbers = function(number1, number2) {
    return number1 * number2;
}

// division
var divideNumbers = function(number1, number2){
    return number1 / number2;
}

// modulus / remainders
var remainder = function(){
    return number1 % number2;
}