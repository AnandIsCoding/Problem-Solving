// Do not remove nor make any changes in main() function
function main() {
    let n=parseInt(readLine());
    let arr=[];
    for(let i=0;i<n;i++){
        let num=parseInt(readLine());
        arr.push(num);
    }
    console.log(bubbleSort(arr,n));
}
function bubbleSort( arr, n){
  // Your code goes here
  for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
  }
  return arr
}

// [5,3,8,4,2]


//  Time Complexity of Bubble Sort
//  Worst-case time complexity: O(n^2)
//  This happens when the input list is in reverse order, meaning every pair of elements is swapped in every pass through the list.
//  Average-case time complexity: O(n^2)
//  On average, Bubble Sort will need to go through the entire array n times for each of the n elements.
//  Best-case time complexity: O(n)
//  This happens when the input list is already sorted. In this case, bubble sort only needs to pass through the list once to confirm that it is sorted.
//  Space Complexity of Bubble Sort