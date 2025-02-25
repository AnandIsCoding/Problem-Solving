const fibonacci = (n) =>{
    //base case
    if(n === 1) return 0
    if(n === 2) return 1
    //recursivecall
    return fibonacci(n -1) + fibonacci(n-2)
}
console.log(fibonacci(7))   // 8