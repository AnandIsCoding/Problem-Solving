const merge2SortedArrays = (arr1, arr2) => {
  let i = 0,
    j = 0,
    m = arr1.length,
    n = arr2.length;
  let answer = [];
  while (i < m && j < n) {
    if (arr1[i] <= arr2[j]) {
      answer.push(arr1[i]);
      i++;
    } else {
      answer.push(arr2[j]);
      j++;
    }
  }
  while (i < m) {
    answer.push(arr1[i]);
    i++;
  }
  while (j < n) {
    answer.push(arr2[j]);
    j++;
  }
  return answer;
};

const mergeSort = (arr) => {
  let mid = Math.floor(arr.length / 2);
  if (arr.length <= 1) return arr; // base case, if there is 1 or less element than it's already sorted
  let leftPart = mergeSort(arr.slice(0, mid)); // Recursively sort left half
  let rightPart = mergeSort(arr.slice(mid)); // Recursively sort right half
  return merge2SortedArrays(leftPart, rightPart); // merge sorted halves
};
console.log(mergeSort([1, 4, 8, 10, 12, 3, 6, 5, 2, 4, 7, 9])); // output --->> [ 1,  2, 3, 4, 4, 5,  6, 7, 8, 9, 10, 12 ]

// base case if length <=1 return arr becoz 1 or less elem is already sorted
// recursively cass firstHalf and last half
// and the resultant array of these two, create a merge2Sorted array function and call it return resultant array
// 👍
