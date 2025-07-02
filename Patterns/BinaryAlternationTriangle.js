const star = (row) =>{
    for(let i=0;i<row;i++){
        let str = ''
        for(let j=0;j<i+1;j++){
            if(j%2!==0 ) str+= 0
            else str += 1
        }
        console.log(str)
    }
    
}
star(5)

//       1 
//       1 0
//       1 0 1
//       1 0 1 0
//       1 0 1 0 1