function countVowels(str) {
    // array of vowels
    if(typeof str !== 'string') return 'Input string must be a string'
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
console.log(countVowels('Almabetter'))