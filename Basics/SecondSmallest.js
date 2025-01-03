// Do not remove nor make any changes in  main() function
function main() {
    var num = readLine().split(" ").map(x => parseInt(x));
    console.log(findSecondSmallest(num));
}
function findSecondSmallest(numbers) {
  // Your code goes here
     let min = Infinity
    let smin = Infinity
    for(let i=0;i<numbers.length;i++){
        if(numbers[i] < min){
            smin = min
            min = numbers[i]
        }else if(numbers[i] > min && numbers[i] < smin ){
            smin = numbers[i]
        }
    }
    return smin === Infinity ? "No second smallest number" : smin;
}
