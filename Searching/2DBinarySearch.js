const BinarySearch = (arr, target) => {
    let rows = arr.length, cols = arr[0].length;
    let start = 0, end = rows * cols - 1; 

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        let rowIndex = Math.floor(mid / cols);
        let colIndex = mid % cols;

        if (arr[rowIndex][colIndex] === target) {
            return `${rowIndex} ${colIndex}`;  // Return position as "row col"
        } else if (arr[rowIndex][colIndex] < target) {
            start = mid + 1;  // Search right
        } else {
            end = mid - 1;  // Search left
        }
    }
    return -1;  // Target not found
};

console.log(BinarySearch([[1,2,3],[4,5,6],[5,6,7]], 3)); // Expected Output: "0 2"
console.log(BinarySearch([[1,2,3],[4,5,6],[5,6,7]], 5)); // Expected Output: "1 1"
console.log(BinarySearch([[1,2,3],[4,5,6],[5,6,7]], 8)); // Expected Output: -1
