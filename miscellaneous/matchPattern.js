// const mainString = "ABABABCABABABC";
// const pattern = "ABABC";


const find = (mainString, pattern) =>{
    let ans = []
    for(let i=0;i<=mainString.length-pattern.length;i++){
        if(mainString.substring(i,i+pattern.length) === pattern){
            ans.push(i)
        }
    }
    return ans
}
console.log(find("ABABABCABABABC","ABABC"))