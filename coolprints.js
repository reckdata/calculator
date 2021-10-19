/* 
This code uses loops to print elements of an array;
*/
var languages = ['Python', 'JavaScript', 'Golang', 'HTML', 'CSS', 'Java'];

languages.forEach(
    function(language){
        console.log('I code in ' + language + '!');
    });


/* 
this piece of code adds an arbitrary number of elements in an array and prints the result to the console.
*/

var total = 0;
var numbers = [1, 3, 2, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function(number) {
    total += number;
});
console.log(total);