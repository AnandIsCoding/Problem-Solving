// Approach : two pass solution
// This program sorts an array containing only 0s, 1s, and 2s by counting their occurrences 
//  and then overwriting the array with the counted number of each color.
const sortColors = (arr) =>{
    let countZeros = 0, countOnes = 0, countTwos = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i] === 0){
            countZeros ++
        }else if(arr[i] === 1){
            countOnes++
        }else if(arr[i] === 2){
            countTwos++
        }
    }

    //start from 0 to countofZeros-1 in array, than from countofZeros to countofZeros+countofOnes-1; than from countofZeros+countofOnes to end-1
    // fill with 0 , 1 than  2
    for(let i=0;i<arr.length;i++){
        if(i < countZeros){
              arr[i] = 0
        }else if(i<countZeros+countOnes){
              arr[i] = 1
          }else if(i < arr.length){
              arr[i] = 2
          } 
    }
    
    return arr
  }
  console.log(sortColors([1,2,0,1,0,2,0,1,2,1,2,0,0,1,0,2]))    //[ 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2 ]
