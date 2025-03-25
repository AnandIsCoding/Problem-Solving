const largestAltitude = function(gain){
    // Your code goes here
    let altitudes = [0]
    for(let i=0;i<gain.length;i++){
        altitudes[i+1] = altitudes[i] + gain[i]
    }
    return Math.max(...altitudes)
};
console.log(largestAltitude([9,-9,3,0,-2])) // 9

console.log(largestAltitude([-5,1,5,0,-7])) // 1

console.log(largestAltitude([ 0,-4,-7,-9,-10,-6,-3, -1])) // 0