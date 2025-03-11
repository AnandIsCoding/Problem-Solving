function countPairsWithSum(arr, K) {
    // Your code goes here
    let count = 0
    for(let i=0;i<arr.length;i++){
      for(let j=i+1;j<arr.length;j++){
        if(arr[i] + arr[j] === K){
          count++
        }
      }
    }
    return count
  }


//   Input:
// K = 6 arr[] = [1, 5, 7, 1]

// Output:
// 2

// Explanation:
// Pairs: arr[0] + arr[1] = 1 + 5 = 6 arr[1] + arr[3] = 5 + 1 = 6