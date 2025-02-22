// using .includes method of array, 🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰

// Do not remove nor make any changes in  main() function
function main() {
    var arr1 = readLine().split(" ").map(x => parseInt(x));
    var arr2 = readLine().split(" ").map(x => parseInt(x));
    var arr3 = readLine().split(" ").map(x => parseInt(x));
    console.log(findCommonElements(arr1, arr2, arr3));
}
function findCommonElements(arr1, arr2, arr3) {
  // Your code goes here
  let commonElements = []
  for(let i=0;i<arr1.length;i++){
    if(arr2.includes(arr1[i]) && arr3.includes(arr1[i]) && !commonElements.includes(arr1[i])){
        commonElements.push(arr1[i])
    }
  }
  return commonElements.length > 0 ? commonElements : []
}

// using Set data structure 🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰

// Do not remove nor make any changes in  main() function
function main() {
    var arr1 = readLine().split(" ").map(x => parseInt(x));
    var arr2 = readLine().split(" ").map(x => parseInt(x));
    var arr3 = readLine().split(" ").map(x => parseInt(x));
    console.log(findCommonElements(arr1, arr2, arr3));
}
function findCommonElements(arr1, arr2, arr3) {
  // Your code goes here
 let commonElements = []
 let set2 = new Set(arr2)
 let set3 = new Set(arr3)
 for(let num of arr1){
     if(set2.has(num) && set3.has(num) && !commonElements.includes(num)){
        commonElements.push(num)
     }
 }
 return commonElements.length > 0 ? commonElements : []
}