const longestCommonPrefix = (str1,str2) =>{
    if(str1.length < 1 || str2.length<1) return 'One of the two string is empty'
    let ans = ''
    for(let i=0;i<Math.min(str1.length,str2.length);i++){
        if(str2[i] === str1[i]){
            ans += str1[i]
        }else{
            break;
        }
    }
    return ans
}
console.log(longestCommonPrefix('codehelp', 'codenothelp')); // Output: 'code'
console.log(longestCommonPrefix('apple', 'app')); // Output: 'app'
console.log(longestCommonPrefix('abc', 'xyz')); // Output: ''
console.log(longestCommonPrefix('', 'test')); // Output: 'One of the two strings is empty'