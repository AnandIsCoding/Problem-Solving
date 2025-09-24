Array.prototype.myFind = function(cb){
    if(!cb){
        throw new Error('Uncaught Error : undefined is not a function')
    }
    if(typeof cb !== 'function'){
        throw new Error('CB must be a function')
    }
    let arr = this
    for(let i=0;i<arr.length;i++){
        let flag = cb(arr[i], i ,arr)
        if(flag) return arr[i]
    }
    return 'Undefined: not found'
}

let arr = [2,3,4,5,6]
const found = arr.myFind((element) => element > 4);
console.log(found)  //  5


