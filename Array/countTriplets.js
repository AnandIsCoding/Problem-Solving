function countTriplets(arr) {
    // Your code goes here
    arr = arr.sort((a,b)=> a-b)
    let count = 0
    for(let i=0;i<arr.length;i++){
      for(let j=i+1;j<arr.length;j++){
        for(let k=j+1;k<arr.length;k++){
          if(arr[i] + arr[j] === arr[k]){
            count++
          }
        }
      }
    }
    return count
  }


//   Problem: You are given an array of distinct integers.
//   Your task is to find how many triplets (a, b, c) exist such that the sum of two of them is equal to the third one.

//      arr[] = [1, 5, 3, 2]

//      Output:
//      2

//      Explanation:
//      There are 2 triplets: 1 + 2 = 3 and 3 +2 = 5