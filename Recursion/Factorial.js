const factorial = (n) =>{
    if(n < 0) return 'Please Enter a positive Number'
    //base case
    if(n===0) return 1
    // processing abd recursive case
    return n * factorial(n-1)
}
console.log(factorial(5))   // 120