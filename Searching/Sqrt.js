// use binary search to find square root of a number n
const sqrt = (num) =>{
    if(num<2) return num
    let start = 2, end = Math.floor(num/2)
    while(start < end){
        let mid = Math.floor(start + (end-start)/2)
        if(mid ** 2 === num) return mid
        else if(mid ** 2 > num){
            end = mid-1
        }else{
            start = end+1
        }
    }
    return end
}
console.log(sqrt(8))