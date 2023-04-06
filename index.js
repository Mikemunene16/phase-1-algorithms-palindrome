function isPalindrome(word) {
  // Write your algorithm here
  // const reverse = word.split("").reverse().join("");
  return word === word.split("").reverse().join("") ? true : false;
}

/* 
  Add your pseudocode here
  *1. Split the string 2.reverse the string,  3. Join the string, 4 write a condition that checks whether the word is the same when reversed.
*/

/*
  Add written explanation of your solution here
  ? Check whether if a word will read the same when the word is reversed
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
