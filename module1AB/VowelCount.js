function countVowels(str) {
    // Write your code here
    //input validation
    if(typeof str !== 'string') return 'Input string must be a string'
    // array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerStr = str.toLowerCase();
    let count = 0;

    for (let i = 0; i < lowerStr.length; i++) {
        if (vowels.includes(lowerStr[i])) {
            count++;
        }
    }
    return count;
}
console.log(countVowels('Almabetter')) //4

// Do not modify the below lines
module.exports = { countVowels };