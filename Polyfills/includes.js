if(!Array.prototype.myincludes){
    Array.prototype.myincludes = function(elem, from){
        from = from || 0
        let length = this.length
        for(let i=from;i<length;i++){
            if(this[i] == elem) return true
        }
        return false
    }
}
const arr = [3,4,5,6,7]
console.log(arr.myincludes(7))
console.log(arr.myincludes(9))