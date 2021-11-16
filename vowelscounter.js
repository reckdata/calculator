function countVowel(str) {
    // find the count of vowels
    const count = str.toLowercase().match(/[aeiou]/gi).length;

    //return the number of vowels
    return count;
}

let string = "a";

console.log(countVowel(string));