function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(10);
console.log(result);



function budgetCalculator(watch, phone, laptop) {
    var total = (watch * 50) + (phone * 100) + (laptop * 500);
    return total;
}
var sum = budgetCalculator(5, 100, 5);
console.log(sum);



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