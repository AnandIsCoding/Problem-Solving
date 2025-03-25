const isPallindrome = (n) =>{
    n = n.toString()
    let start=0,end=n.length-1
    while(start<=end){
        if(n[start] !== n[end]){
            return false;
        }
        start++
        end--
    }
    return true
}
console.log(isPallindrome(12345))   // false
console.log(isPallindrome(12321))   // true
console.log(isPallindrome(1451))    // false