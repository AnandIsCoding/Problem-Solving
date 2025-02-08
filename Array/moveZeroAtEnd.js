// using filtering and destructure 🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰

 moveZeroAtEnd = (arr) =>{
    let allZero = arr.filter((elem)=> elem === 0 )
    let allNonZero = arr.filter((elem)=> elem !== 0 )
    return [...allNonZero,...allZero]
}
console.log(moveZeroAtEnd([1,2,0,0,0,2,30,4,0,4,0,5,0]))


// using for loop and splice push 🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰
const moveZeroAtEndUsingForLoop = (arr) =>{
    for(let i=arr.length-1;i >= 0;i--){
        if(arr[i] === 0 ){
            arr.splice(i,1)
            arr.push(0)
        }
    }
    return arr
}
console.log(moveZeroAtEndUsingForLoop([1,2,0,0,0,2,30,4,0,4,0,5,0]))