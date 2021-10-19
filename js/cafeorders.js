var CafeOrder = prompt("What food would you like to be served? ");

if(CafeOrder === "Nothing") {
	alert("Okay. Let me know if you need anything.");
} else if (CafeOrder !== "Nothing") {
	alert("Here is some " + CafeOrder + " for you. Anything else?");
  var OtherOrder = prompt("");
  
  if(OtherOrder === "No") {
  	alert("Thank you for choosing us.")
  } else {
  	alert("Here is your " + OtherOrder + ". Enjoy!");
  }
}