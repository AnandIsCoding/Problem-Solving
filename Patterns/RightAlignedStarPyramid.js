const star = (row) =>{
    for(let i=0;i<row;i++){
       let str = ''
       for(let j=0;j<row-i-1;j++){
           str += ' '
       }
       for(let k=0;k<i+1;k++){
           str += '*'
       }
       
       console.log(str)
    }
}
star(5)

//          *
//         **
//        ***
//       ****
//      *****