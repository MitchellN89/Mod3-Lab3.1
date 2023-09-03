// 9. We can delay execution of a function using setTimeout, where we need to provide both
// the callback function and the delay after which it should execute.

// a) Create a promise-based alternative randomDelay() that delays execution for a
// random amount of time (between 1 and 20 seconds) and returns a promise we can use
// via .then(), as in the starter code below
// // // done as below

// b) If the random delay is even, consider this a successful delay and resolve the promise,
// and if the random number is odd, consider this a failure and reject it

// c) Update the testing code to catch rejected promises and print a different message

// d) Try to update the then and catch messages to include the random delay value

function randomDelay() {
  const ranNum = Math.floor(Math.random() * 20000);

  return new Promise((res, rej) => {
    setTimeout(() => {
      if (ranNum % 2 === 0) {
        res(ranNum);
      } else {
        rej(ranNum);
      }
    }, ranNum);
  });
}
randomDelay()
  .then((result) =>
    console.log(`Your random number, ${result} was even, this is a success!`)
  )
  .catch((result) => {
    console.log(`Sorry, the number, ${result} is odd, so this is a fail...`);
  });
