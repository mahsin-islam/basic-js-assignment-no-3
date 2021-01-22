/*****
* 01 - Problem Solving of kilometerToMeter 
*****/

function kilometerToMeter(kilomneter){
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