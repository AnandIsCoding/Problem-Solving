// Input: [3, 2, 3, 4, 5]
// Output: [3, 1]

const findDuplicate =(arr) =>{
    let map = new Map()
    for(let i=0;i<arr.length;i++){
        map.set(arr[i], (map.get(arr[i]) || 0 )+1)
    }
    // Check for duplicate and missing numbers
    let duplicate=-1,missing=-1
    for(let i=1;i<=arr.length;i++){
        if(map.get(i) > 1) duplicate = i
        if(!map.has(i)) missing = i
    }
    return [duplicate,missing]
};
console.log(findDuplicate([3,2,5]))