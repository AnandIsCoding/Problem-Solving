let Pair = (arr) =>{
    let allPair = []
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            allPair.push(`(${arr[i]} ${arr[j]} )`)
        }
    }
    return allPair.join();
}
console.log(Pair([1,2,3,4,8]))




// (1 2 ),(1 3 ),(1 4 ),(1 8 ),(2 3 ),(2 4 ),(2 8 ),(3 4 ),(3 8 ),(4 8 )