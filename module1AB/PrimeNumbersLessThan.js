module.exports = { findPrimes };

function findPrimes(n) {
    // Write your code here
    //a function to check number is prime or not
    const checkPrime = (number) => {
        if (number <= 1) return false; // Numbers less than or equal to 1 are not prime
        if (number === 2) return true; // 2 is a prime number
        for (let i = 2; i <= Math.sqrt(number); i++) { // Check for divisibility up to square root of the number to reduce iteration
            if (number % i == 0) return false; // If divisible than it's not prime
        }
        return true; // If no divisors found, than it's prime
    };
    // input validation
    if (typeof n !== 'number' || Number.isNaN(n) || n < 1) {
        return 'Please enter a positive integer greater than 0'; 
    }
    const primenumbers = []; // Array to store all prime numbers from 1 to n

    // Loop through numbers from 1 to n and check if they are prime, if prime push it in primenumbers array 
    for (let i = 1; i <= n; i++) {
        let isPrime = checkPrime(i); // Check if current number is prime
        if (isPrime) primenumbers.push(i); // If true, add to the array
    }
    return primenumbers; // Return the array of prime numbers 
}

console.log(findPrimes(20)); // [ 2,  3,  5,  7, 11, 13, 17, 19 ]
console.log(findPrimes(-20)); // Please enter a positive integer greater than 0
console.log(findPrimes('')); // Please enter a positive integer greater than

