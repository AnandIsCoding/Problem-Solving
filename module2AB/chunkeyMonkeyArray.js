const chunkArrayInGroups = (arr,N) =>{
    let ansArray = []
    for(let i=0;i<arr.length;i=i+N){
        ansArray.push(arr.slice(i,i+N))
    }
    return ansArray
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"],N = 2))  // [ [ 'a', 'b' ], [ 'c', 'd' ] ]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5],N = 3))  // [ [ 0, 1, 2 ], [ 3, 4, 5 ] ]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], N = 2)) // [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ]