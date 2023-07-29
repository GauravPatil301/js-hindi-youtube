// JavaScript Algorithm: Reverse Word
// https://levelup.gitconnected.com/javascript-algorithm-reverse-words-9ddae3a3ba39
function reverseWords(str) {
    let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
    return reverseWordArr.join(" ");
  }
  console.log(reverseWords("Hello World"))