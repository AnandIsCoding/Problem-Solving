const nextGreatestLetter = (letters,target) => {
    letters = [...new Set(letters)]
    for(let ch of letters){
        if(ch > target){
            return ch;
        }
    }
    return letters[0];
}
console.log(nextGreatestLetter(["c","f","j"],'c'))  //f
console.log(nextGreatestLetter(["x","x","y","y"],'z'))  //x
console.log(nextGreatestLetter(["c","f","j"],"a"))  //c