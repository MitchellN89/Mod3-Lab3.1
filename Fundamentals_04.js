// 4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?
let a = 2,
  b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
  result += "less than 10";
} else {
  result += "greater than 10";
}
// My version below, i'll reassign result instead of redeclaring it as it has already been declared above.
result = `${a} + ${b} is ` + (a + b < 10 ? "less than 10" : "greater than 10"); // last part is the ternary operator

console.log(result);
