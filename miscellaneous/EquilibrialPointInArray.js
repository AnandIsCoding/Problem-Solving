// Do not remove nor make any changes in  main() function
function main() {
    var arr = readLine().split(" ").map(x => parseInt(x));
    console.log(findEquilibriumPoint(arr));
}
function findEquilibriumPoint(arr) {
  // Your code goes here
  for(let i=0;i<arr.length;i++){
    let leftSum =0, rightSum = 0
    for(let j=0;j<i;j++){
        leftSum += arr[j]
    }
     for(let k=i+1;k<arr.length;k++){
        rightSum += arr[k]
    }
    if(rightSum === leftSum){
        return i+1
    }
  }
  return -1
}





// You have an array of positive numbers, and your task is to find the first "equilibrium point." An equilibrium point is an index in the array where the sum of all the elements before that index is equal to the sum of all the elements after it. In simpler terms, you want to find the first position in the array where the sum of the numbers to the left is the same as the sum of the numbers to the right.

// Note: Return equilibrium point in 1-based indexing. Return -1 if no such point exists.