function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(10);
console.log(result);



function budgetCalculator(watch, phone, laptop){
    var total = watch + phone + laptop;
    return total;
}
var sum = budgetCalculator(50, 100, 500);
console.log(sum);