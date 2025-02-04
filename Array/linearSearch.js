//using array method indexof in javascript
const linearSearch = (nums, target) =>{
    return nums.indexOf(target)
}
console.log(linearSearch([1,2,3,7,8,45,78,2],2))


// return first index of target in the array
const linearSearch2 = (nums, target) =>{
    for(let i=0;i<nums.length;i++){
        if(nums[i] === target) return `target is present at index ----> ${i}`
    }
}
console.log(linearSearch2([1,2,3,7,8,45,78,2],2))


//return all index if target present at multiple index
const linearSearch3 = (nums, target) =>{
    let indexes = []
    for(let i=0;i<nums.length;i++){
        if(nums[i] === target){
            indexes.push(i)
        }
    }
    return indexes.length > 1 ? `target is present at multiple indexes ---> ${indexes} ` : `target is present at index ---> ${indexes} `
}
console.log(linearSearch3([1,2,3,7,8,45,78,2],2))