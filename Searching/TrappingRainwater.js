/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let n = height.length
    let sum = 0, maxL = [], maxR = []
    maxL[0] = height[0]
    maxR[n - 1] = height[n - 1]
    for (let i = 1; i < n; i++) {
        maxL[i] = Math.max(maxL[i - 1], height[i])
        maxR[n - i - 1] = Math.max(height[n - i - 1], maxR[n - i])
    }
    for (let i = 0; i < n; i++) {
        let watertrapped = Math.min(maxL[i], maxR[i]) - height[i]
        sum += Math.max(watertrapped, 0)
    }
    return sum
};