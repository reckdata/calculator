/* 
the project has the following requirements:
    1. For words beginning with a vowel add "ay" to the end.
    2. For words beginning with one or more consonants,
    move all the first consonants to the end and add "ay".
    3. If the first consonants include "qu", move all, including "qu".
    4. If a word starts with "y", treat "y" as a consonant.
*/



function translatePigLatin(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let newStr = "";

    if(vowels.indexOf(str[0]) > -1) {
        newStr = str + "way";
        return newStr;
    } else {
        let firstMatch = str.match(/[aeiou]/g) || 0;
        let vowel = str.indexOf(firstMatch[0]);
        newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
        return newStr;
    }
}
let string = "instructions";
console.log(translatePigLatin(string))