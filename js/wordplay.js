var sentence = "this is a sentence to be sliced into new array. go for it.";

var WordPlay = function(sentence){
    myArr = sentence.split(" "); // creates an array by splitting the sentence with "space" as a delimiter.
    //console.log(myArr); // prints the created array.

    for (let i = 0; i < myArr.length; i++) {

        if(myArr[i].length >= 3){
            var NewArray = [];
            NewArray = NewArray.push(myArr);
            console.log(NewArray);

        }  
    }
}
WordPlay(sentence);