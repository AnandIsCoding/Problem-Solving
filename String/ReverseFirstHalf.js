const reverse1stHalf = (str) =>{
    let start = 0, end = Math.floor(str.length/2)-1
    str = str.split('')
    while(start < end){
        [str[start], str[end]] = [str[end], str[start]]
        start++
        end--
    }
    return str.join('')
}
console.log(reverse1stHalf('abcdefgh'))      // dcbaefgh