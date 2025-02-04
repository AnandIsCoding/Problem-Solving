const threeSum = (arr, target) => {
  let indexes = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === target) {
          //push if not already pushed in duplicates elements case
          if (!indexes.includes(`(${arr[i]}, ${arr[j]}, ${arr[k]})`)) {
            indexes.push(`(${arr[i]}, ${arr[j]}, ${arr[k]})`);
          }
        }
      }
    }
  }
  return indexes.join(" ");
};
console.log(threeSum([-4, -1, -1, 0, 1, 2], 0));    //    (-1, -1, 2) (-1, 0, 1)
console.log(threeSum([ 3,5,6,7,2,5,9,0 ],13))       //    (3, 5, 5) (5, 6, 2) (6, 7, 0) (6, 2, 5)
