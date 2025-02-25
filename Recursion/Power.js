const pow = (n,exponent) =>{
    if(n === 0) return 0
    if(n===0 && exponent ===0) return 'Not Defined'
    if(exponent === 0) return 1
    return n * pow(n,exponent - 1)
}
console.log(pow(2,3))