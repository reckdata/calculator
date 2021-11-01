var inputStr = "Enter your Grocery list separated by a COMMA";

var GroceryList = function(inputStr) {
    var userInput = inputStr.split(",");

    userInput.forEach(function(element){
        console.log(element);
    })
}
GroceryList(inputStr);