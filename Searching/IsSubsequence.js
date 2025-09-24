/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let p1 = 0, p2 = 0
    for (let i = 0; i < s.length; i++) {
        let flag = false
        while (p2 < t.length) {
            if (s[p1] === t[p2]) {
                p1++
                p2++
                flag = true
                break
            }else{
                p2++
            }
        }
        if(!flag) return false
    }
    return true
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let i = 0, j = 0
    while (j < t.length) {
        if (s[i] === t[j]) {
            j++
            i++
        }else{
            j++
        }
    }
    return i === s.length
};