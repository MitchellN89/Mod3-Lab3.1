// 6. Use the Function prototype to add a new delay(ms) function to all functions, which can
// be used to delay the call to that function by ms milliseconds.
function multiply(a, b, c, d) {
  console.log(a * b * c * d);
}

// a) Use the example multiply function below to test it with, as above, and assume that all
// delayed functions will take two parameters

Function.prototype.delay = function (ms) {
  const context = this;
  return function () {
    setTimeout(
      (args, context) => {
        context.apply(context, args);
      },
      ms,
      arguments,
      context
    );
  };
};

// b) Use apply to improve your solution so that delayed functions can take any number of
// parameters
// // // done as above

// c) Modify multiply to take 4 parameters and multiply all of them, and test that your
// delay prototype function still works.
// // // done as above

multiply.delay(2000)(5, 5, 5, 5); // prints 625 after 2000 milliseconds
