// with 2 parameters sum and n 🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰

const sumOfNaturalNumbersWith2Parameter = (sum,n) =>{
    if(n===0){
        return sum
    }
    return sumOfN(sum+n,n-1)
}
console.log(sumOfNaturalNumbersWith2Parameter(0,5))

// with only one parameter 🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰

const sumOfNNaturalNumbersWith1Parameter = (n) =>{
    if(n===0){
        return 0
    }
    return n+sumOfN(n-1)
}
console.log(sumOfNNaturalNumbersWith1Parameter(5))




// sum of digits 🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰
const sumOfDigits = (n) =>{
    if(n === 0 )return n
    return (n % 10) + sumOfDigits(Math.floor(n/10))
}
console.log(sumOfDigits(1233))