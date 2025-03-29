// Do not remove nor make any changes in  main() function
function main() {
    var coordinates = readLine();
    console.log(squareIsWhite(coordinates));
}
var squareIsWhite = function(coordinates) {
 let [a, b] = coordinates.split('');
  let column = a.charCodeAt(0) - 'a'.charCodeAt(0) + 1; // Convert 'a' -> 1, 'b' -> 2, ..., 'h' -> 8
  let row = parseInt(b); // Convert row character to number

  return (column + row) % 2 !== 0; // White if sum is odd
};