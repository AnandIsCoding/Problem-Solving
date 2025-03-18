const binaryToDecimal = (binary) =>{
    let result = 0, power=0
    for(let i=binary.length-1;i>=0;i--){
       result += parseInt(binary[i]) * 2**power
        power++
    }
    return result
}
console.log(binaryToDecimal('011'))   // 3