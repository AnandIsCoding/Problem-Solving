const star = (row,col) =>{
    for(let i=0;i<row;i++){
        let st = ''
        for(let j=0;j<col;j++){
            st += ' * '
        }
        console.log(st)
    }
}
star(5,5)

//       *  *  *  *  * 
//       *  *  *  *  * 
//       *  *  *  *  * 
//       *  *  *  *  * 
//       *  *  *  *  * 