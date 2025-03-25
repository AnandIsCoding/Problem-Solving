function main() {
    var nums = readLine().split(" ").map(x => parseInt(x));
    var k = parseInt(readLine());
    console.log(findMaxAverage(nums, k));
}
const findMaxAverage = function(nums, k) {
   // Your Code Goes Here
   let highestAvg = -Infinity
   if(nums.length <= 1) return nums[0]/k
    for(let i=0;i<=nums.length-k;i++){
        let sum = 0, avg =0
        for(let j=i;j<i+k;j++){
            sum += nums[j]
        }
        avg = sum / k
        highestAvg = Math.max(avg,highestAvg)
    }
   return highestAvg
};
console.log(findMaxAverage([1,12,-5,-6,50,3], 4)); // ✅ Output: 12.75
console.log(findMaxAverage([5], 1));               // ✅ Output: 5
console.log(findMaxAverage([-1,-2,-3,-4], 2));     // ✅ Output: -1.5
console.log(findMaxAverage([4,2,1,3,3], 2));       // ✅ Output: 3.5
console.log(findMaxAverage([-10, -20, -30], 2));   // ✅ Output: -15
