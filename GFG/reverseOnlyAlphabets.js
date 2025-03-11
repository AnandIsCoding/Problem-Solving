const reverseAlphabets = (str) =>{
        let start=0, end=str.length-1
        arr = str.split('')
        const isAlpha = (char) => /^[a-zA-Z]$/.test(char);
        while(start<end){
            if(isAlpha(arr[start])){
                start++
            }
            if(isAlpha(arr[end])){
                end--
            }
            [arr[start], arr[end]] = [arr[end], arr[start]]
            start++
            end--
        }
        return arr.join('')
}

console.log(reverseAlphabets('ab-cd'))


// Given a string s, reverse only all the vowels in the string and return it.
//The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

var reverseVowels = function (s) {
    // Your code goes here
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    s = s.split('')
    let start = 0, end = s.length - 1
    while (start < end) {
        if (!vowels.has(s[start])) {
            start++
        } else if (!vowels.has(s[end])) {
            end--
        } else {
            [s[start], s[end]] = [s[end], s[start]]
            start++
            end--
        }
    }
    return s.join('')
};
console.log(reverseVowels("leetcode"))  // "leotcede"