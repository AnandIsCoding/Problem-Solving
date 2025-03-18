const printWave = (arr) =>{
    let rowSize = arr.length, colSize = arr[0].length
    let answer = []
    for(let col = 0;col<colSize;col++){
        if(col % 2 !== 0){
            for(let row = rowSize-1;row >= 0;row--){
                answer.push(arr[row][col])
            }
        }else{
            for(let row = 0;row<rowSize;row++){
                answer.push(arr[row][col])
            }
        }
    }
    return answer
}
let matrix = [
  [ 1,  2,  3 ],
  [ 4,  5,  6 ],
  [ 7,  8,  9 ],
  [10, 11, 12 ]
];
console.log(printWave(matrix))

// [
//     1,  4, 7, 10, 11,
//     8,  5, 2,  3,  6,
//     9, 12
//   ]
  