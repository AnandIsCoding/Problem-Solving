// Do not remove nor make any changes in  main() function
function main() {
    var arr = readLine().split(" ").map(x => parseInt(x));
    console.log(findLeaders(arr));
}
function findLeaders(arr) {
  // Yore code goes here
  let leader = []
  for(let i=0;i<arr.length;i++){
        let flag = true
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] < arr[j] ){
                    flag = false
            }
        }
        if(flag){
            leader.push(arr[i])
        }
  }
  return leader
}

//   16, 17, 4, 3, 5, 2
//   17,5,2