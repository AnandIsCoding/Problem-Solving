const star = (row) =>{
    for(let i=0;i<row;i++){
        let st = ''
        for(let j=0;j<i+1;j++){
            st += ' * '
        }
        console.log(st)
    }
}
star(5)

//       * 
//       *  * 
//       *  *  * 
//       *  *  *  * 
//       *  *  *  *  * 