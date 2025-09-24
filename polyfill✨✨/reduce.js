Array.prototype.myReduce = function(cb, initialstate){
     if(!cb){
        throw Error('Cb missing')
    }
    let arr = this
    for(let i=0;i<arr.length;i++){
        let res = cb(initialstate, arr[i] , i , arr)
        initialstate = res
    }
    return initialstate
}
const arr = [1,2,3,4]
const sum = arr.myReduce((acc,curr)=>acc+curr, 0)
console.log(sum)  // 10