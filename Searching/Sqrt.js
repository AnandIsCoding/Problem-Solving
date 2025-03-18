// use binary search to find square root of a number n
const squareRoot = (n) =>{
    let start=0,end=n, ans = -1
    while(start<=end){
        let mid = Math.floor(start+(end-start)/2)
        if(mid*mid === n){
            return mid
        }else if(mid*mid > n){
            end = mid - 1
        }else{
            ans = mid
            start = mid + 1
        }
    }
    return ans
}
console.log(squareRoot(16))   // 4