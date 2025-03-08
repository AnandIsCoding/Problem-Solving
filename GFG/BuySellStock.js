const BuyAndSellStock = (arr) =>{
    let minSoFar = arr[0]
    let maxProfit = 0
    for(let i=0;i<arr.length;i++){
        minSoFar = Math.min(arr[i],minSoFar)
        let profit = arr[i] - minSoFar
        maxProfit = Math.max(profit,maxProfit)
    }
    return maxProfit
}
console.log(BuyAndSellStock([7,1,5,3,6,4])); // ✅ Output: 5
console.log(BuyAndSellStock([7,6,4,3,1]));   // ✅ Output: 0
console.log(BuyAndSellStock([2,4,1]));       // ✅ Output: 2