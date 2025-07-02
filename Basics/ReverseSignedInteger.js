/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = 0, copy = x 
    x = Math.abs(x)
    while(x){
        let rem = x % 10
        rev = rev * 10 + rem
        x = Math.floor(x/10)
    }
    if( (rev <  -(2**31) ) || (rev > (2**31)-1) ) return 0
    return copy<0 ? -rev : rev
};
