// using inbuilt substr function of string ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
const return2ndHalfOfString = (str) =>{
    let part = '', mid = Math.floor(str.length/2)-1
    return str.substr(mid)
}
console.log(return2ndHalfOfString('abcdefgh'))


// using while loop ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
const return2ndHalfOfStringUsingWhileLoop = (str) =>{
    let part = '', start = Math.floor(str.length/2)-1
    while(start < str.length-1){
        part += str[start]
        start++
    }
    return part
}
console.log(return2ndHalfOfStringUsingWhileLoop('abcdefgh'))


// using for loop ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

const return2ndHalfOfStringUsingForLoop = (str) =>{
    let part = '', start = Math.floor(str.length/2)
    for(let i=start;i<str.length;i++){
        part += str[i]
    }
    return part
}
console.log(return2ndHalfOfStringUsingForLoop('abcdefgh'))