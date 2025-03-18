function utopianTree(n) {
    // Your code goes here
    // spring double in height *2 , every summer grows aditional meter +1
    let ans = 1
    for(let i=1;i<=n;i++){
      if(i%2 !== 0){
        ans = ans * 2
      }else{
        ans = ans + 1
      }
    }
    return ans
  }

  console.log(utopianTree(4))  // 7
  console.log(utopianTree(0))  // 1