Array.prototype.mySome = function(cb){
    if(!cb){
        throw new Error('Uncaught Error: undefined is not a function')
    }
    if(typeof cb !== 'function'){
        throw new Error('CB must be a function')
    }
    let arr = this
    for(let i=0;i<arr.length;i++){
        let flag = cb(arr[i],arr)
        if(flag) return true
    }
    return false
}

let array = [1,2,3,5,7]
let containsEven = array.mySome((elem)=> elem%2 === 0 )
console.log(containsEven)