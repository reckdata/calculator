function checkLeapYear(value) {
    // check whether the year is not leap (if indivisible by 4)
    if(value % 4 !== 0) {
        return false;
    } else if(value % 4 === 0){
        if (value % 100 === 0) {
            return false;
        } else if(value % 100 !== 0){
            return true;
        }
    }
}
console.log(checkLeapYear(1993));
console.log(checkLeapYear(2004));
console.log(checkLeapYear(1900));
console.log(checkLeapYear(2000));