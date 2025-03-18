const findDuplicate =(arr) =>{
    let map = new Map(), ans =[]
    for(let i=0;i<arr.length;i++){
        map.set(arr[i], (map.get(arr[i]) || 0 )+1)
    }
    for(let [key,value] of map){
       if(value > 1){
           ans.push(key)
       }
    }
    return ans
}
console.log(findDuplicate([1,2,4,2]))