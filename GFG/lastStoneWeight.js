const lastStoneWeight = (stones) =>{
    while(stones.length>1){
        stones = stones.sort((a,b)=>a-b)
        let last = stones.pop()
        let secondLast = stones.pop()
        if(last !== secondLast){
            stones.push(last - secondLast)
        }
    }
    return stones.length ? stones[0]:0
}
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]))


// You are given an array of stones where each stone has a certain weight. You repeatedly take the two heaviest stones and smash them together:

// If they have the same weight, both stones are destroyed.
// If they have different weights, the smaller stone is destroyed, and the remaining stone has a new weight equal to the difference of the two.
// This process continues until only one stone remains (or none). Your task is to return the weight of the last remaining stone, or 0 if there are no stones left.