function main() {
    var nums = readLine().split(" ").map(x => parseInt(x));
    var target = parseInt(readLine());
    console.log(searchInsert(nums,target));
}
var searchInsert = function(nums, target){
    // Your code goes here
    for(let i=0;i<nums.length;i++){
      if(nums[i] >= target){
        return i
      }
    }   
    return nums.length
};



// You find yourself navigating through a well-organized library, where books are sorted on the shelves by their titles (or in this case, integers). Each book represents a unique integer in a sorted array, and you have a specific book (a target value) that you're searching for. Your mission is twofold: locate the index of the book if it exists, or determine the spot where this book would fit perfectly if it were added to the collection.

// This challenge mimics real-world applications, such as searching for elements in databases, determining insertion points for new data, or efficiently organizing and retrieving items in collections, all while ensuring optimal performance.