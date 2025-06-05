// custome lowercase uppercase

const upper = (s) =>{
    return String.fromCharCode(s.charCodeAt(0) - 32)
}
const lower = (s) =>{
    return String.fromCharCode(s.charCodeAt(0)+32)
}
console.log(' Uppercase is ---->>  ',upper('a'))
console.log(' Lowercase is ---->>  ',lower('A'))