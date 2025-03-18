const stringCompression = (chars) =>{
    let result = ''
    for(let i=0;i<chars.length;i++){
        let count = 1
        for(let j=i+1;j<chars.length;j++){
            if(chars[i] === chars[j]){
                count++
            }else{
                break;
            }
        }
        if(![...result].includes(chars[i])){
            if(count>1){
                result += `${chars[i]}${count}`
            }else{
                result += chars[i]
            }
        }
    }
    return result
}
console.log(stringCompression(["a","a","b","b","c","c","c"]))
console.log(stringCompression(["a"]))
console.log(stringCompression(["a", "a", "b", "a"]))





// chars = ["a","a","b","b","c","c","c"]

// Output:
// Return 6, and the first 6 characters of the input charsay should be: ["a","2","b","2","c","3"]