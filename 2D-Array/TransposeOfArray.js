// ✅ If the original matrix is m × n (m rows, n columns), the transposed matrix will be n × m (n rows, m columns).
// ✅ The number of rows and columns does not need to be the same, unless it's a square matrix.
// ✅ The transpose operation swaps arr[i][j] with arr[j][i].

const printTranspose = (arr) =>{
    let transpose = []
    for(let i=0;i<arr[0].length;i++){
        transpose[i] = []
        for(let j=0;j<arr.length;j++){
           transpose[i][j] = arr[j][i]
        }
    }
    return transpose
}
console.log(printTranspose([ [1, 2, 3],
                             [4, 5, 6],
                             [7, 8, 9], 
                             [6, 9, 2]    ]))