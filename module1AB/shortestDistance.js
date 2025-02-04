function shortestDistance(wordsDict, word1, word2) {
    let minDistance = Infinity; // initialize the minimum distance to infinity
    let lastPosition = -1; // to track the last position of either word1 or word2

    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] === word1 || wordsDict[i] === word2) {
            // If the lastPosition is valid and the current word is different from the last word
            if (lastPosition !== -1 && wordsDict[i] !== wordsDict[lastPosition]) {
                minDistance = Math.min(minDistance, i - lastPosition);
            }
            // Update the lastPosition to the current index
            lastPosition = i;
        }
    }

    return minDistance;
}

// Example usage
const wordsDict = ["practice", "makes", "perfect", "coding", "makes"];
console.log(shortestDistance(wordsDict, "coding", "makes")); // Output: 1
