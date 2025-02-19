function main() {
    var fruits = readLine().split(" ").map(x => (x));
    console.log(printFruitsByFrequency(fruits));
}
function printFruitsByFrequency(fruits) {
  // your code goes here
    let freq = {}
    for(let i = 0;i<fruits.length;i++){
       let  fruit =fruits[i]
        freq[fruit] = (freq[fruit] || 0) + 1;
    }
    let sortedFruits = Object.entries(freq)
        .sort((a, b) => b[1] - a[1]) // Sort by count (descending)
        .map(([fruit, count]) => fruit); 

    return sortedFruits 
  
}