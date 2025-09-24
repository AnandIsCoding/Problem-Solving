// Problem Statement:
// A mountain array is an array that:
//         Increases strictly up to a peak element.
//         Then strictly decreases after the peak.
//         You need to find the peak index in the mountain array.

// Example 1:
//         arr = [0, 1, 2, 3, 5, 3, 1]
//         4  // (index of peak element "5")

// Using Linear Search

const peakIndexInMountain = (arr) => {
  for (let i = 1; i < arr.length - 2; i++) {
    if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) return i;
  }
  return -1;
};
console.log(peakIndexInMountain([0, 1, 2, 3, 5, 3, 1])); // 4
console.log(peakIndexInMountain([0, 10, 5, 2])); // 1
console.log(peakIndexInMountain([3, 2, 1])); // -1

const peakIndexInMountain2 = (arr) => {
  let start = 0,
    end = arr.length - 1,
    pk = -1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
      return mid;
    } else if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};
console.log(peakIndexInMountain2([0, 1, 2, 3, 5, 3, 1])); // 4
