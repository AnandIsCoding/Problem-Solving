function isAlphabet(str) {
    return /^[A-Za-z]+$/.test(str);
}

// Example usage:
console.log(isAlphabet("Hello"));    // true
console.log(isAlphabet("Hello123")); // false
console.log(isAlphabet("Hi there")); // false (contains space)
console.log(isAlphabet(""));         // false (empty string)
console.log(isAlphabet("World"));    // true


//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------


function isConsonant(char) {
    return /^[B-DF-HJ-NP-TV-Zb-df-hj-np-tv-z]$/.test(char);
}

// Example usage:
console.log(isConsonant("b"));  // true
console.log(isConsonant("a"));  // false (vowel)
console.log(isConsonant("E"));  // false (vowel)
console.log(isConsonant("z"));  // true
console.log(isConsonant("3"));  // false (not a letter)
console.log(isConsonant(" "));  // false (space)



// remove spaces digits special symbols
replace(/[\d\s\W_]/g, '');
