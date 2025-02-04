function findMove(s) {
    const results = []; 
    // Iterate through the string
    for (let i = 0; i < s.length - 1; i++) {
        // Check if the current and next character are "++"
        if (s[i] === "+" && s[i + 1] === "+") {
            // Flip the "++" to "--"
            const newState = s.slice(0, i) + "--" + s.slice(i + 2);
            results.push(newState);
        }
    }

    return results; // Return all possible states
}


console.log(findMove("++++")); //  ["--++", "+--+", "++--"]
console.log(findMove("+--+")); //  []
