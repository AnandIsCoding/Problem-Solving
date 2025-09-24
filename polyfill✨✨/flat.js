Array.prototype.myFlat = function () {
  let arr = this;
  let result = [];
  const flat = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flat(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  };
  return flat(arr);
};

console.log([1, 2, 3, [4, 5, 6, [7, 8, 9]]].myFlat());



//  ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨  Iterative   ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨

Array.prototype.myIterativeFlat = function(){
    let stack = [...this], result = []
    while(stack.length){
        let popped = stack.pop()
        if(Array.isArray(popped)){
            stack.push(...popped)
        }else{
            result.push(popped)
        }
    }
    return result.reverse()
   
}

console.log([1,2,3,[4,5,6,[7,8,9]]].myIterativeFlat())