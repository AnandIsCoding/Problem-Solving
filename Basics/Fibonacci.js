//   **Description**: Write a program to generate the Fibonacci series up to a       given number.  
//   **Example**:  
//   Input: `limit = 10`  
//   Output: `[0, 1, 1, 2, 3, 5, 8]`  
//   Explanation: The Fibonacci series up to 10 is generated as [0, 1, 1, 2, 3, 5,  8]. 


//using while loop
const fibonacci = (limit) =>{
    let first = 0
    let sequence = [first]
    let second = 1
    if (limit <= 0) return []
    if(limit > 0) sequence.push(second) 
    while(true){
        let next = 0

        next += first + second
        if(next > limit) break;
        sequence.push(next)
        first = second
        second = next
    }
    return sequence
}
const result = fibonacci(10)
console.log(result)


//using for loop
const Fibo = (limit) =>{
    let first = 0
    let second = 1
    let result = [first]
    if(limit > 0) result.push(second)
    for(let i=1;;i++){
        let next = first + second
        if(next > limit ) break;
        result.push(next)
        first = second
        second = next
    }
    return result;
}
const answer = Fibo(10)
console.log(answer)


