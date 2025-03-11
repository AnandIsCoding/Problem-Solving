const isomorphic = (str1, str2) => {
    let map1 = new Map(); // Maps str1 → str2
    let map2 = new Map(); // Maps str2 → str1
    
    for (let i = 0; i < str1.length; i++) {
        let char1 = str1[i];
        let char2 = str2[i];
        
        // Check if mapping exists
        if ((map1.has(char1) && map1.get(char1) !== char2) || 
            (map2.has(char2) && map2.get(char2) !== char1)) {
            return false;
        }
        // Create new mapping
        map1.set(char1, char2);
        map2.set(char2, char1);
    }    
    return true;
}

console.log(isomorphic('paper', 'title')); // Output: true
console.log(isomorphic('foo', 'bar')); // Output: false
console.log(isomorphic('egg', 'add')); // Output: true
console.log(isomorphic('badc', 'baba')); // Output: false
