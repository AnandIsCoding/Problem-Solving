let Intersection = (arr1, arr2) =>{
    let common = []
    for(let i=0;i<arr1.length;i++){
        if(arr2.includes(arr1[i]) && !common.includes(arr1[i])){
            common.push(arr1[i])
        }
    }
    return common.length < 1 ? `no intersection elemnt found` : `intersection elements ==> ${common}`
}
console.log(Intersection([1,2,3,4,8],[2,6,7,8]))   // intersection elements ==> 2,8