// 1. Create a function that takes a string as a parameter and returns the string with the first character of each word changed into a capital letter, as in the example below. Test it with different strings.
function ucFirstLetters(str) {
  const words = str.split(" ");
  const newWords = [];
  for (let word of words) {
    let newWord = word[0].toUpperCase() + word.slice(1);
    newWords.push(newWord);
  }
  return newWords.join(" ");
}

console.log(ucFirstLetters("los angeles")); //Los Angeles
console.log(ucFirstLetters("this is a test of multiple words")); //Los Angeles
console.log(ucFirstLetters("this is a test with a hyphen-word")); //Los Angeles
console.log(ucFirstLetters("and now some numbers ; 1 2 34")); //Los Angeles
