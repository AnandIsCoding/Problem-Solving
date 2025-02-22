// Do not remove nor make any changes in  main() function
function main() {
    var arr = readLine().split(" ").map(x => parseInt(x));
    console.log(findSecondLargestDistinct(arr));
}
function findSecondLargestDistinct(arr) {
  // Your code goes here
  let max = -Infinity, smax = -Infinity
  for(let i=0;i<arr.length;i++){
        if(arr[i] > max){
            smax = max
            max = arr[i]
        }else if(arr[i] > smax && arr[i] < max){
            smax = arr[i]
        }
  }
  return smax !== -Infinity ? smax : -1
}