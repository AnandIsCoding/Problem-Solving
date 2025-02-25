// The Richest Customer Wealth problem requires you to determine the maximum wealth among a list of customers, where each customer has multiple bank accounts with varying amounts of money. You can represent the customers' wealth as a 2D array, where each row corresponds to a customer and each element in the row represents the amount of money in each of their bank accounts. Your task is to find the maximum wealth among all customers.
//  2
//  3
//  1 2 3
//  3 2 1

// 6

var maximumWealth = function(accounts) {
    // your Code Goes Here
    let max = -Infinity
    for(let i=0;i<accounts.length;i++){
      let currentMax = 0;
      for(let j=0;j<accounts[i].length;j++){
         currentMax += accounts[i][j]
         if(currentMax > max){
             max = currentMax
         }
      }
    }
    return max
};

console.log(maximumWealth( [[1,2,3],[3,2,1]]));  //6

