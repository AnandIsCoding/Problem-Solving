Array.prototype.myConcat = function (arr2) {
  if (!Array.isArray(arr2)) {
    throw new TypeError('Argument must be an array')
  }
  // Create and return a new array without mutating original arrays
  return [...this, ...arr2]
}

let array = [1, 2, 3]
let ans = array.myConcat([4, 5, 6])

console.log(ans)    // [1, 2, 3, 4, 5, 6]
console.log(array)  // [1, 2, 3]   (original remains unchanged)
