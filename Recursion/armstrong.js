const checkArmstrong = (n, sum = 0, length = String(n).length) => {
    if (n === 0) {
        return sum; // Return final sum when all digits are processed
    }
    sum += Math.pow(n % 10, length); // Add power of last digit
    return checkArmstrong(Math.floor(n / 10), sum, length); // Recursive call
};

// Wrapper function to check if number is Armstrong
const isArmstrong = (n) => {
    return checkArmstrong(n) === n ? "Yes" : "No";
};

console.log(isArmstrong(153)); // Output: "Yes"
console.log(isArmstrong(9474)); // Output: "Yes"
console.log(isArmstrong(9475)); // Output: "No"
console.log(isArmstrong(1)); // Output: "Yes"
