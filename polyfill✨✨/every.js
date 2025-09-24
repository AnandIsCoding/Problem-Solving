Array.prototype.myEvery = function(cb){
    if(!cb){
        throw new Error('Uncaught Error: undefined i not a function')
    }
    if(typeof cb !== 'function'){
        throw new Error('CB must be a function')
    }
    let arr = this
    for(let i=0;i<arr.length;i++){
        let flag = cb(arr[i], arr)
        if(!flag) return false
    }
    return true
}

let array = [2,4,6,7]
let isAllEven = array.myEvery((elem)=> elem % 2 === 0 )
console.log(isAllEven)