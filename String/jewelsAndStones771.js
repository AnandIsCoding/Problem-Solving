var numJewelsInStones = function(jewels, stones) {
    let count = 0, set = new Set(jewels)
    for(let char of stones){
        if(set.has(char)) count = count + 1
    }
    return count
};
console.log(numJewelsInStones("aA","aAAbbbb"))  // 3