const generatePascalsTriangle = (n) =>{
    let arr = new Array(n)
    for(let i=0;i<n;i++){
        arr[i] = new Array(i+1)
        for(let j=0;j<=i;j++){
            if(i===j || j===0){
                arr[i][j] = 1
            }else{
                arr[i][j] = arr[i-1][j-1] + arr[i-1][j]
            }
        }
    }
    return arr
}
console.log(generatePascalsTriangle(5))

 // note: observations :--->> when row and column ( i j ) are same tha arr[i][j] = 1
 //                            when column (j) is 0 than arr[i][j] = 1
 //                            else arr[i][j] = arr[i-1][j-1] + arr[i-1][j]     ,  prev row and column-1 + prev row and column
 

//               [
//                     [ 1 ],
//                     [ 1, 1 ],
//                     [ 1, 2, 1 ],
//                     [ 1, 3, 3, 1 ],
//                     [ 1, 4, 6, 4, 1 ]
//               ]    