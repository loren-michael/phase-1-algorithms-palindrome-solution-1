function isPalindrome(word) {
  for(let i = 0; i < word.length / 2; i++) {
    const j = word.length - 1 - i;
    // const startChar = word[i];
    // const endChar = word[j];
    if (word[i]!== word[j]) return false;
  } return true
}

/* 
  We want to iterate through the word letter by letter, returning false if any two letters do not match until the function reaches the middle of the word
*/

/*
  I am using the index numbers of the characters in the word to formulate a way to look at the first character and the last character, then the second character and second to last character, and so on, until I reach the middle of the word. If any any point, the characters do not match, the function should stop and return a false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
