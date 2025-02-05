//find duplicate and unique elemnets in the given array
const findDuplicates = (arr) =>{
    let duplicates = [], unique = []
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] === arr[j]&& !duplicates.includes(arr[i])){
                duplicates.push(arr[i])
            }
        }
    }
    for(let i=0;i<arr.length;i++){
        if(!duplicates.includes(arr[i])){
            unique.push(arr[i])
        }
    }
    return {duplicates, unique}
}
console.log(findDuplicates([4,5,6,5,4,4,7,9,3,0]))  // { duplicates: [ 4, 5 ], unique: [ 6, 7, 9, 3, 0 ] }  🚀