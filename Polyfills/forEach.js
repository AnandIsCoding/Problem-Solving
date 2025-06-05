if(!Array.prototype.myforEach){
    Array.prototype.myforEach = (usercallbackfn) =>{
        for(let i=0;i<this.length;i++){
            usercallbackfn(this[i],i)
        }
    }
}

let arr = [1,2,3]
arr.forEach((value)=>{
    console.log(value)
})