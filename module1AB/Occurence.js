function countOccurrences(str, char) {
    // Write your code here
       //input validation
    if (typeof str !== 'string' || typeof char !== 'string' || char.length !== 1) {
        return 'Input string must be a string and char should be a single character that need to match';
    }
    // regExp with global search flag, i for case insensitive
    const regex = new RegExp(char, 'g'); 
    const matches = str.trim().match(regex);  // Find all matches
    return matches ? matches.length : 0; // Return the number of matches, or 0 if no matches are there
}
console.log(countOccurrences("Almabetter", "a")); // 1
console.log(countOccurrences("hello world", "l")); // 3
console.log(countOccurrences("Elephant", "E")); // 1
console.log(countOccurrences("hello world", "w")); // 1
console.log(countOccurrences("hello", "he")); // Input parameters must be a string and char should be a single character

// Do not modify the below lines
module.exports = { countOccurrences };