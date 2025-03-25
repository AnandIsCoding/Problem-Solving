const findDuplicateMissing = (arr) =>{
    let map = new Map() , ans = [], n = arr.length
    for(let ch of arr){
        map.set(ch,(map.get(ch)||0)+1)
        if(map.get(ch) > 1) ans.push(ch)
    }
    arr = [...new Set(arr)]
    let expectedSum = (n * (n+1))/2
    let actualSum = arr.reduce((curr,acc)=>curr+acc,0)
    ans.push(expectedSum-actualSum)
    return ans
}
console.log(findDuplicateMissing([1, 2, 2, 4]))
console.log(findDuplicateMissing([1, 2, 3, 4, 5, 6, 7, 8, 8]))
console.log(findDuplicateMissing([3, 2, 3, 4, 5]))