const isHappy = (num) =>{
    let set = new Set()
    if(num === 1) return true
    while (!set.has(num) && num !== 1) {
        set.add(num);
        let sum = 0;
        
        while (num) {
            let rem = num % 10;
            sum += rem * rem;
            num = Math.floor(num / 10);
        }
        
        num = sum; // Update num to the sum of squares
    }
    
    return num === 1;
}
console.log(isHappy(19))
console.log(isHappy(1))
console.log(isHappy(29))