function main() {
    var n = parseInt(readLine());
    fibonacciSeries(n);
}
function fibonacciSeries(n) {
    // Starting values of the Fibonacci series
    let firstTerm = 0; 
    let secondTerm = 1; 
    
    // Edge case handling
    if (n < 1) return; // If n is 0 or negative, do nothing

    // Loop to generate the Fibonacci series up to the nth term
    for (let i = 1; i <= n; i++) {
        console.log(firstTerm); // Print the current term

        // Calculate the next term in the series
        let nextTerm = firstTerm + secondTerm; 
        firstTerm = secondTerm; // Move to the next term
        secondTerm = nextTerm; 
    }
}




function fibonacciSeries(n) {
    let arr = [];
    let first = 0, second = 1;
    
    if (n === 0) return "";  // Handle edge case
  
    if (n >= 1) arr.push(first);
    if (n >= 2) arr.push(second);
  
    while (arr.length < n) {
      let third = first + second;
      arr.push(third);
      first = second;
      second = third;
    }
  
    console.log(arr.join(' '));  // Fix spacing issue
    return arr.join(' ');  // Fix spacing issue
  }
  