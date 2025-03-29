// Do not remove nor make any changes in  main() function
function main() {
    var str = readLine();
    console.log(extractNumbers(str));
}
function extractNumbers(str) {
    // Define regex to match integers and floating-point numbers
    const regex = /\d+(\.\d+)?/g;
    
    // Match numbers and convert matched strings to numbers, or return an empty array if no matches
    const matches = str.match(regex);
    return matches ? matches.map(Number) : [];
}