var studentGrade = parseInt(prompt("Enter your Score: "));

if(studentGrade >= 0 && studentGrade <= 19) {
    alert("Student scored an E." + " failed".toUpperCase());
} else if(studentGrade >= 20 && studentGrade <= 39) {
    alert("Student scored a D.");
} else if(studentGrade >= 40 && studentGrade <= 59) {
    alert("Student scored a C.");
} else if(studentGrade >= 60 && studentGrade <= 79) {
    alert("Student scored a B.");
} else if (studentGrade >= 80 && studentGrade <= 100) {
    alert("Student Scored an A. " + "Passed".toUpperCase());
} else {
    alert("Please input a value between 0 and 100.");
}

