// Notes, I think I can clean up the Fibonacci func a bit more

// 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
// sequence is the sum of the previous 2.
// e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.

// a) Write a function printFibonacci() using setInterval that outputs a number in
// the Fibonacci sequence every second.

function printFibonacci(initNum = 1, limit = 1) {
  let currentNum = initNum;
  let nextNum = 0;
  let counter = 0;
  const timer = setInterval(() => {
    const result = currentNum + nextNum;
    [currentNum, nextNum] = [nextNum, result];
    console.log(result);
    counter++;
    if (counter >= limit) {
      clearInterval(timer);
    }
  }, 250); //I've made this a bit faster just to get through the numbers quicker
}

printFibonacci(1, 20);

// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
// calls to do the same thing

const printFibonacciTimeouts = (num1, num2 = 0) => {
  let result = num1 + num2;
  setTimeout(() => {
    console.log(result);
    printFibonacciTimeouts(num2, result);
  }, 1000);
};

// printFibonacciTimeouts(1);

// c) Extend one of the above functions to accept a limit argument, which tells it how many
// numbers to print before stopping.
// // // done as above
