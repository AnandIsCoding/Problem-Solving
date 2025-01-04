function isPalindrome(str) {
    //validating str input
    if (typeof str !== "string") {
        return false; // Return false for non-string inputs
    }
    // convert string to lower case
    str = str.toLowerCase()
    const cleanedStr = str.replace(/[^a-z0-9]/g, "");
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}
console.log(isPalindrome('787')); // true
console.log(isPalindrome('hello')); // false
console.log(isPalindrome('Madam, in Eden, I’m Adam')); // true
console.log(isPalindrome('racEcaR')); // true