const star = (row) =>{
    for(let i=0;i<row;i++){
       let str = ''
       for(let j=0;j<row-i;j++){
           str += j+1
       }
       console.log(str)
    }
}
star(5)

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1