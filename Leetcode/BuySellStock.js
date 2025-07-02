var maxProfit = function(prices) {
    let profit = 0 , minSoFar = prices[0] , length = prices.length
    for(let i=1;i<length;i++){
        //can I buy
        if(prices[i]<minSoFar) minSoFar = prices[i]
        //can I buy
        if(prices[i]-minSoFar > profit) profit = prices[i]-minSoFar
    }
    return profit
};