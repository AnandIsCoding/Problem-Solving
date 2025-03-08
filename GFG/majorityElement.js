// O(n^n)

const majorityElement = (arr) =>{
    let limit = Math.floor((arr.length)/3)
    let output = []
    for(let i=0;i<arr.length;i++){
        let count =1
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] === arr[j]){
                count = count+1
            }
        }
        if(count > limit && !output.includes(arr[i])){
            output.push(arr[i])
        }
    }
    return output
}
console.log(majorityElement([2,2,3,1,3,2,1,1]))
console.log(majorityElement([-5,3,-5]))
console.log(majorityElement([3,2,2,4,1,4]))

//      [ 2, 1 ]
//      [ -5 ]
//      []