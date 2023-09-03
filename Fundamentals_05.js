// 5. Rewrite the following function using:
function getGreeting(name) {
  return "Hello " + name + "!";
}

// a) function expression syntax, and

// Function Expression
const getGreetingExp = function (name) {
  return "Hello " + name + "!";
};

// b) arrow function syntax. Test each version to make sure they work the same.

// Arrow Func
const getGreetingArrow = (name) => {
  return `Hello ${name}!`; // changed this to a template literal for a bit of difference
};

console.log("getGreeting():", getGreeting("mitchell"));
console.log("getGreetingExp():", getGreetingExp("mitchell"));
console.log("getGreetingArrow():", getGreetingArrow("mitchell"));
