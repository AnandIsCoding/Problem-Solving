// **Description**: Write a program to count vowels and consonants in a given string.  
// **Example**:  
// Input: `string = "hello world"`  
// Output: `Vowels: 3, Consonants: 7`  
// Explanation: "hello world" contains 3 vowels (e, o, o) and 7 consonants (h, l, l, w, r, l, d). 

const countVowelsConsonants = (str) =>{
    let vowelcount = 0, consonantcount = 0
    let vowels = 'aeiou'
    str = str.toLowerCase()
    for(let letter=0;letter<str.length;letter++){
        if(vowels.includes(str[letter])){
            vowelcount++
        }else{
            let character = str[letter]
            if(character >= 'a' && character <= 'z' || character >= 'A' && character <= 'Z') consonantcount++
        }
    }
    return `Vowels: ${vowelcount}, Consonants: ${consonantcount}`
}
const result = countVowelsConsonants ('hello world')
console.log(result)