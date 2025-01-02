// **Description**: Write a program to print all prime numbers less than a given number.  
//     **Example**:  
//     Input: `number = 20`  
//     Output: `2, 3, 5, 7, 11, 13, 17, 19`  
//     Explanation: The prime numbers less than 20 are 2, 3, 5, 7, 11, 13, 17, and 19.  


const checkPrime = (number) =>{
    if(number <= 1) return false
    if(number === 2) return true
    for(let i=2;i<=Math.sqrt(number);i++){
        if(number % i == 0) return false
    }
    return true
}
const PrimeLessthan = (number) =>{
    const primenumbers = []
    for(let i=1;i <= number;i++){
        let isPrime = checkPrime(i)
        if(isPrime) primenumbers.push(i)
    }
    return primenumbers
}
const result = PrimeLessthan(20)
console.log(result)