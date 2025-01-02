// **Description**: Write a program to find the Fibonacci number at a specific position.  
//     **Example**:  
//     Input: `position = 5`  
//     Output: `5`  
//     Explanation: The Fibonacci number at position 5 is 5 (sequence: 0, 1, 1, 2, 3, 5).  

const FibonaccPosition = (position) =>{
    let first = 0, second =1
    for(let i=1;i<position;i++){
        let third = first + second
        first = second
        second = third
    }
    return second
}
let result = FibonaccPosition(5)
console.log(result)