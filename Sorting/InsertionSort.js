const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j >= 1 && arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }
  }
  console.log("Sorted Array is ==> ");
  return arr;
};
console.log(insertionSort([5, 4, 6, 3, 7, 2, 8, 1, 9]));
