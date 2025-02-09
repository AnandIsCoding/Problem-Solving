//reverses a specific part of the string from index start to end.


const reversePartOfString = (str,start, end) =>{
    str = str.split('')
    while(start <= end){
        [arr[start], arr[end]] = [arr[end], arr[start]]; 
        start++
        end--
    }
    return str.join('')
}
console.log(reversePartOfString('Anandkumarjha',4,8 ))   //  Ananamukdrjha