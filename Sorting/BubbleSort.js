const bubbleSort = (arr) =>{
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] > arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}
console.log(bubbleSort([3,4,1,2,5,4,67,2]))


//  Time Complexity of Bubble Sort
//  Worst-case time complexity: O(n^2)
//  This happens when the input list is in reverse order, meaning every pair of elements is swapped in every pass through the list.
//  Average-case time complexity: O(n^2)
//  On average, Bubble Sort will need to go through the entire array n times for each of the n elements.
//  Best-case time complexity: O(n)
//  This happens when the input list is already sorted. In this case, bubble sort only needs to pass through the list once to confirm that it is sorted.
//  Space Complexity of Bubble Sort
