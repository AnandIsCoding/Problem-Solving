// **Description**: Write a program to compute the factorial of a given number.  
//   **Example**:  
//   Input: `number = 5`  
//   Output: `120`  
//   Explanation: 5! (factorial) is 5 × 4 × 3 × 2 × 1 = 120.  
const Factorial = (number) =>{
    if(number < 0) return 'factorial for negative number is not defined'
    if(number === 0 || number === 1) return 1
    if(number === 2) return 2
    let facto = 1
    for(let i=number ; i>=1;i--){
        facto *= i
    }
    return facto
}
const result = Factorial(5)
console.log(result)