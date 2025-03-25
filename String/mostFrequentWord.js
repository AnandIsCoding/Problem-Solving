// Do not remove nor make any changes in  main() function
function main() {
    var arr = readLine().split(" ").map(x => (x));
    console.log(mostFrequentWord(arr));
}
function mostFrequentWord(arr) {
    let map = new Map()
    for(let i=0;i<arr.length;i++){
        map.set(arr[i],    (map.get(arr[i]) || 0) +1  )
    }
    let maxCount = -Infinity, ans =''
    for(let [key,value] of map){
       if(maxCount <= value){
        maxCount = value
        ans = key
       }
    }
    return ans
}