module.exports = { arrayIntersection };

function arrayIntersection(array1, array2) {
    // Write your code inside this function only.
    // Validation: Ensure both inputs are arrays
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return "Both inputs must be arrays.";
  }
    //intersection array
  let common = [];
  array2.forEach((val, _) => {
    if (array1.includes(val) && !common.includes(val)) {
      common.push(val);
    }
  });
  return common;
}
console.log(arrayIntersection([70, 20, 30, 50], [30, 40, 50, 60, 70]));   //[ 30, 50, 70 ]
console.log(arrayIntersection([1, 2, 2, 3, 4, 5], [2, 3, 3, 6]));         //[ 2, 3 ]
console.log(arrayIntersection([1, 2, 2, 3, 4, 5], [9, 9, 7, 0]));         //[]
console.log(arrayIntersection([], [9, 9, 7, 0]));                         //[]
console.log(arrayIntersection([1, 2, 3], ""));                            //Both inputs must be arrays.

