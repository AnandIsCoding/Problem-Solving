// Input: s = 
// Output: 6
// Explanation: The last word is "joyboy" with a length of 6.

const lengthOfLastWord = (str) =>{
    return str.trim().split(' ').pop().length
}
console.log(lengthOfLastWord("luffy is still joyboy"))