const enchantedArrayShuffling = (arr) =>{
    let sortedArr = [...arr].sort((a,b)=>a-b), ans = []
    let start=0,end=sortedArr.length-1
    while(start<=end){
        ans.push(sortedArr[start])
        if(start !== end) ans.push(sortedArr[end])
        start++
        end--
    }
    return ans
  }
  console.log(enchantedArrayShuffling([5, 1, 8, 3, 10, 2])) // [ 1, 10, 2, 8, 3, 5 ]
  console.log(enchantedArrayShuffling([4, 9, 2, 14, 7])) // [ 2, 14, 4, 9, 7 ]