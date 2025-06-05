const BuyAndSellStock = (arr) =>{
      let  profit = 0, currentMin = arr[0]
    for(let i=1;i<arr.length;i++){
      // can I sell
      if(arr[i]>currentMin){
          profit = Math.max(profit,arr[i]-currentMin)
      }
      //can I buy
      if(arr[i] < currentMin){
          currentMin = arr[i]
      }
    }
    return profit
}
console.log(BuyAndSellStock([7,1,5,3,6,4])); // ✅ Output: 5
console.log(BuyAndSellStock([7,6,4,3,1]));   // ✅ Output: 0
console.log(BuyAndSellStock([2,4,1]));       // ✅ Output: 2