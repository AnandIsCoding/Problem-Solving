function main() {
    var nums = readLine().split(" ").map(x => parseInt(x));
    console.log(missingNumber(nums));
}
const missingNumber = function(nums) {
    // your Code Goes Here
    let n = nums.length   // Since one number is missing
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = nums.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
};



// Missing number in array
// You are given an array of integers containing n distinct numbers taken from 0, 1, 2, ..., n. This means that one number from this range is missing in the array. Your task is to find and return the missing number.