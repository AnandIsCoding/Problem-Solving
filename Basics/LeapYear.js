// If the year is divisible by 4, proceed to the next step.
// If the year is divisible by 100, check if it is also divisible by 400.
// If it is divisible by 400, it's a leap year.
// If it is not divisible by 400, it's not a leap year.
// If the year is not divisible by 4, it's not a leap year.
const checkLeap = (year) =>{
    year = Number(year)
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const result = checkLeap(2024)
console.log(result)
