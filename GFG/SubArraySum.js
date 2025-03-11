function findSubarray(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j];
      if (currentSum == sum) {
        return arr.slice(i, j + 1);
      }
    }
  }
  return null;
}

console.log(findSubarray([1, 2, 3, 7, 5], 12)); // [ 2, 3, 7 ]

//  Your task is to help Bob by finding a continuous subarray whose elements add up to the given target sum.
//   The subarray must consist of consecutive elements from the original array. If such a subarray exists, return it; otherwise, return null.
