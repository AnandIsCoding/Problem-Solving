function isIsomorphic(s, t) {
    // Your code goes here
    if(s.trim().length !== t.trim().length) return false
    let mapS = new Map(), mapT = new Map()
    for(let i=0;i<s.length;i++){
        if((mapS.has(s[i]) && mapS.get(s[i]) !== t[i]) || (mapT.get(t[i]) && mapT.get(t[i]) !== s[i])){
            return false
        }
        mapS.set(s[i], t[i])
        mapT.set(t[i], s[i])
    }
    return true
}
console.log(isIsomorphic('egg','add'))