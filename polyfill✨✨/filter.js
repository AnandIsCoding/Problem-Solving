Array.prototype.myFilter = function(cb){
    if(!cb){
        throw new Error('Uncaught Error : undefined is not a function')
    }
    if(typeof cb !== 'function'){
        throw new Error('CB must be a function')
    }
    let arr = this
    let result = []
    for(let i=0;i<arr.length;i++){
        let val = cb(arr[i], arr )
        if(val === true) result.push(arr[i])
    }
    return result
}

const ans = [1,2,3,4].myFilter((item)=>item%2===0)
console.log(ans)