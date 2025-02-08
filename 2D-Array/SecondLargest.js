// Task Title:
// Find the Maximum and Second Maximum Value in a 2D Array

// Task Description:
// Implement a function findMaxInArray that takes a two-dimensional array as input and finds both the maximum value and the second maximum value within it. The function iterates through each element in the nested arrays, comparing values to update the highest (max) and second highest (smax) values accordingly.

const findSecondMaxInArray = (arr) => {
  let max = -Infinity,
    smax;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        smax = max;
        max = arr[i][j];
      } else if (arr[i][j] > smax && arr[i][j] < max) {
        smax = arr[i][j];
      }
    }
  }
  return { max, smax };
};
console.log(
  findSecondMaxInArray([
    [1, 2, 3, 4],
    [6, 7, 90, 8, 9],
    [3, 78, 74, 27, 3],
  ])
);
