const twoSum = (arr,target) =>{
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        let required = target - arr[i]
        if(map.has(required)){
            return [i,map.get(required)]
        }
        map.set(arr[i], i)
    }  
    return [-1, -1]
}
console.log(twoSum([2,3,6,8,9,1,1,10,0],10))



