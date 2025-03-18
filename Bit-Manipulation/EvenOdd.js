const OddEven = (n) =>{
    if((n & 1) == 0){
        return 'Even'
    }else{
        return 'Odd'
    }
}
console.log(OddEven(3))
console.log(OddEven(0))
console.log(OddEven(1))
console.log(OddEven(8))

