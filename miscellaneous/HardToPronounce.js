function main() {
    var s = readLine();
    console.log(isEasyToPronounce(s));
}
function isEasyToPronounce(s) {
  // Your code goes here
  s = s.toLowerCase()
  let vowels = ['a', 'e', 'i', 'o', 'u',];
  for(let i=0;i<s.length-3;i++){
      if(!vowels.includes(s[i]) && !vowels.includes(s[i+1]) && !vowels.includes(s[i+2]) && !vowels.includes(s[i+3]) ){
        return 'NO'
      }
  }
  return 'YES'
}



// In Byteland, linguists have found that words with too many consecutive consonants can be challenging to pronounce. They've defined a rule: if a word contains four or more consecutive consonants, it's considered hard to pronounce. Otherwise, the word is considered easy to pronounce.

// For example, words like "apple" and "polish" are easy to say because they contain fewer than four consecutive consonants. On the other hand, a word like "tryst" or "schtschurowskia" is hard to say due to the long string of consonants.

// As a language researcher, your task is to create a program that checks if a given word is easy or hard to pronounce based on this rule. This check can be useful in real-world applications such as creating readable or easily pronounced product names, improving language models, or even filtering text in games and apps.

// Problem: Given a string S consisting of lowercase Latin characters, determine if the word is easy or hard to pronounce. A word is considered hard to pronounce if it contains four or more consecutive consonants. Otherwise, it's easy to pronounce.

// Print "YES" if the word is easy to pronounce and "NO" if it is hard.

// For this problem: Vowels are {a, e, i, o, u}. Consonants are all other lowercase Latin letters.