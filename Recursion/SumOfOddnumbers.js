const sumNumbers = (a, b, sum) => {
    //base case
  if (b < a) {
    return sum;
  }
  // processing and recursion , if odd sum += number else recursion 
  if (a % 2 !== 0) {
    return sumNumbers(a + 1, b, (sum += a));
  } else {
    return sumNumbers(a + 1, b, sum);
  }
};
console.log(sumNumbers(2, 10, 0)); // 24

console.log(sumNumbers(1, 10, 0)); // 55 