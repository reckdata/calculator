alert("This is a personality quiz. We will use it to recommend the pet you should get. PRESS ENTER TO CONTINUE!")

var quiz1 = prompt("Are you introverted or extroverted?".toUpperCase());
var quiz2 = prompt("Do you like to stay indoors or outdoors?".toUpperCase());

if(quiz1 === "EXTROVERTED" && quiz2 === "OUTDOORS") {
    alert("You should get a dog");
} else if (quiz1 === "EXTROVERTED" && quiz2 === "INDOORS") {
    alert("Get both a cat and a dog.")
} else if(quiz1 === "INTROVERTED" && quiz2 === "OUTDOORS") {
    alert("Get neither.")
} else if (quiz1 === "INTROVERTED" && quiz2 === "INDOORS") {
    alert("Get a cat!");
} else{
    alert("Ops! We didn't get your responses.")
}