// Do not remove nor make any changes in  main() function
function main() {
    var num = parseInt(readLine());
    console.log(largestInteger(num));
}
var largestInteger = function(num) {
    //Your code goes here
    let digits = num.toString().split('');
    let evens = [], odds = [];

    // Separate even and odd digits
    for (let digit of digits) {
        if (digit % 2 === 0) evens.push(digit);
        else odds.push(digit);
    }

    // Sort even and odd digits in descending order
    evens.sort((a, b) => b - a);
    odds.sort((a, b) => b - a);

    // Reconstruct the number using sorted evens and odds
    let result = '';
    for (let digit of digits) {
        if (digit % 2 === 0) result += evens.shift();
        else result += odds.shift();
    }

    return parseInt(result);
};