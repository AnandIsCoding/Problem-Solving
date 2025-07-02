const reverseString = (s) =>{
    let start = 0 , end = s.length-1
    while(start<=end){
        [s[start],s[end]] = [s[end],s[start]]
        start++
        end--
    }
    return s
}
console.log(reverseString(['h','e','l','l','o']))


// using for loop

const reverseString2 = (s) =>{
    let n = s.length
    for(let i=0;i<Math.floor(n/2);i++){
        [s[i],s[n-1-i]] = [s[n-1-i],s[i]]
    }
    return s
}
console.log(reverseString2(['h','e','l','l','o']))

//     i    n-1-i
//    ⬇️   ⬇️
//     0    5-1-0 = 4
//     1    5-1-1 = 3
//     2    5-1-2 = 2
 

