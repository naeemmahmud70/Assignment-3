//1. kilometerToMeter problem solving part.
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return ("Enter a valid number"); //extra-part.
    }
    else {
        var meter = kilometer * 1000;
        return meter;
    }
}
var result = kilometerToMeter(5);
console.log(result);


//2. budgetCalculator problem solving part.
function budgetCalculator(watch, phone, laptop) {
    var total = (watch * 50) + (phone * 100) + (laptop * 500);
    return total;
}
var result = budgetCalculator(3, 7, 10);
console.log(result);



//3.hotelcost problem solving part.
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



//4. megafriend problem solving part.
function megaFriend(names) {
    var longestName = "";
    var count = 0;
    for (var i = 0; i < names.length; i++) {
        var character = names[i];
        if (character.length > count) {
            var count = character.length;
            longestName = character;
        }
    }
    return longestName;
}
var result = megaFriend(["Naeem", "Mubarak", "Tridibbonik", "Ruhulamin", "Tanjinjesika"]);
console.log(result);