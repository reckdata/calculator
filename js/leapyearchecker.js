function checkLeapYear(value) {
    // check whether the year is not leap (if indivisible by 4)
    if(value % 4 !== 0 ) {
        return false;
    } else if(value % 400 === 0){
        return true;
    } else if (value % 400 !== 0 && value % 100 === 0) {
        return false;
    } else if(value % 4 ===0 && value % 100 !== 0) {
        return true;
    }
}
console.log(checkLeapYear(1993));
console.log(checkLeapYear(2004));
console.log(checkLeapYear(1900));
console.log(checkLeapYear(2000));
console.log(checkLeapYear(2020));