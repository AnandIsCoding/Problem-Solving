// Do not remove nor make any changes in  main() function
function main() {
    var arr = readLine().split(" ").map(x => parseInt(x));
    var N = parseInt(readLine());
    console.log(rearrangeArray(arr, N));
}
function rearrangeArray(arr, N) {
  // Your code goes here
  let nonNegative = [], negative = []
  for(let i=0;i<arr.length;i++){
    if(arr[i] < 0 ){
      negative.push(arr[i])
    }else{
      nonNegative.push(arr[i])
    }
  }
  return [...nonNegative,...negative]
}