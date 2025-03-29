const asteroidCollision = (arr) => {
    let index = -1; // Tracks last valid asteroid

    for (let asteroid of arr) {
        // Process each asteroid
        while (index >= 0 && arr[index] > 0 && asteroid < 0) {
            // Collision happens between arr[index] and asteroid
            if (Math.abs(arr[index]) < Math.abs(asteroid)) {
                index--; // Destroy last asteroid
                continue; // Keep checking previous asteroid
            } else if (Math.abs(arr[index]) === Math.abs(asteroid)) {
                index--; // Destroy both asteroids
            }
            asteroid = 0; // Destroy current asteroid
        }

        if (asteroid !== 0) {
            arr[++index] = asteroid; // Store the surviving asteroid
        }
    }

    return arr.slice(0, index + 1); // Return the remaining asteroids
};

// Example Test Cases
console.log(asteroidCollision([5, 10, -5]));        // [5,10]
console.log(asteroidCollision([8, -8]));            //  []
console.log(asteroidCollision([10, 2, -5]));         // [10]
console.log(asteroidCollision([-2, -1, 1, 2]));     // [-2, -1, 1, 2]
console.log(asteroidCollision([1, -1, 2, -2, 3, -3])); // []
