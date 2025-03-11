const longestPallindromicSubstring = (str) =>{
    function isPallindrome(s,start,end){
        while(start<end){
            if(s[start] !== s[end]){
                return false
            }
            start++
            end--
        }
        return true
    }
    
    // loop and find all substring and check if pallindrome
    let answer =''
    for(let i=0;i<str.length;i++){
        for(let j=i;j<str.length;j++){
            if(isPallindrome(str,i,j)){
                let substring = str.slice(i,j+1)
                if(substring.length > answer.length){
                    answer = substring
                }
            }
        }
    }
    return answer
}
console.log(longestPallindromicSubstring("babad"))    // bab
console.log(longestPallindromicSubstring("bb"))       // bb



// Problem: Given a string s, return the longest palindromic substring within s. A palindromic substring is a sequence of characters that reads the same forward and backward.
//  If there are multiple longest palindromes with the same length, return any one of them.