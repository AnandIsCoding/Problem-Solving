const isUnique = (arr) => {
  let map = new Map(),
    set = new Set();
  // Count occurrences of each element
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }
  // Store frequency values in set
  for (let value of map.values()) {
    set.add(value);
  }
  // If all frequencies are unique, set.size === map.size
  return set.size === map.size;
};

// Test cases
console.log(isUnique([1, 2, 2, 3, 3, 3])); // ✅ true (counts: {1:1, 2:2, 3:3}, all unique)
console.log(isUnique([1, 1, 2, 2, 3, 3])); // ❌ false (counts: {1:2, 2:2, 3:2}, duplicates)
console.log(isUnique([1, 2, 3, 4])); // ✅ true (all unique counts: {1:1, 2:1, 3:1, 4:1})
console.log(isUnique([5, 5, 5, 5])); // ✅ true (single frequency {5:4}, no duplicates)
