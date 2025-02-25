function main() {
    var n = parseInt(readLine());
    console.log(isPowerOfThree(n));
}
const isPowerOfThree = function(n){
    // Your code goes here

    if (n === 1) return true; // 4^0 = 1
    if (n < 1 || n % 3 !== 0) return false; // Not divisible by 3

    return isPowerOfThree(n / 3); // Recursive call
    
};


// Power of 3
// Easy
// +10 APs
// solved
// Write a function that determines if a given integer is a power of 3. An integer n is considered a power of 3 if there exists an integer x such that 3^x = n

// For example, 27 is a power of 3 because 3^3 =27.