// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. return true if 2 strings are anagram ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(str1, str2) {
    if(str1.length !== str2.length) return false
    // using inbuilt methods like split sort join ✅✅

    // return str1.split('').sort().join('') === str2.split('').sort().join('')

    // without using in built methods ✅✅
     let map = new Map()
    for(let i=0;i<str1.length;i++){
        map.set(str1[i] , (map.get(str1[i])||0)+1 )
    }
    for(let i=0;i<str2.length;i++){
        if(map.has(str2[i])){
            map.set(str2[i] , (map.get(str2[i]))-1   )
        }else{
            return false
        }
    }
    for(let [_,value] of map){
        if(value !== 0) return false
    }
    return true
};
 console.log(isAnagram('silent','listen'))
 console.log(isAnagram('anagram','nagaram'))
 console.log(isAnagram('the','thi'))
 

