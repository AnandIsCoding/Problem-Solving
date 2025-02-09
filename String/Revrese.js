// using split join ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
const reverseString = (str) =>{
    let rev = str.split('').reverse().join('')
    return rev
}
console.log(reverseString('Anand'))     //dnanA



// using for loop ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
const reverseStringUsingForLoop = (str) =>{
    let rev = ''
    for(let i=str.length-1;i>=0;i--){
        rev += str[i]
    }
    return rev
}
console.log(reverseStringUsingForLoop('Anand'))


// we can't modify inplace in strings because, strings are immutable in JavaScript, meaning you cannot modify them directly using str[start] = str[end]. , need to split and treat like array ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
const reverseStringUsingWhileLoop = (str) =>{
    str = str.split('')
    let start=0, end = str.length-1
    while(start < end){
        let temp = str[start]
        str[start] = str[end]
        str[end] = temp
        start++
        end--
    }
    return str.join('')
}
console.log(reverseStringUsingWhileLoop('Anand'))



