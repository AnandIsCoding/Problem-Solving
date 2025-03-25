function main() {
    var N = parseInt(readLine());
    var K = parseInt(readLine());
    var V = parseInt(readLine());
    var A = readLine().split(" ").map(x => parseInt(x));
    console.log(findDeletedElements(N, K, V, A));
}
const  findDeletedElements =function findDeletedElements(N, K, V, A) {
    // Your Code Goes Here
    let originalSeq = V * (N+K)
    let sum = A.reduce((curr,acc)=>curr+acc,0)
    let sumOfDeletedElement = originalSeq - sum
    let deletedElem = sumOfDeletedElement/K
    if(!Number.isInteger(deletedElem)){
        return 'Mistake: Deleted element value does not fit in K elements'
    }
    return Array(K).fill(deletedElem)
};