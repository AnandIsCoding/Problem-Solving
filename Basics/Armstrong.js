// Input: `number = 153`  
// Output: `Armstrong Number`  
// Explanation: 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153.  
// todo : fetch lastdigit, calculate it's cube add it to addition = 0 atlast when number is not zero check if the number === addition

const checkArmstrong = (number) =>{
    number = Number(number)
    let addition = 0
    let num = number
    while(num > 0){
        let lastDigit = num % 10
        addition += (lastDigit*lastDigit*lastDigit)
        num = Math.floor(num/10)
    }
    return addition === number
}
const result = checkArmstrong(153)
console.log(result === true ? `armstrong number` : `not an armstrong number`)