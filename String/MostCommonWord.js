const findMostFrequestWord = (string, banned) =>{
    let arr = string.toLowerCase().trim().replace(/[^a-z\s]/g, '').split(/\s+/);
    let max = -Infinity, maxStr = ''
    for(let i=0;i<arr.length;i++){
        let count = 1
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] === arr[j] && arr[i] !== banned){
                count++
            }
        }
        if(count > max){
            max = count
            maxStr = arr[i]
        }
    }
    return maxStr
}
console.log(findMostFrequestWord("Bob hit  a ball, the hit BALL flew far after it was hit.", "hit"))


// .replace(/[^a-z\s]/g, '')	Removes punctuation & special characters, keeping only letters & spaces.
// .split(/\s+/)	Splits text into words, handling extra spaces properly.



// with test cases
// Do not remove nor make any changes in  main() function
function main() {
	var paragraph = readLine();
    var banned = readLine().split(" ").map(x => (x));
    console.log(mostCommonWord(paragraph, banned));
}
var mostCommonWord = function(paragraph, banned) {
    // Your code goes here
	let bannedList = banned
	let max = -Infinity, maxStr = ''
	let arr = paragraph.toLowerCase().trim().replace(/[^a-z\s]/g, '').split(/\s+/);
	for(let i=0;i<arr.length;i++){
		if(bannedList.includes(arr[i])) continue;
		let count = 1
		for(let j=i+1;j<arr.length;j++){
				if(arr[i] === arr[j] ){
						 count++
				}
				if(count > max){
			        max = count
			        maxStr = arr[i]
		         }
		}		
	}
	return maxStr
};