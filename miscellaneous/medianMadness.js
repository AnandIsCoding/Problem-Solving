function main() {
    var nums = readLine().split(" ").map(x => parseInt(x));
    console.log(distinctAverages(nums));
}
const distinctAverages = function(nums) {
   // Your Code Goes Here 
    nums.sort((a,b)=>a-b)
    let min = 0, max = nums.length-1, avg = 0, ans = []
    while(min < max){
        avg = (nums[min]+nums[max])/2
        if(!ans.includes(avg)){
            ans.push(avg)
        }
        min++
        max--
    }
    return ans.length
};

// You find yourself in front of a mystical ancient temple known for its unique power to cleanse people's negative emotions. To enter and undergo the ritual of purification, you must follow a sacred process:
// You have a list of negative emotions represented by integers. The ritual involves repeatedly discarding the smallest and largest emotions in pairs, calculating their average, and continuing the process until no pairs remain. The more unique averages you achieve during this process, the lighter and more balanced you feel.
// Your task is to calculate how many unique averages you can derive from your list of emotions. The number of negative emotions must be even, and every time you discard emotions, you gain a sense of inner peace by calculating their average.
// Can you determine the number of unique averages that can be calculated in this purification ritual?