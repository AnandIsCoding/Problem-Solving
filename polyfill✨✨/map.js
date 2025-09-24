Array.prototype.myMap = function (cb) {
  if (!cb) {
    throw new Error("Uncaught Error : undefined is not a function");
  }
  if(typeof cb !== 'function'){
        throw new Error('CB must be a function')
    }
  let arr = this;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let ans = cb(arr[i], i, arr);
    result.push(ans);
  }
  return result;
};

let myArray = [1, 2, 3];
let result = myArray.myMap((val, index) => {
  return val * val;
});
console.log(result); //    [ 1, 4, 9 ]
