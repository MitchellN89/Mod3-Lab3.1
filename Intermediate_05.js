// 5. Decimal number operations in JavaScript can lead to unexpected results, as in the
// following:

let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);
// 0.2 + 0.1 = 0.30000000000000004

// We can sometimes avoid this using the toFixed function to force the number of decimal
// places as below, but it’s not always useful:

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen); //why is this not working? - My answer below!

// a) Explain why the above code returns the wrong answer
// The problem here is that .toFixed returns a string, so we're simply concatenating the two strings.

// b) Create a function currencyAddition(float1, float2) which safely adds the two
// decimal numbers float1 and float2 and returns the correct float result.
function currencyAddition(float1, float2) {
  let result = (float1 + float2).toFixed(2);
  return result;
}

console.log("Safe Addition: ", currencyAddition(twentyCents, tenCents));

// c) Create a function currencyOperation(float1, float2, operation) which
// safely performs the given operation (either +, -, / or *) on the two numbers and returns
// the correct float result. https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Reference/Statements/switch may be useful.

function currencyOperation(float1, float2, operation, roundTo = 2) {
  // I've added in another parameter here. It specifies what to round the output to.
  if (typeof float1 === "number" && typeof float2 === "number") {
    switch (operation) {
      case "+":
        return (float1 + float2).toFixed(roundTo);
      case "-":
        return (float1 - float2).toFixed(roundTo);
      case "/":
        return (float1 / float2).toFixed(roundTo);
      case "*":
        return (float1 * float2).toFixed(roundTo);
      default:
        console.log("Invalid Input");
        break;
    }
  } else {
    console.log("Invalid Input");
  }
}

currencyOperation(12.45, 1.02, "+", 2); // 13.47
currencyOperation(12.45, 1.02, "-", 2); // 11.43
currencyOperation(12.45, 1.02, "/", 2); // 12.21
currencyOperation(12.45, 1.02, "*", 2); // 12.7
currencyOperation(12.45, 1.02, "*", 3); // 12.699
currencyOperation("12.45", 1.02, "+", 3); // Invalid Input
currencyOperation("12.45", 1.02, "&", 3); // Invalid Input

// d) (Extension) Extend the above function to include a fourth argument numDecimals
// which allows the operation to support different amounts of decimal places from 1 to 10.
// HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
// different values as well as the below:
// Whoops, I already did this earlier for fun...
// I also added a default value to roundTo in case nothing is passed in. It defaults to 2 dec places

console.log(0.3 == currencyAddition(0.1, 0.2)); // true
console.log(0.3 == currencyOperation(0.1, 0.2, "+", 2)); // true
