var strStr = function(haystack, needle) {
    // return haystack.indexOf(needle)
    let nl = needle.length
    for(let i=0;i<haystack.length;i++){
        let val = haystack.substring(i,nl+i)
        if(val === needle){
            return i
        }
    }
    return -1
};