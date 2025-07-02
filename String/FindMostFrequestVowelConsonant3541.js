var maxFreqSum = function(s) {
    let vowels = ['a','e','i','o','u']
    let map = new Map()
    for(let char of s){
        map.set( char,  (map.get(char)||0)+1  )
    }
    let maxV = 0, maxC = 0
    for(let [key,value] of map){
        if(vowels.includes(key) && value>maxV) maxV = value
        else if(!vowels.includes(key) && value > maxC) maxC = value
    }
    return maxV + maxC
};
console.log(maxFreqSum("successes"))