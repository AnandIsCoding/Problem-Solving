function titleCase(sentence) {
	// write your code here
   // validate
  if (typeof sentence !== "string" || sentence.trim() == "")
    return "Input Sentence must be a non empty string ";
  //trim sentence from both the end and split it on the basis of ' ' spaces which will create a new array of words
  const words = sentence.trim().toLowerCase().split(" ");
  // map returns a new array
  const formattedWords = words.map((word, index) => {
    return `${word[0].toUpperCase()}${word.slice(1)}`;
  });

  return formattedWords.join(" ");
}
console.log(titleCase("Be yourself everyone else is already taken.")); //Be Yourself Everyone Else Is Already Taken.
console.log(titleCase("Dream big, work hard, and stay focused")); //Dream Big, Work Hard, And Stay Focused
console.log(titleCase("")); //Input Sentence must be a non empty string
console.log(titleCase(" ")); //Input Sentence must be a non empty string


// Do not modify the below lines
module.exports = { titleCase };