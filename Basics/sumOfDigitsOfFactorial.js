//  **Description**: Write a program to find the sum of the digits of the factorial of a given number.  
//     **Example**:  
//     Input: `number = 4`  
//     Output: `6`  
//     Explanation: The factorial of 4 is 24, and the sum of the digits (2 + 4) is 6.  

const calculateSum = (number) =>{
    number = Number(number)
    let sum = 0
    while(number){
        let lastDigit = number%10
        sum += lastDigit
        number = Math.floor(number/10)
    }
    return sum
}

const sumOfFactorial = (number) =>{
    if(number < 0) return 'factorial for negative number is not defined'
    if(number === 0 || number === 1) return 1
    if(number === 2) return 2
    let facto = 1
    for(let i=number ; i>=1;i--){
        facto *= i
    }
    const sumfactonumbers = calculateSum(facto)
    return sumfactonumbers
}
const result = sumOfFactorial(4)
console.log(result)