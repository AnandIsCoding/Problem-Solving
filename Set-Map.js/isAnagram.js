const isAnagram = (str1,str2) =>{
    if(str1.length !== str2.length) return false
    let map1 = new Map()
    let map2 = new Map()
    for(let i=0;i<str1.length;i++){
        map1.set(str1[i],    (map1.get(str1[i]) || 0) +1 )
    }
    for(let i=0;i<str2.length;i++){
        map2.set(str2[i],    (map2.get(str2[i]) || 0) +1 )
    }
    for(let [key,value] of map1){
        if(map2.get(key) !== value){
            return false
        }
    }
    return true
}
console.log(isAnagram('listen','silent'))   // true
console.log(isAnagram('lissen','siient'))   // false
console.log(isAnagram('anagram','nagaram')) // true



//  return str1.split('').sort().join() === str2.split('').sort().join()