var sample_regex = /moringaschool/gi

var CafeOrder = prompt("What food would you like to be served? ");

alert("Here is some " + CafeOrder + "for you.")
var Query = prompt("Anything else? ");

if(Query === "yes") {
    alert("What can I get you?")
} else {
    alert("Thank you for choosing us");
}