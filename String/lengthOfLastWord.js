var lengthOfLastWord = function (s) {
  // using in built functions ✅✅
  // return s.trim().split(' ').pop().length

  // using for loop and trim ✅✅
  // s = s.trim()
  // let count = 0
  // for (let i = s.length - 1; i >= 0; i--) {
  //     if (s[i] !== ' ') count = count + 1
  //     else {
  //         return count
  //     }
  // }
  // return count

  // using while loop and own trimming ✅✅
  let n = s.length - 1,
    count = 0;
  while (n >= 0) {
    if (s[n] !== " ") {
      count = count + 1;
    } else if (count > 0) {
      break;
    }
    n = n - 1;
  }
  return count;
};
console.log(lengthOfLastWord("hello world"));

//      **Time Complexity
//      Using trim and split pop/length-1  ====>> O(n) + O(n) = O(n)
//      trim takes O(n) and splitting also takes O(n)
//      using for loop ===>  O(n)
//      **Space Complexity
//      during splitting we create a new array ====>> O(n)
//      using for loop O(1)
