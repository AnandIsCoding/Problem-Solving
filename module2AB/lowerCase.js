// without using in built method
const lowerCase = (str) =>{
    let newStr = ''
    for(let i=0;i<str.length;i++){
        newStr += String.fromCharCode(str[i].charCodeAt(0) + 32)
    }
    return newStr
}
console.log(lowerCase('HELLO'))