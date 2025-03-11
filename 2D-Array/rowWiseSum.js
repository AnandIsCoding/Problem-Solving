const rowWiseSum = (arr) =>{
    let result = []
    for(let i=0;i<arr.length;i++){
        let currentRowSum=0
        for(let j=0;j<arr[i].length;j++){
            currentRowSum += arr[i][j]
        }
        result.push(currentRowSum)
    }
    return result
}
console.log(rowWiseSum([[3,4,11],[2,12,1],[7,8,7]]))  // [ 18, 15, 22 ]



const columnWiseSum = (arr) => {
    let result = [];
    for(let j=0;j<arr.length;j++){
        let currentColSum = 0
        for(let i=0;i<arr.length;i++){
            currentColSum += arr[i][j]
        }
        result.push(currentColSum)
    }
    return result
}

console.log(columnWiseSum([[3, 4, 11], [2, 12, 1], [7, 8, 7]]));    // [ 12, 24, 19 ]