Array.prototype.iterateEach = function(cb){
    if(!cb){
       throw new Error('Uncaught Error : undefined is not a function')
    }
    if(typeof cb !== 'function'){
        throw new Error('CB must be a function')
    }
    let arr = this
    for(let i=0;i<arr.length;i++){
        cb(arr[i], i , arr)
    }
}

let myArray = [1,2,3]

myArray.iterateEach((val)=>{
    console.log(val * 2)
})

//      2
//      4
//      6