// **Description**: Write a program to calculate the sum of digits of a number.  
//   **Example**:  
//   Input: `number = 1234`  
//   Output: `10`  
//   Explanation: The sum of the digits 1 + 2 + 3 + 4 = 10.  

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
const result = calculateSum(1234)
console.log(result)


// using reduce and in simple way

const sumOfDigits = (n) =>{
    let arr = n.toString().split('')
   return arr.reduce((curr,acc)=>Number(curr)+Number(acc),0)
}
console.log(sumOfDigits(123))