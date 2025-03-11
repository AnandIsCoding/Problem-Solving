// 1  2  3  1   -----> 4


const houseRober = (arr) =>{
    if(arr.length === 0) return 0
    if(arr.length === 1) return arr[0]
    let roberyAmount1=0, roberyAmount2 = 0
    for(let i=0;i<arr.length;i+=2){
        roberyAmount1 += arr[i]
    }
    for(let i=1;i<arr.length;i+=2){
        roberyAmount2 += arr[i]
    }
    return Math.max(roberyAmount1,roberyAmount2)
} 
console.log(houseRober([1,2,3,1]))     // 4




const houseRobberusingRecursion = (arr,index) =>{
    if(index >= arr.length){
        return 0
    }
    let robberyAmount1 = arr[index] + houseRobberusingRecursion(arr,index+2)
    let robberyAmount2 = 0 + houseRobberusingRecursion(arr,index+1)
    return Math.max(robberyAmount1,robberyAmount2)
}
console.log(houseRobberusingRecursion([1,2,3,1],0))   //    4

