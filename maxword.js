
function megaFriend(arr) {
    var longest = "";
    var large = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > large) {
            var large = arr[i].length;
            longest = arr[i];
        }
    }
    return longest;
}
var result = megaFriend(["naeem", "mubarak", "tridib", "ruhulamin"]);
console.log(result);
