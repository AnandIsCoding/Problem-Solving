// Input: s = "()))(("
// Output: 4
// Explanation: In order to make the string "()))((" valid, Lucy can add an opening parenthesis at the beginning,
// a closing parenthesis after the first two opening parentheses,
// an opening parenthesis before the last two closing parentheses,
// and a closing parenthesis at the end. This results in the valid string "((()))"


const minMoves = (s) =>{
    let open = 0, close = 0
    for(let i=0;i<s.length;i++){
        if(s[i] === '('){
            open ++
        }else if(s[i] === ')'){
            if(open > 0){
                open--
            }else{
                close++
            }
        }
    }
    return open+close
}
console.log(minMoves('()))(('))
console.log(minMoves('(()'))
console.log(minMoves('())'))