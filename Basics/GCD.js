//  **Description**: Write a program to find the GCD of two numbers.  
//     **Example**:  
//     Input: `a = 48, b = 18`  
//     Output: `6`  
//     Explanation: The GCD of 48 and 18 is 6.


// largest number from 1 to < min of numbers that can divide both number
// note : for 2 prime numbers gcd will be 1

//brute force -> O(n)

const findGcd = (num1,num2) =>{
    let min = Math.min(num1,num2)
    let gcd = 1
    for(let i=1;i< min; i++){
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i
        }
    }
    let product = Math.floor(num1*num2)
    let lcm = product / gcd
    return {gcd, lcm}
}

//num1 x num2 = hcf x lcm
// 864 = 6x
// x = 144


const result = findGcd(12, 15)
console.log(result)