const fairCandySwap = (aliceSizes, bobSizes) => {
    let aliceSum = aliceSizes.reduce((acc, curr) => acc + curr, 0);
    let bobSum = bobSizes.reduce((acc, curr) => acc + curr, 0);
    let ans = [];

    for (let i = 0; i < aliceSizes.length; i++) {
        for (let j = 0; j < bobSizes.length; j++) {
            if ((aliceSum - aliceSizes[i] + bobSizes[j]) === (bobSum + aliceSizes[i] - bobSizes[j])) {
                ans.push(aliceSizes[i], bobSizes[j]); 
                return ans; // Return early to avoid unnecessary iterations
            }
        }
    }
    return ans;
};

console.log(fairCandySwap([1, 1],[2, 2]));
console.log(fairCandySwap([1, 2],[2, 3]));