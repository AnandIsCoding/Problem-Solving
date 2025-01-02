let checkPrime = (number) =>{
    number = Number(number)
    if(number === 0){
        return '0 is not a prime nor composite number'
    }
    if(number === 1){
        return ` ${number} is a Composite number`
    }
    if(number === 2){
        return ` ${number} is the smallest Prime number`
    }
    for(let i=2;i <= Math.sqrt(number);i++){
        if(number % i === 0){
            return ` ${number} is a Composite number`
        }
    }
    return ` ${number} is a Prime number`
}

const result = checkPrime(15)
console.log(result)