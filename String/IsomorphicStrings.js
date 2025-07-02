var isIsomorphic = function(s, t) {
     if(s.length !== t.length) return false
     let sMap = new Map(), tMap = new Map()
     for(let i=0;i<s.length;i++){
         let charS = s[i], charT = t[i]
         if(sMap.has(charS) && (sMap.get(charS) ) !== charT) return false
         if(tMap.has(charT) && (tMap.get(charT) !== charS)) return false
         sMap.set(charS, charT)
         tMap.set(charT, charS)
     }
     return true
};

console.log(isIsomorphic('egg','add'))
console.log(isIsomorphic('foo','bar'))
console.log(isIsomorphic('badc','baba'))
