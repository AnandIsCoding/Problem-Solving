const LargestRowSum = (arr) =>{
    let max = -Infinity
    let maxIndex = []
    for(let i=0;i<arr.length;i++){
        let currentRowSum=0
        for(let j=0;j<arr[i].length;j++){
            currentRowSum += arr[i][j]
            if(currentRowSum > max){
               max = currentRowSum
                maxIndex = [i]
            }
        }
        
    }
    return ` ${maxIndex}nd Row has max sum ->>> ${max} `
}
console.log(LargestRowSum([[3,4,11],[2,12,1],[7,8,7]]))  //  2nd Row has max sum ->>> 22 