//using loops

let Union = (arr1, arr2) =>{
    let uniqueUnion = []
    for(let i=0;i<arr1.length;i++){
        if(!uniqueUnion.includes(arr1[i]) ){
            uniqueUnion.push(arr1[i])
        }
    }
    for(let i=0;i<arr2.length;i++){
        if(!uniqueUnion.includes(arr2[i])){
            uniqueUnion.push(arr2[i])
        }
    }
    return uniqueUnion    
}
console.log(Union([1,2,3,4,8],[2,6,7,8]))   //[ 1, 2, 3, 4, 8, 6, 7 ]



//using js Set()
let UnionUsingSet = (arr1, arr2) =>{
    let set = new Set([...arr1, ...arr2])   
    return set
    
}
console.log(UnionUsingSet([1,2,3,4,8],[2,6,7,8]))   //Set(7) { 1, 2, 3, 4, 8, 6, 7 }




// arr1 = [1, 2, 3, 4, 8]
// arr2 = [2, 6, 7, 8]

// Union (Unique Elements from Both Arrays)
// Output: [1, 2, 3, 4, 8, 6, 7]