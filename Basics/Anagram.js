//  **Description**: Write a program to check if two strings are anagrams.  
//     **Example**:  
//     Input: `string1 = "listen"`, `string2 = "silent"`  
//     Output: `True`  
//     Explanation: "listen" and "silent" are anagrams of each other.  


const checkAnagram = (string1, string2) =>{
    if(string1.length !== string2.length) return false
  string1 = string1.toLowerCase().split('').sort().join('')
  string2 = string2.toLowerCase().split('').sort().join('')
  console.log(string1 + '  ' + string2)
  return string1 == string2
}

const result = checkAnagram('listen', 'silent')
console.log(result)