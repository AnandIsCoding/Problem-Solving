const threeSum = (arr, target) => {
  let indexes = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === target) {
          //push if not already pushed in duplicates elements case
          if (!indexes.includes(`(${arr[i]}, ${arr[j]}, ${arr[k]})`)) {
            indexes.push(`(${arr[i]}, ${arr[j]}, ${arr[k]})`);
          }
        }
      }
    }
  }
  return indexes.join(" ");
};
console.log(threeSum([-4, -1, -1, 0, 1, 2], 0));    //    (-1, -1, 2) (-1, 0, 1)
console.log(threeSum([ 3,5,6,7,2,5,9,0 ],13))       //    (3, 5, 5) (5, 6, 2) (6, 7, 0) (6, 2, 5)


// count 3 sum 🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐


const count3sum = (arr, target) =>{
  let count = 0
  for(let i=0;i<arr.length;i++){
      for(let j=i+1;j<arr.length;j++){
          for(let k=j+1;k<arr.length;k++){
              if(arr[i] + arr[j] + arr[k] === target){
                  console.log(`${arr[i]} ${arr[j]} ${arr[k]}`)
                  count++
              }
          }
      }
  }
  return count
}
console.log(count3sum([1,2,3,4,5,6,4,8,90,7,65,45,34],9))