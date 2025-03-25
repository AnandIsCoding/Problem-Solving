const groupAnagrams = (strs) =>{
    strs = strs.split(' ')
    let map = new Map()
    for(let ch of strs){
        let sortedstr = ch.split('').sort().join('')
        if(!map.has(sortedstr)){
            map.set(sortedstr,[])
        }
        map.get(sortedstr).push(ch)
    }
    return Array.from(map.values())
}
console.log(groupAnagrams('eat tea tan ate nat bat'))