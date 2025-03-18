const countDistinctInteger = (arr) =>{
    let set = new Set(arr)
    for(let num of arr){
        set.add(parseInt(num.toString().split('').reverse().join('')))
    }
    return set.size
}
console.log(countDistinctInteger([1,13,10,12,31]))