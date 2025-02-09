const differentNeighbours = (str) =>{
    let count = 0;
    for(let i=0;i<str.length-1;i++){
        if(str[i] !== str[i+1] ){
            count++
        }
    }
    return count
}
console.log(differentNeighbours('abcdffhkk'))   // 6
console.log(differentNeighbours('abcd'))       // 3