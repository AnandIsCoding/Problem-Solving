//  **Description**: Write a program to determine if a number is a perfect number.  
//     **Example**:  
//     Input: `number = 28`  
//     Output: `Perfect Number`  
//     Explanation: 28 is a perfect number because its divisors (1, 2, 4, 7, 14) sum up to 28.

const checkPerfect = (number) =>{
    number = parseInt(number)
    let sum = 0
    for(let i = 1;i< number;i++){
        if(number % i === 0){
            sum += i
        }
    }
     return sum === number ?`${number} is a Perfect number` : `${number} is not Perfect number`
}
 const result = checkPerfect(28)
console.log(result)