var numbers = [1,2,3,4,5];

var doubledNumbers = numbers.map(function(number){
    return (number * 2);
});

console.log(doubledNumbers);

var addones = numbers.map(function(number) {
    return (number + 1);
})
console.log(addones);

var arrayWords = ["javascript", "html", "python"];

var wordsInUpperCase = arrayWords.map(
    function(arrayWord) {
        return (arrayWord.toUpperCase());
    }
);
console.log(wordsInUpperCase);