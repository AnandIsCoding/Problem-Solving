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


// using hashmap 💕💕💕💕💕💕💕💕💕💕💕💕

const isAnagram = (str1,str2) =>{
    let map1 = new Map(), map2 = new Map()
    for(let i=0;i<str1.length;i++){
        map1.set(str1[i],(map1.get(str1[i]) || 0) + 1)
    }
    for(let i=0;i<str2.length;i++){
        map2.set(str2[i],(map2.get(str2[i]) || 0) + 1)
    }
    // Compare character frequencies in both maps
    for(let [key,value] of map1){
        if(map2.get(key) !== value){
            return false
        }
    }
    return true
 }
 console.log(isAnagram('silent','listen'))
 console.log(isAnagram('anagram','nagaram'))
 console.log(isAnagram('the','thi'))
 

