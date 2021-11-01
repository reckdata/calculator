var arr = [1, 2, 0, -1, -2, 3];

arr.filter(Positives);

function Positives(element){
    console.log(element >= 0);
}
Positives(element);

/* function positiveSum(arr) {
  var positiveArray = arr.forEach(function(element) {
    return (element >= 0);})
    
  console.log(positiveArray);
}
positiveSum(arr); */