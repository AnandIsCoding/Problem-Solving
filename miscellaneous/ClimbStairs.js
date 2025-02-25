// You are an adventurer who has embarked on an exciting journey and come across an infinite staircase with exactly n steps. To reach the top of the staircase, you can either take 1 step at a time or leap 2 steps at once. Your task is to determine the number of distinct ways you can climb to the top of the staircase.

// Can you figure out how many unique ways there are to climb the stairs, using either 1 step or 2 steps at a time?

// Imagine you are deep within a mysterious dungeon, and you need to climb a towering staircase to escape. The stairs are tricky, but you have mastered two techniques: you can either take one step at a time, or if you feel bold, you can leap two steps in one go. As you approach the bottom of the staircase, you wonder: how many different ways are there to reach the top?

// Input:
// n = 2

// Output:
// 2

// Explanation:
// There are two distinct ways to reach the top of a 2-step staircase:

// Take 1 step + 1 step
// Take 2 steps in one leap

const stair = (n) =>{
    if(n === 0) return 1
    if(n === 1) return 1
    return stair(n-1) + stair(n-2)
}
console.log(stair(3))