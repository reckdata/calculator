/* function countVowel(string) {
    // find the count of vowels
    const count = string.match(/[aeiou]/gi).length;

    //return the number of vowels
    return count;
}

let string = "a".toLowerCase;

console.log(countVowel(string));

 */


// program to count number of vowels in a sentence string

// define vowels

const vowels = ["a", "e", "i", "o" , "u"];

function countVowel(str) {
    // initilize vowel count

    let count = 0;

    // loop through the string to test if each character is a vowel
    // if true, the count is increased by 1 for every vowel found.

    for (let letter of str.toLowerCase()) {
        if(vowels.includes(letter)) {
            count++;
        }
    }
    // return the number of vowels
    return count;
}

const string = "CATS CATERED THE EVENT";
const strign = "CaTs CateReD tHe EveNT";

console.log(countVowel(string));
console.log(countVowel(strign));