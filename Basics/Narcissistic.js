// **Description**: Write a program to check if a number is a narcissistic number (where the sum of its digits raised to the power of the number of digits equals the number itself).  
//     **Example**:  
//     Input: `number = 153`  
//     Output: `Narcissistic Number`  
//     Explanation: 153 is a narcissistic number because 1^3 + 5^3 + 3^3 = 153. 

const countDigit = (number) =>{
    let count = 0
    number = parseInt(number)
    while(number > 0){
        count++
        number = Math.floor(number/10)
    }
    return count
}

const Narcissistic = (number) =>{
    number = Math.floor(number)
    let sum =0
    let copy = number
    const numberOfDigits = countDigit(number)
    while(copy>0){
        let lastDigit = copy % 10
        sum += lastDigit**numberOfDigits
        copy = Math.floor(copy/10)
    }
    if(sum === number){
        return `Narcissistic Number`  
    }else{
        return `Not a Narcissistic Number`
    }
}
const result = Narcissistic(153)
console.log(result)