//  **Description**: Write a program to count the number of digits in a given number.  
//     **Example**:  
//     Input: `number = 12345`  
//     Output: `5`  
//     Explanation: The number 12345 has 5 digits.  


const countDigit = (number) =>{
    if(number===0) return 1
    let count = 0
    number = Math.abs(number)
    while(number > 0){
        count++
        number = Math.floor(number/10)  // using floor to round down becoz 120/10 = 12.0 , to remove floating points using Math.floor()
    }
    return count
}
const result = countDigit(-12345)
console.log(result)


// 2nd approach ------->> return String(num).split('').length