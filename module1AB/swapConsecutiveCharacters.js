module.exports = { swapConsecutiveCharacters };

function swapConsecutiveCharacters(str) {
    // Write your code inside this function only.
     //validation
    if(typeof str !== 'string'){
        return 'str must be string'
    }
    //converted string to array so that to mutate it
    str = str.split('')
    // i = i+2 increment so that after swapping 2 consecutive characters so that next it will swap next two
    for(let i=0;i<str.length;i=i+2){
        //swapping using 3rd variable
       let temp = str[i]
       str[i] = str[i +1]
       str[i+1] = temp
    }
    // converting again to string using join method typeof str.join() = string
    return str.join('')
}
console.log(swapConsecutiveCharacters("abcdef"))     //badcfe
console.log(swapConsecutiveCharacters("AlmaBetter")) //lAameBttre
console.log(swapConsecutiveCharacters(12345));    // str must be a string
console.log(swapConsecutiveCharacters(""));       // ""
console.log(swapConsecutiveCharacters("jk"));     //kj
