const pivot = (n) =>{
    let arr = n.toString().split('')
    for(let i=0;i<arr.length;i++){
        let leftSum=0,rightSum=0
        leftSum = arr.slice(0,i).reduce((acc,curr)=>acc+ +curr,0)
        rightSum = arr.slice(i+1,arr.length).reduce((acc,curr)=>acc+ +curr,0)
        if(leftSum === rightSum){
            return i
        }
    }
    return -1
}
console.log(pivot(173656))
console.log(pivot(1))