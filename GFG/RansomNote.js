function canConstruct(ransomNote, magazine) {
    // Your code goes here
    for(let char of ransomNote){
        let index = magazine.indexOf(char)
        if(index == -1){
            return false
        }
        magazine = magazine.slice(0,index) + magazine.slice(index+1)
    }
    return true
};
console.log(canConstruct('aa','ab'))  // false
console.log(canConstruct('aa','aab')) // true