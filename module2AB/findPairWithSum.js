const findPairWithSum = (arr,target) =>{
    let map = new Map()
    for(let i=0;i<arr.length;i++){
        let difference = target - arr[i]
        if(map.has(difference)){
            return [difference,arr[i]]
        }
        map.set(arr[i],i )
    }
    return []
}
console.log(findPairWithSum([3, 7, 10, 2, 9, 1],12))    // [ 10, 2 ]
console.log(findPairWithSum([2, 7, 11, 15], 9))  // [ 2, 7 ]


