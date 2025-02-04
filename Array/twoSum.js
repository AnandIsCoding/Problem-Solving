const twoSum = (arr,target) =>{
    let indexes = []
    for(let i=0;i<arr.length;i++){
        for(let j= i+1;j<arr.length;j++){
            if(arr[i] + arr[j] === target){
                indexes.push(`(${arr[i]}, ${arr[j]}) `)
            }
        }
    }
    return indexes.join('')
}
console.log(twoSum([2,3,6,8,9,1,1,10,0],10))



//   (2, 8) (9, 1) (9, 1) (10, 0)