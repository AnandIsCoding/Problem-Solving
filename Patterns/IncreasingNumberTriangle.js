const star = (row) =>{
    for(let i=0;i<row;i++){
        let str = ''
        for(let j=1;j<=i+1;j++){
            str += j 
        }
        console.log(str)
    }
}
star(5)

//      1 
//      1 2
//      1 2 3
//      1 2 3 4
//      1 2 3 4 5