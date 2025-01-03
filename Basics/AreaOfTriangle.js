// Do not remove nor make any changes in  main() function
function main() {
    var side1 = parseInt(readLine());
    var side2 = parseInt(readLine());
    var side3 = parseInt(readLine());
    console.log(getTriangleArea(side1, side2, side3));
}
function getTriangleArea(side1, side2, side3) {
  // Your code goes here
  let s = Math.floor(side1 + side2 + side3)/2
  let area = Math.sqrt(s * (s-side1) * (s-side2) * (s-side3))
  return area
}