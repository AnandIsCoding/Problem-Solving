// Do not remove nor make any changes in main() function
function main() {
    let n=parseInt(readLine());
    let arr=[];
    for(let i=0;i<n;i++){
        let num=parseInt(readLine());
        arr.push(num);
    }
    selectionSort(arr,n);
    console.log(arr);
}
function selectionSort(arr,  n){
  // Your code goes here
  for(let i = 0;i<n;i++){
    let minIndex = i
    for(let j=i;j<n;j++){
            if(arr[j] < arr[minIndex]){
               minIndex = j
            }
    }
    [arr[minIndex],arr[i]] = [arr[i],arr[minIndex]]
  }
  return arr
}