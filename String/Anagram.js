// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. return true if 2 strings are anagram ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐



let checkAnagram = (str1,str2) =>{
    return str1.split('').sort().join('') == str2.split('').sort().join('')
    //console.log(str1.split('').sort().join(''))
    //console.log(str2.split('').sort().join(''))
}
console.log(checkAnagram('listen', 'silent'))   // true
console.log(checkAnagram('listenn', 'silentn')) // true
console.log(checkAnagram('listenn', 'silentn'))  //true
console.log(checkAnagram('cat', 'rat'))          // false

