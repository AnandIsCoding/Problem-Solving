/// find max and 2nd max digit in string
const SecondLargest = (str) =>{
    let max = -Infinity, smax;
    for(let i=0;i<str.length;i++){
        if(str[i] > max){
            smax = max
            max = str[i]
        }else if(str[i] < max && str[i]>smax){
            smax = arr[i]
        }
    }
    return {max,smax}
}
console.log(SecondLargest('1234564789'))