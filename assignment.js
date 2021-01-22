https://github.com/mahsin-islam/basic-js-assignment-no-3
/*****
* 01 - Problem Solving of kilometerToMeter 
*****/

function kilometerToMeter(kilomneter) {
    var convertToMeter = kilomneter * 1000;
    return convertToMeter;
}
// get the result in meter
var resultInMeter = kilometerToMeter(5);
// output of kilometer in meter
console.log(resultInMeter);

/*****
* 02 - Problem Solving of budgetCalculator 
*****/
function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var getItemPrice = watchPrice + phonePrice + laptopPrice;
    return getItemPrice;
}

var resultsOfBudget = budgetCalculator(5, 8, 9);
// output of budget
console.log(resultsOfBudget);

/*****
* 03 - Problem Solving of hotelCost
*****/

function hotelCost(numberOfDay) {
    var totalCost = 0;
    if (numberOfDay <= 10) {
        totalCost = numberOfDay * 100;
    } else if (numberOfDay >10 && numberOfDay <= 20) {
        var firstTenDaysCost = 10 * 100;
        var secondTwentyDays = numberOfDay - 10;
        var secondTwentyDaysCost = secondTwentyDays * 80;
        var totalCost = firstTenDaysCost + secondTwentyDaysCost;
    } else {
        var firstTenDaysCost = 10 * 100;
        var secondTwentyDaysCost = 10 * 80;
        var thirdAfterTwentyDays = numberOfDay - 20;
        var thirdStayPrice = thirdAfterTwentyDays * 50;
        var totalCost = firstTenDaysCost + secondTwentyDaysCost + thirdStayPrice;
    }
    return totalCost;
}

var hotelCost = hotelCost(15);

// Output
console.log(hotelCost);



/*****
* 03 - Problem Solving of megaFriend
*****/

function megaFriend(friendsName) {
    var longestFriendName = '';
    for (var i = 0; i < friendsName.length; i++) {
        if (longestFriendName.length < friendsName[i].length) {
            longestFriendName = friendsName[i];
        }
    }
    return longestFriendName;
}

// Friends Name in Array
var megaFriend = megaFriend([
    'Rieydh',
    'Mahsin',
    'Rafiw alm',
    'Rajon',
]);

// Output
console.log(megaFriend);