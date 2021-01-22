

//1.kilometerToMeter problem solve
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(10);
console.log(result);


//2. budgetCalculator problem solve
function budgetCalculator(watch, phone, laptop) {
    var total = (watch * 50) + (phone * 100) + (laptop * 500);
    return total;
}
var sum = budgetCalculator(5, 10, 5);
console.log(sum);



//3.hotelcost problem solve
function hotelCost(day) {
    var cost = 0;
    if (day <= 10) {
        cost = day * 100;
    }
    else if (day <= 20) {
        var firstTenDay = 10 * 100;
        var remainingday = day - 10;
        var secondtenday = remainingday * 80;
        cost = firstTenDay + secondtenday;
    }
    else {
        var firstTenDay = 10 * 100;
        var secondtenday = 10 * 80;
        var remainingday = day - 20;
        var nextOtherDay = remainingday * 50;
        cost = firstTenDay + secondtenday + nextOtherDay;
    }
    return cost;
}
var totalCost = hotelCost(25);
console.log(totalCost);



//4. megafriend problem solve
function megaFriend(array) {
    var longestName = "";
    var count = 0
    for (var i = 0; i < array.length; i++) {
        var character = array[i];
        if (character.length > count) {
            var count = character.length;
            longestName = character;
        }
    }
    return longestName;
}
var result = megaFriend(["naeem", "mubarak", "tridibbonik", "ruhulamin", "tanjinjesika"]);
console.log(result);