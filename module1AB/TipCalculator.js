function calculateTip(billAmount, tipPercentage) {
    // Write your code here
    billAmount = Number(billAmount)
    tipPercentage = Number(tipPercentage)
    // Validate tipPercentage
    if(billAmount <= 0 || isNaN(billAmount)) return "The billAmount must be  positive numeric value"
    // Validate tipPercentage 
    if (isNaN(tipPercentage) || tipPercentage < 0 || tipPercentage > 100) {
        return "The tipPercentage should be a number between 0 and 100.";
    }
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    return Number(totalAmount.toFixed(2));
}
console.log(calculateTip(90.00, 0.10))  //99
console.log(calculateTip(100, "abc")); // "The tipPercentage should be a number between 0 and 100.";