//  **Description**: Write a program to find the sum of all odd numbers within a given range.  
//     **Example**:  
//     Input: `range = [1, 10]`  
//     Output: `25`  
//     Explanation: The sum of odd numbers between 1 and 10 is 1 + 3 + 5 + 7 + 9 = 25.  


const sumOfEvenOdd = (start, end) =>{
    let sumOfEven = 0, sumOfOdd = 0
    for(let i=start;i<=end;i++){
        if(i %2 === 0){
            sumOfEven += i
        }else{
            sumOfOdd += i
        }
    }
    return ` sum of Even numbers in range is ${sumOfEven} ✌️ \n and sum of odd numbers in range is ${sumOfOdd}✌️`
}
const result = sumOfEvenOdd(1,10)
console.log(result)