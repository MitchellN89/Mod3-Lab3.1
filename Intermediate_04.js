// 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a
// dash.
// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.

function camelCase(str) {
  const words = str.split("-");
  return words
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      } else {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
    })
    .join("");
}

console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-IMAGE")); // backgroundImage
console.log(camelCase("display")); // display
console.log(camelCase("BackGround-COLOR")); // I've also enforced lower case for characters that AREN'T the first letter of every word (except the first);
