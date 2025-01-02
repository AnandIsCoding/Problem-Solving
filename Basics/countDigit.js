//  **Description**: Write a program to count the number of digits in a given number.  
//     **Example**:  
//     Input: `number = 12345`  
//     Output: `5`  
//     Explanation: The number 12345 has 5 digits.  


const countDigit = (number) =>{
    let count = 0
    number = parseInt(number)
    while(number > 0){
        count++
        number = Math.floor(number/10)
    }
    return count
}
const result = countDigit(12345)
console.log(result)