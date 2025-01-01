// If the year is divisible by 4, proceed to the next step.
// If the year is divisible by 100, check if it is also divisible by 400.
// If it is divisible by 400, it's a leap year.
// If it is not divisible by 400, it's not a leap year.
// If the year is not divisible by 4, it's not a leap year.
const checkLeap = (year) =>{
    year = Number(year)
    if(year % 4 === 0 ){
        if(year % 100 === 0 ){
            if(year % 400 === 0){
                return ` ${year} is a leap year`
            }else{
                return ` ${year} is not a leap year`
            }
        }else{
            return ` ${year} is a leap year`
        }
    }else{
        return `${year} is not a leap year`
    }
}

const result = checkLeap(2024)
console.log(result)
