/* 
the purpose of this app is to convert between weights, such as between gallons and liters.
*/

var unit = parseFloat(prompt("Enter value in gallons: "));

var unitConverter = function(unit){
     var converts = (unit * 191.432);
     return converts;
}
unitConverter(converts + " liters");