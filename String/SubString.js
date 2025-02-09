//using in built string method in js⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
const findSubString = (str,start, end) =>{
    return str.substr(start,end)
}
console.log(findSubString('Anandkumarjha',0,5 ))    // Anand



// using while loop ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
const findSubStringUsingWhileLoop = (str,start, end) =>{
    let part = ''
    while(start<end){
        part += str[start]
        start++
    }
    return part
 }
 console.log(findSubStringUsingWhileLoop('Anandkumarjha',0,5 ))