// Do not remove nor make any changes in  main() function
function main() {
    var arr = readLine().split(" ").map(x => parseInt(x));
    console.log(minimumAbsDifference(arr));
}
var minimumAbsDifference = function(arr) {
    // Your code goes here
    arr = arr.sort((a,b)=>a-b)
    let min = Infinity , ans = []
    for(let i=0;i<arr.length;i++){    
            if(arr[i+1] - arr[i] < min){
                min = arr[i+1] - arr[i]
            }
    }
    for(let i=0;i<arr.length;i++){
            if(arr[i+1] - arr[i] === min){
               ans.push([arr[i],arr[i+1]])
            }
    }
    return ans
};